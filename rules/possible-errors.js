// Possible Errors http://eslint.org/docs/rules/#possible-errors

module.exports = {
	"rules": {
		"comma-dangle": [ 2, "never" ], // JSCS disallow or enforce trailing commas
		"no-cond-assign": [ 2, "always" ], // JSHINT disallow assignment in conditional expressions
		"no-console": 1, // disallow use of console in the node environment
		"no-constant-condition": 2, // disallow use of constant expressions in conditions
		"no-control-regex": 2, // disallow control characters in regular expressions
		"no-debugger": 2, // JSHINT disallow use of debugger
		"no-dupe-args": 2, // disallow duplicate arguments in functions
		"no-dupe-keys": 2, // disallow duplicate keys when creating object literals
		"no-duplicate-case": 2, // disallow a duplicate case label
		"no-empty-character-class": 2, // disallow the use of empty character classes in regular expressions
		"no-empty": 2, // JSHINT disallow empty statements
		"no-ex-assign": 2, // disallow assigning to the exception in a catch block
		"no-extra-boolean-cast": 2, // disallow double-negation boolean casts in a boolean context
		"no-extra-parens": 0, // TRIAL disallow unnecessary parentheses
		"no-extra-semi": 2, // disallow unnecessary semicolons (fixable)
		"no-func-assign": 2, // disallow overwriting functions written as function declarations
		"no-inner-declarations": 2, // disallow function or variable declarations in nested blocks
		"no-invalid-regexp": 2, // disallow invalid regular expression strings in the RegExp constructor
		"no-irregular-whitespace": 2, // disallow irregular whitespace outside of strings and comments
		"no-negated-in-lhs": 2, // disallow negation of the left operand of an in expression
		"no-obj-calls": 2, // disallow the use of object properties of the global object (Math and JSON) as functions
		"no-regex-spaces": 2, // disallow multiple spaces in a regular expression literal
		"no-sparse-arrays": 2, //  disallow sparse arrays
		"no-unexpected-multiline": 2, //  Avoid code that looks like two expressions but is actually one
		"no-unreachable": 2, // disallow unreachable statements after a return, throw, continue, or break statement
		"use-isnan": 2, // disallow comparisons with the value NaN
		"valid-jsdoc": 2, // Ensure JSDoc comments are valid
		"valid-typeof": 2 // Ensure that the results of typeof are compared against a valid string
	}
};
