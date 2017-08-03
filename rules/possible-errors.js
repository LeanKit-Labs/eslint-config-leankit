// Possible Errors http://eslint.org/docs/rules/#possible-errors

module.exports = {
	"rules": {
		"no-cond-assign": [ "error", "always" ], // JSHINT disallow assignment in conditional expressions
		"no-console": "warn", // disallow use of console in the node environment
		"no-constant-condition": "error", // disallow use of constant expressions in conditions
		"no-control-regex": "error", // disallow control characters in regular expressions
		"no-debugger": "error", // JSHINT disallow use of debugger
		"no-dupe-args": "error", // disallow duplicate arguments in functions
		"no-dupe-keys": "error", // disallow duplicate keys when creating object literals
		"no-duplicate-case": "error", // disallow a duplicate case label
		"no-empty-character-class": "error", // disallow the use of empty character classes in regular expressions
		"no-empty": "error", // JSHINT disallow empty statements
		"no-ex-assign": "error", // disallow assigning to the exception in a catch block
		"no-extra-boolean-cast": "error", // disallow double-negation boolean casts in a boolean context
		"no-extra-parens": "off", // TRIAL disallow unnecessary parentheses
		"no-extra-semi": "error", // disallow unnecessary semicolons (fixable)
		"no-func-assign": "error", // disallow overwriting functions written as function declarations
		"no-inner-declarations": "error", // disallow function or variable declarations in nested blocks
		"no-invalid-regexp": "error", // disallow invalid regular expression strings in the RegExp constructor
		"no-irregular-whitespace": "error", // disallow irregular whitespace outside of strings and comments
		"no-negated-in-lhs": "error", // disallow negation of the left operand of an in expression
		"no-obj-calls": "error", // disallow the use of object properties of the global object (Math and JSON) as functions
		"no-prototype-builtins": "off", // disallow calling some Object.prototype methods directly on objects
		"no-regex-spaces": "error", // disallow multiple spaces in a regular expression literal
		"no-sparse-arrays": "error", //  disallow sparse arrays
		"no-template-curly-in-string": "error", // disallow template literal placeholder syntax in regular strings
		"no-unexpected-multiline": "error", //  Avoid code that looks like two expressions but is actually one
		"no-unreachable": "error", // disallow unreachable statements after a return, throw, continue, or break statement
		"no-unsafe-finally": "off", // disallow control flow statements in finally blocks
		"no-unsafe-negation": "off", // disallow negating the left operand of relational operators
		"use-isnan": "error", // disallow comparisons with the value NaN
		"valid-jsdoc": "error", // Ensure JSDoc comments are valid
		"valid-typeof": "error" // Ensure that the results of typeof are compared against a valid string
	}
};
