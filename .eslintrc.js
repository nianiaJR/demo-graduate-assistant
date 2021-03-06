// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    "jsdoc",
    'html'
  ],
  // add your custom rules here
  'rules': {
    "no-debugger": 0,
    "jsdoc/check-param-names": 2,
    "jsdoc/check-tag-names": 0,
    "jsdoc/check-types": 2,
    "jsdoc/newline-after-description": 0,
    "jsdoc/require-description-complete-sentence": 0,
    "jsdoc/require-hyphen-before-param-description": 0,
    "jsdoc/require-param": 2,
    "jsdoc/require-param-description": 0,
    "jsdoc/require-param-type": 2,
    "jsdoc/require-returns-description": 0,
    "jsdoc/require-returns-type": 2,

    "no-console": 0,
    "no-empty": 0,
    "no-control-regex": 2,
    "no-irregular-whitespace" : [2,  { "skipStrings": false }],

    "curly": 2,
    "indent": ['error', 4],
    "eqeqeq": 2,
    "dot-notation": [2, {
      "allowPattern": "^[a-z]+(_[a-z]+)+$"
    }],
    "no-alert": 2,
    "no-caller": 2,
    "no-div-regex": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extra-bind": 2,
    "no-floating-decimal": 2,
    "no-implicit-globals": 2,
    "no-implied-eval": 2,
    "no-iterator": 2,
    "no-labels": 2,
    "no-loop-func": 2,
    "no-lone-blocks": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-octal-escape": 2,
    "no-proto": 2,
    "no-redeclare": [2, { "builtinGlobals": true }],
    "no-script-url": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-unmodified-loop-condition": 1,
    "no-unused-expressions": [2, { "allowShortCircuit": true, "allowTernary": true }],
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-useless-escape": 2,
    "no-void": 2,
    "no-warning-comments": 1,
    "no-with": 2,
    "wrap-iife": [2, "any"],
    "radix": 2,

    "no-catch-shadow": 2,
    "no-label-var": 2,
    "no-restricted-globals": 2,
    "no-undef-init": 2,

    "arrow-body-style": 2,
    "generator-star-spacing": 2,
    "no-duplicate-imports": 2,
    "no-useless-computed-key": 2,
    "no-useless-constructor": 2,
    "no-useless-rename": 2,
    "rest-spread-spacing": 2,
    "template-curly-spacing": 2,
    "yield-star-spacing": 2,

    "camelcase": 2,
    "comma-style": 2,
    "computed-property-spacing": 2,
    "linebreak-style": 2,
    "max-nested-callbacks": 2,
    "max-statements-per-line": 2,
    "new-parens": 2,
    "no-array-constructor": 2,
    "no-bitwise": 2,
    "no-multiple-empty-lines": 2,
    "no-new-object": 2,
    "no-trailing-spaces": 2,
    "no-unneeded-ternary": 2,
    "no-whitespace-before-property": 2,
    "operator-assignment": 2,
    "semi-spacing": 2,
    "semi": ["error", "never"],
    "unicode-bom": 2,

    "no-new-require": 2,
    "no-path-concat": 2,
    "require-yield": 0
  }
}
