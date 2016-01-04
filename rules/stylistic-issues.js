// Stylistic Issues http://eslint.org/docs/rules/#stylistic-issues

module.exports = {
	"rules": {
		"array-bracket-spacing": [ 2, "always" ], // JSCS enforce spacing inside array brackets (fixable)
		"block-spacing": [ 2, "always" ], // disallow or enforce spaces inside of single line blocks (fixable)
		"brace-style": [ 2, "1tbs" ], // JSCS enforce one true brace style
		"camelcase": [ 2, { "properties": "always" } ], // JSCS require camel case names
		"comma-spacing": [ 2, { "before": false, "after": true } ], // enforce spacing before and after comma (fixable)
		"comma-style": [ 2, "last" ], // JSCS enforce one true comma style
		"computed-property-spacing": [ 2, "always" ], // require or disallow padding inside computed properties (fixable)
		"consistent-this": [ 2, "self" ], // enforce consistent naming when capturing the current execution context
		"eol-last": 2, // JSCS enforce newline at the end of file, with no multiple empty lines (fixable)
		"func-names": 0, // require function expressions to have a name
		"func-style": 0, // enforce use of function declarations or expressions
		"id-length": [ 2, { "min": 1, "max": 100, "properties": "always", "exceptions": [] } ], // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
		"id-match": 0, // require identifiers to match the provided regular expression
		"indent": [ 2, "tab", { "SwitchCase": 1 } ], // JSCS specify tab or space width for your code (fixable)
		"jsx-quotes": [ 2, "prefer-double" ], // specify whether double or single quotes should be used in JSX attributes
		"key-spacing": [ 2, { "beforeColon": false, "afterColon": true } ], // JSCS enforce spacing between keys and values in object literal properties
		"linebreak-style": [ 2, "unix" ], // JSCS disallow mixed 'LF' and 'CRLF' as linebreaks
		"lines-around-comment": 0, // JSCS enforce empty lines around comments
		"max-depth": [ 2, 5 ], // specify the maximum depth that blocks can be nested
		"max-len": 0, // specify the maximum length of a line in your program
		"max-nested-callbacks": [ 2, 3 ], // specify the maximum depth callbacks can be nested
		"max-params": [ 2, 5 ], // limits the number of parameters that can be used in the function declaration.
		"max-statements": [ 2, 25 ], // specify the maximum number of statement allowed in a function
		"new-cap": 2, // JSCS require a capital letter for constructors
		"new-parens": 2, // disallow the omission of parentheses when invoking a constructor with no arguments
		"newline-after-var": [ 0, "always" ], // require or disallow an empty newline after variable declarations
		"no-array-constructor": 2, // disallow use of the Array constructor
		"no-bitwise": 0, // JSHINT disallow use of bitwise operators
		"no-continue": 2, // disallow use of the continue statement
		"no-inline-comments": 0, // disallow comments inline after code
		"no-lonely-if": 2, // disallow if as the only statement in an else block
		"no-mixed-spaces-and-tabs": 2, // JSCS disallow mixed spaces and tabs for indentation
		"no-multiple-empty-lines": [ 2, { max: 2 } ], // JSCS disallow multiple empty lines
		"no-negated-condition": 0, // TRIAL disallow negated conditions
		"no-nested-ternary": 2, // disallow nested ternary expressions
		"no-new-object": 2, // disallow the use of the Object constructor
		"no-plusplus": 0, // JSHINT disallow use of unary operators, ++ and --
		"no-restricted-syntax": [ 2, "WithStatement" ], // disallow use of certain syntax in code
		"no-spaced-func": 2, // JSCS disallow space between function identifier and application (fixable)
		"no-ternary": 0, // disallow the use of ternary operators
		"no-trailing-spaces": 2, // JSCS disallow trailing whitespace at the end of lines (fixable)
		"no-underscore-dangle": 0, // disallow dangling underscores in identifiers
		"no-unneeded-ternary": 2, // disallow the use of ternary operators when a simpler alternative exists
		"object-curly-spacing": [ 2, "always" ], // require or disallow padding inside curly braces (fixable)
		"one-var": [ 2, { "initialized": "never", "uninitialized": "always" } ], // JSCS require or disallow one variable declaration per function
		"operator-assignment": [ 2, "always" ], // require assignment operator shorthand where possible or prohibit it entirely
		"operator-linebreak": [ 2, "after", { "overrides": { "?": "after", ":": "after" } } ], // JSCS enforce operators to be placed before or after line breaks
		"padded-blocks": [ 2, "never" ], // JSCS enforce padding within blocks
		"quote-props": [ 2, "as-needed", { "keywords": false } ], // JSCS require quotes around object literal property names
		"quotes": [ 2, "double", "avoid-escape" ], // JSCS specify whether backticks, double or single quotes should be used (fixable)
		"require-jsdoc": [ 0 ], // Require JSDoc comment
		"semi-spacing": [ 2, { "before": false, "after": true } ], // enforce spacing before and after semicolons
		"semi": [ 2, "always" ], // JSCS require or disallow use of semicolons instead of ASI (fixable)
		"sort-vars": 0, // sort variables within the same declaration block
		"space-after-keywords": [ 2, "always" ], // JSCS require a space after certain keywords (fixable)
		"space-before-blocks": [ 2, "always" ], // JSCS require or disallow a space before blocks (fixable)
		"space-before-function-paren": [ 2, "never" ], // JSCS require or disallow a space before function opening parenthesis (fixable)
		"space-before-keywords": [ 2, "always" ], // require a space before certain keywords (fixable)
		"space-in-parens": [ 2, "always" ], // JSCS require or disallow spaces inside parentheses
		"space-infix-ops": 2, // JSCS require spaces around operators (fixable)
		"space-return-throw-case": 2, // JSCS require a space after return, throw, and case (fixable)
		"space-unary-ops": 2, // JSCS require or disallow spaces before/after unary operators (fixable)
		"spaced-comment": [ 2, "always" ], // require or disallow a space immediately following the // or /* in a comment
		"wrap-regex": 0 // require regex literals to be wrapped in parentheses
	}
};
