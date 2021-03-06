// --------------------------------------------------------------------------------------------------------------------

"use strict"

// global
var ReactDOM = require('react-dom')

// local
var firebase = require('./firebase.js')
var store = require('./store.js')
var App = require('./app.js')
var router = require('./router.js')

// --------------------------------------------------------------------------------------------------------------------
// events

firebase.auth().onAuthStateChanged(function(currentUser) {
  console.log('onAuthStateChanged() - currentUser:', currentUser)

  if ( currentUser ) {
    const thisUser = {
      uid           : currentUser.uid,
      displayName   : currentUser.displayName || currentUser.email.split('@')[0],
      email         : currentUser.email,
      emailVerified : currentUser.emailVerified,
      isAnonymous   : currentUser.isAnonymous,
      photoURL      : currentUser.photoURL,
      providerId    : currentUser.providerData[0].providerId,
    }
    console.log('onAuthStateChanged() - thisUser:', thisUser)
    store.setUser(thisUser)

    // now that we have a user, let's listen for child events on '/user/<uid>/img/*'
    const imgRef = firebase.database().ref('/user/' + currentUser.uid)
    imgRef.on('child_added', function(data) {
      store.imgChanged(data.key, data.val())
    })
    imgRef.on('child_changed', function(data) {
      store.imgChanged(data.key, data.val())
    })
    imgRef.on('child_removed', function(data) {
      store.imgRemoved(data.key, data.val())
    })
  }
  else {
    // turn off notifications if the user was logged in
    const thisUser = store.getUser()
    if ( thisUser ) {
      firebase.database().ref('user/' + thisUser.uid).off()
    }
    store.reset()
    store.setUser(false)
  }
  render()
})

// See: http://jamesknelson.com/routing-with-raw-react/
function onHashChange() {
  var hash = window.location.hash

  // calls a function you provided OR returns a newHash (not both)
  console.log('onHashChange() - calling router.route()')
  var newHash = router.route(hash.substr(1))
  if ( !newHash ) return

  console.log('onHashChange() - got newHash=' + newHash)
  window.location.hash = newHash
}

// when there is a hashChange, call our function
window.addEventListener('hashchange', onHashChange, false)

// --------------------------------------------------------------------------------------------------------------------
// render

// debounce the rendering so we wait for all updates in the same short tick
var debounce
function render() {
  // if we have already been notified in this tick, just ignore it
  if (debounce) return
  debounce = setTimeout(() => {
    debounce = null
    console.log('render(): ...')
    ReactDOM.render(
      <App store={ store } />,
      document.getElementById('app')
    )
  }, 20)
}
store.listen(render)

// on startup, update the hash and render the app
onHashChange()

// --------------------------------------------------------------------------------------------------------------------
