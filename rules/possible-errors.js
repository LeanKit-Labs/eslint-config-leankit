export default [
	{
		rules: {
			"no-await-in-loop": "error", // disallow await inside of loops
			"no-cond-assign": [ "error", "always" ], // disallow assignment in conditional expressions
			"no-console": "warn", // disallow use of console in the node environment
			"no-constant-condition": "error", // disallow use of constant expressions in conditions
			"no-control-regex": "error", // disallow control characters in regular expressions
			"no-debugger": "error", // disallow use of debugger
			"no-dupe-args": "error", // disallow duplicate arguments in functions
			"no-dupe-keys": "error", // disallow duplicate keys when creating object literals
			"no-duplicate-case": "error", // disallow a duplicate case label
			"no-empty-character-class": "error", // disallow the use of empty character classes in regular expressions
			"no-empty": "error", // disallow empty statements
			"no-ex-assign": "error", // disallow assigning to the exception in a catch block
			"no-extra-boolean-cast": "error", // disallow double-negation boolean casts in a boolean context
			"no-extra-parens": "off", // TRIAL disallow unnecessary parentheses
			"no-extra-semi": "error", // disallow unnecessary semicolons (fixable)
			"no-func-assign": "error", // disallow overwriting functions written as function declarations
			"no-inner-declarations": "error", // disallow function or variable declarations in nested blocks
			"no-invalid-regexp": "error", // disallow invalid regular expression strings in the RegExp constructor
			"no-irregular-whitespace": "error", // disallow irregular whitespace outside of strings and comments
			// "no-negated-in-lhs": "error", // deprecated, replaced by no-unsafe-negation
			"no-obj-calls": "error", // disallow the use of object properties of the global object as functions
			"no-prototype-builtins": "off", // disallow calling some Object.prototype methods directly on objects
			"no-regex-spaces": "error", // disallow multiple spaces in a regular expression literal
			"no-sparse-arrays": "error", // disallow sparse arrays
			"no-template-curly-in-string": "error", // disallow template literal placeholder syntax in regular strings
			"no-unexpected-multiline": "error", // avoid code that looks like two expressions but is actually one
			"no-unreachable": "error", // disallow unreachable statements after control flow statements
			"no-unsafe-finally": "off", // disallow control flow statements in finally blocks
			"no-unsafe-negation": "off", // disallow negating the left operand of relational operators (handled by this rule instead of no-negated-in-lhs)
			"use-isnan": "error", // disallow comparisons with the value NaN
			// "valid-jsdoc": "error", // deprecated
			"valid-typeof": "error" // ensure that the results of typeof are compared against a valid string
		}
	}
];
