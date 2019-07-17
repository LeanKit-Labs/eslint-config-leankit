# eslint-config-leankit

[![Build Status](https://travis-ci.org/LeanKit-Labs/eslint-config-leankit.svg?branch=master)](https://travis-ci.org/LeanKit-Labs/eslint-config-leankit)

This package provides LeanKit's .eslintrc as an extensible [shared config](http://eslint.org/docs/developer-guide/shareable-configs).

## Usage

We support four ESLint configurations for your usage.

### eslint-config-leankit

Our default export contains the base of our ESLint legacy rules (ECMAScript 5). It currently requires only `eslint`.

1. `npm install eslint eslint-config-leankit --save-dev`
2. add `"extends": "leankit"` to your `.eslintrc`

### eslint-config-leankit/es6

This exports ECMAScript 6+ features and rules. This also only requires `eslint`. You will probably want to extend this along with the base `leankit` rules.

1. `npm install eslint eslint-config-leankit --save-dev`
2. add `"extends": [ "leankit/es6" ]` to your `.eslintrc` or you can choose to merge the base and es6 rules `"extends": [ "leankit", "leankit/es6" ]`

### eslint-config-leankit/react

These rules are specific to React development. It requires `eslint` and `eslint-plugin-react`.

1. `npm install eslint eslint-plugin-react eslint-config-leankit --save-dev`
2. add `"extends": "leankit/react"` to your `.eslintrc` or you can choose to merge the base and react rules `"extends": [ "leankit", "leankit/react" ]`

### eslint-config-leankit/a11y

If you are using React and you'd like some Accessibility rules, then `a11y` is for you. It requires `eslint` and `eslint-plugin-jsx-a11y`.

1. `npm install eslint eslint-plugin-jsx-a11y eslint-config-leankit --save-dev`
2. add `"extends": "leankit/a11y"` to your `.eslintrc` or you can choose to merge the base and react rules `"extends": [ "leankit", "leankit/a11y" ]`

### eslint-config-leankit/test

This some rules for writing tests using [`mocha`](https://mochajs.org/).

1. `npm install eslint eslint-config-leankit --save-dev`
2. add `"extends": "leankit/test"` to your `.eslintrc`

## Example Setup

### Simple Project Using All the Rules

```
.
└── .eslintrc // extends: [ "leankit", "leankit/es6" ]
```

### Complex Project with Some of the Rules

```
.
├── client
│   ├── js
│   │   └── .eslintrc // extends: "react"
│   └── spec
│   │   └── .eslintrc // extends: "test"
│   └── .eslintrc     // extends: "es6"
├── server
│   └── spec
│       └── .eslintrc // extends: "test"
└── .eslintrc         // extends: "leankit"
```

## Tests

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.

## Development Tips

Using `npm link ../eslint-config-leankit` or `npm install ../eslint-config-leankit` to test changes locally don't work well with this repo. Instead, use `npm pack` which will create a `tgz` file (example: `eslint-config-leankit-4.5.0.tgz`). From there you can install the packed file into another project (example: `npm i ../eslint-config-leankit/eslint-config-leankit-4.5.0.tgz --no-save`). Once installed you can run linting, but it's recommended to remove ESLint's cache first (example: `rm .eslintcache && npm run lint`) 

```
eslint-config-leankit > npm pack
eslint-config-leankit > cd ../other-project
other-project > npm i ../eslint-config-leankit/eslint-config-leankit-4.5.0.tgz --no-save
other-project > rm .eslintcache && npm run lint 
```

## References

See also [LeanKit's Style Guide](https://github.com/LeanKit-Labs/touchstone/wiki) and
the [ESLint config documentation](http://eslint.org/docs/user-guide/configuring)
for more information.
