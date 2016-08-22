module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  "plugins": [
    "react",
  ],
  "settings": {
    "react": {
      "pragma": "React",
      "version": "15.0",
    },
  },
  "extends": "eslint:recommended",
  "rules": {
    "accessor-pairs": 2,
    "array-bracket-spacing": [
      2,
      "always"
    ],
    "array-callback-return": 2,
    "arrow-body-style": [ "error", "as-needed" ],
    "arrow-parens": [ "error", "always" ],
    "arrow-spacing": [
      2,
      {
        "after": true,
        "before": true
      }
    ],
    "block-scoped-var": 2,
    "block-spacing": 2,
    "brace-style": [ 2, 'stroustrup' ],
    "callback-return": 2,
    "camelcase": 0,
    "comma-dangle": [
      2,
      "only-multiline"
    ],
    "comma-spacing": [
      2,
      {
        "after": true,
        "before": false
      }
    ],
    "comma-style": [
      2,
      "last"
    ],
    "complexity": 2,
    "computed-property-spacing": [
      2,
      "never"
    ],
    "consistent-return": 0,
    "consistent-this": 2,
    "curly": 0,
    "default-case": 2,
    "dot-location": 2,
    "dot-notation": 0,
    "eol-last": 2,
    "eqeqeq": 2,
    "func-names": 0,
    "func-style": [
      2,
      "declaration"
    ],
    "generator-star-spacing": 2,
    "global-require": 2,
    "guard-for-in": 2,
    "handle-callback-err": 2,
    "id-blacklist": 2,
    "id-length": 0,
    "id-match": 2,
    "indent": 0,
    "init-declarations": 0,
    "jsx-quotes": 2,
    "react/jsx-uses-vars": 2,
    "key-spacing": 0,
    "keyword-spacing": 0,
    "linebreak-style": [
      2,
      "unix"
    ],
    "lines-around-comment": 0,
    "max-depth": 2,
    "max-len": 0,
    "max-nested-callbacks": 2,
    "max-params": 0,
    "max-statements": 0,
    "new-cap": 2,
    "new-parens": 2,
    "newline-after-var": 0,
    "newline-per-chained-call": 0,
    "no-alert": 2,
    "no-array-constructor": 2,
    "no-bitwise": 2,
    "no-caller": 2,
    "no-catch-shadow": 2,
    "no-confusing-arrow": 2,
    "no-console": 0,
    "no-continue": 2,
    "no-div-regex": 2,
    "no-else-return": 2,
    "no-empty-function": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-label": 2,
    "no-extra-parens": 0, // turn off since sometimes we want extra when using React
    "no-floating-decimal": 2,
    "no-implicit-globals": 2,
    "no-implied-eval": 2,
    "no-inline-comments": 0,
    "no-inner-declarations": [
      2,
      "functions"
    ],
    "no-invalid-this": 2,
    "no-iterator": 2,
    "no-label-var": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-lonely-if": 0,
    "no-loop-func": 2,
    "no-magic-numbers": 0,
    "no-mixed-requires": 2,
    "no-multi-spaces": 0,
    "no-multi-str": 2,
    "no-multiple-empty-lines": 2,
    "no-native-reassign": 2,
    "no-negated-condition": 2,
    "no-nested-ternary": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-require": 2,
    "no-new-wrappers": 2,
    "no-octal-escape": 2,
    "no-param-reassign": 0,
    "no-path-concat": 2,
    "no-plusplus": 0,
    "no-process-env": 0,
    "no-process-exit": 2,
    "no-proto": 2,
    "no-restricted-imports": 2,
    "no-restricted-modules": 2,
    "no-restricted-syntax": 2,
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-shadow": 0,
    "no-shadow-restricted-names": 2,
    "no-spaced-func": 2,
    "no-sync": 2,
    "no-ternary": 0,
    "no-throw-literal": 2,
    "no-trailing-spaces": 2,
    "no-undef": 2,
    "no-undef-init": 2,
    "no-undefined": 0,
    "no-underscore-dangle": 2,
    "no-unmodified-loop-condition": 2,
    "no-unneeded-ternary": 2,
    "no-unused-expressions": 2,
    "no-unused-vars": [
      2,
      {
        "vars": "all",
        "args": "none"
      }
    ],
    "no-use-before-define": 0,
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-useless-constructor": 2,
    "no-var": 0,
    "no-void": 0,
    "no-warning-comments": 0,
    "no-whitespace-before-property": 2,
    "no-with": 2,
    "object-curly-spacing": [
      2,
      "always"
    ],
    "object-shorthand": 0,
    "one-var": 0,
    "one-var-declaration-per-line": 2,
    "operator-assignment": [
      2,
      "always"
    ],
    "operator-linebreak": 2,
    "padded-blocks": [
      2,
      "never"
    ],
    "prefer-arrow-callback": 0,
    "prefer-const": 2,
    "prefer-reflect": 0,
    "prefer-rest-params": 2,
    "prefer-spread": 2,
    "prefer-template": 0,
    "quote-props": 0,
    "quotes": 0,
    "radix": 2,
    "require-jsdoc": 0,
    "require-yield": 2,
    "semi": [
      2,
      "never"
    ],
    "semi-spacing": 2,
    "sort-imports": 2,
    "sort-vars": 2,
    "space-before-blocks": 2,
    "space-before-function-paren": 0,
    "space-in-parens": 0,
    "space-infix-ops": 0,
    "space-unary-ops": 2,
    "spaced-comment": [
      2,
      "always"
    ],
    "strict": [
      2,
      "global"
    ],
    "template-curly-spacing": 2,
    "valid-jsdoc": 2,
    "vars-on-top": 0,
    "wrap-iife": 2,
    "wrap-regex": 2,
    "yield-star-spacing": 2,
    "yoda": [
      2,
      "never"
    ]
  }
}
