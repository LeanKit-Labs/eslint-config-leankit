# eslint-config-leankit

[![Build Status](https://travis-ci.org/LeanKit-Labs/eslint-config-leankit.svg?branch=master)](https://travis-ci.org/LeanKit-Labs/eslint-config-leankit)

This package provides LeanKit's ESLint configuration as an extensible [shared config](http://eslint.org/docs/developer-guide/shareable-configs).

## Usage

> **NOTICE: CommonJS Projects**
> If your project uses CommonJS, your ESLint config file must use the `.mjs` extension (e.g., `eslint.config.mjs`) for these configurations to work correctly.

We support many ESLint configurations for your usage.

All the below examples assume that you'll be including the base "eslint-config-leankit" configuration, but you are free to not include that if you wish.

### eslint-config-leankit

Our default export contains the base of our ESLint legacy rules (ECMAScript 5). It currently requires only `eslint`.

1. `npm install eslint eslint-config-leankit --save-dev`
2. add this to your `eslint.config.js` file:
    ```js
    import leankit from "eslint-config-leankit";

    export default leankit;
    ```

### eslint-config-leankit/es6

This exports ECMAScript 6+ features and rules. This also only requires `eslint`. You will probably want to extend this along with the base `leankit` rules.

1. `npm install eslint eslint-config-leankit --save-dev`
2. add this to your `eslint.config.js` file:
    ```js
    import base from "eslint-config-leankit";
    import es6 from "eslint-config-leankit/es6";

    export default [base, es6];
    ```

### eslint-config-leankit/react

These rules are specific to React development. It requires `eslint` and `eslint-plugin-react`.

1. `npm install eslint eslint-plugin-react eslint-config-leankit --save-dev`
2. add this to your `eslint.config.js` file:
    ```js
    import base from "eslint-config-leankit";
    import react from "eslint-config-leankit/react";

    export default [base, react];
    ```

### eslint-config-leankit/a11y

If you are using React and you'd like some Accessibility rules, then `a11y` is for you. It requires `eslint` and `eslint-plugin-jsx-a11y`.

1. `npm install eslint eslint-plugin-jsx-a11y eslint-config-leankit --save-dev`
2. add this to your `eslint.config.js` file:
    ```js
    import base from "eslint-config-leankit";
    import a11y from "eslint-config-leankit/a11y";

    export default [base, a11y];
    ```

### eslint-config-leankit/test

This some rules for writing tests using [`mocha`](https://mochajs.org/).

1. `npm install eslint eslint-config-leankit --save-dev`
2. add this to your `eslint.config.js` file:
    ```js
    import base from "eslint-config-leankit";
    import test from "eslint-config-leankit/test";

    export default [base, test];
    ```


### eslint-config-leankit/jsdoc-strict

This configuration enforces a strict set of JSDoc rules to ensure your code is thoroughly documented. It requires `eslint` and `eslint-plugin-jsdoc`.

1. `npm install eslint eslint-plugin-jsdoc eslint-config-leankit --save-dev`
2. add this to your `eslint.config.js` file:
    ```js
    import base from "eslint-config-leankit";
    import jsdocStrict from "eslint-config-leankit/jsdoc-strict";

    export default [base, jsdocStrict];
    ```

## Example Setup

### Simple Project Using All the Rules

```
.
└── eslint.config.js // with export default [base, es6];
```
```
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import leankit from "eslint-config-leankit";
import leankitEs6 from "eslint-config-leankit/es6.js";

export default defineConfig( [
	js.configs.recommended,
	leankit,
	leankitEs6,
	{
		files: [ "**/*.js", "**/*.cjs", "**/*.mjs" ],
		ignores: [
			"node_modules/",
			".idea/",
			".DS_Store",
			"*npm-debug.log",
			"log/",
			"coverage/",
			"*config.json",
			".nyc_output"
		]
	}
] );
```

### Complex Project with Some of the Rules

```
.
├── client
│   ├── js
│   │   └── eslint.config.js // export default [react];
│   └── spec
│       └── eslint.config.js // export default [test];
│   └── eslint.config.js     // export default [es6];
├── server
│   └── spec
│       └── eslint.config.js // export default [test];
└── eslint.config.js         // export default leankit;
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
