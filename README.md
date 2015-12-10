# eslint-config-leankit

[![Build Status](https://travis-ci.org/LeanKit-Labs/eslint-config-leankit.svg?branch=master)](https://travis-ci.org/LeanKit-Labs/eslint-config-leankit)

This package provides LeanKit's .eslintrc as an extensible [shared config](http://eslint.org/docs/developer-guide/shareable-configs).

## Usage

We support four ESLint configurations for your usage.

### eslint-config-leankit

Our default export contains the base of our ESLint rules, including ECMAScript 6+. It currently requires only `eslint`.

1. `npm install eslint eslint-config-leankit --save-dev`
2. add `"extends": "leankit"` to your .eslintrc

### eslint-config-leankit/test

This contains the default configuration and some rules for writing tests using [`mocha`](https://mochajs.org/).

1. `npm install eslint eslint-config-leankit --save-dev`
2. add `"extends": "leankit/test"` to your .eslintrc

### eslint-config-leankit/legacy

Lints ECMAScript 5 and below. This also only requires `eslint`.

1. `npm install eslint eslint-config-leankit --save-dev`
2. add `"extends": "leankit/legacy"` to your `.eslintrc`

### eslint-config-leankit/react

This contains all of our ESLint rules, including ECMAScript 6+ and React. It requires `eslint` and `eslint-plugin-react`.

1. `npm install eslint eslint-plugin-react eslint-config-leankit --save-dev`
2. add `"extends": "leankit/react"` to your .eslintrc

See also [LeanKit's Style Guide](https://github.com/LeanKit-Labs/touchstone/wiki) and
the [ESLint config documentation](http://eslint.org/docs/user-guide/configuring)
for more information.

## Tests

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
