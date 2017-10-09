// Stylistic Issues http://eslint.org/docs/rules/#stylistic-issues

module.exports = {
	"rules": {
		"array-bracket-spacing": [ "error", "always" ], // JSCS enforce spacing inside array brackets (fixable)
		"block-spacing": [ "error", "always" ], // disallow or enforce spaces inside of single line blocks (fixable)
		"brace-style": [ "error", "1tbs", { allowSingleLine: true } ], // JSCS enforce one true brace style
		"camelcase": [ "error", { "properties": "always" } ], // JSCS require camel case names
		"comma-dangle": [ "error", "never" ], // JSCS disallow or enforce trailing commas
		"comma-spacing": [ "error", { "before": false, "after": true } ], // enforce spacing before and after comma (fixable)
		"comma-style": [ "error", "last" ], // JSCS enforce one true comma style
		"computed-property-spacing": [ "error", "always" ], // require or disallow padding inside computed properties (fixable)
		"consistent-this": [ "error", "self" ], // enforce consistent naming when capturing the current execution context
		"eol-last": "error", // JSCS enforce newline at the end of file, with no multiple empty lines (fixable)
		"func-call-spacing": [ "error", "never" ], // require or disallow spacing between function identifiers and their invocations
		"func-names": "off", // require function expressions to have a name
		"func-style": "off", // enforce use of function declarations or expressions
		"id-blacklist": "off", // disallow specified identifiers
		"id-length": [ "error", { "min": 1, "max": 100, "properties": "always", "exceptions": [] } ], // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
		"id-match": "off", // require identifiers to match the provided regular expression
		"indent": [ "error", "tab", { "SwitchCase": 1 } ], // JSCS specify tab or space width for your code (fixable)
		"jsx-quotes": [ "error", "prefer-double" ], // specify whether double or single quotes should be used in JSX attributes
		"key-spacing": [ "error", { "beforeColon": false, "afterColon": true } ], // JSCS enforce spacing between keys and values in object literal properties
		"keyword-spacing": [ "error", {
			"before": true, // require a space before certain keywords (fixable)
			"after": true, // JSCS require a space after certain keywords (fixable)
			"overrides": { // JSCS require a space after return, throw, and case (fixable)
				"return": { "after": true },
				"throw": { "after": true },
				"case": { "after": true }
			}
		} ], // enforce consistent spacing before and after keywords
		"line-comment-position": "off", // enforce position of line comments
		"linebreak-style": [ "error", "unix" ], // JSCS disallow mixed 'LF' and 'CRLF' as linebreaks
		"lines-around-comment": "off", // JSCS enforce empty lines around comments
		"lines-around-directive": "off", // require or disallow newlines around directives
		"max-depth": [ "error", 5 ], // specify the maximum depth that blocks can be nested
		"max-len": "off", // specify the maximum length of a line in your program
		"max-lines": [ "error", { "max": 1000 } ], // enforce a maximum number of lines per file
		"max-nested-callbacks": [ "error", 3 ], // specify the maximum depth callbacks can be nested
		"max-params": [ "error", 5 ], // limits the number of parameters that can be used in the function declaration.
		"max-statements-per-line": [ "error", { "max": 5 } ], // enforce a maximum number of statements allowed per line
		"max-statements": [ "error", { "max": 25 } ], // specify the maximum number of statement allowed in a function
		"multiline-ternary": "off", // enforce newlines between operands of ternary expressions
		"new-cap": "error", // JSCS require a capital letter for constructors
		"new-parens": "error", // disallow the omission of parentheses when invoking a constructor with no arguments
		"newline-after-var": [ "off", "always" ], // require or disallow an empty newline after variable declarations
		"newline-before-return": "off", // require an empty line before return statements
		"newline-per-chained-call": "off", // require a newline after each call in a method chain
		"no-array-constructor": "error", // disallow use of the Array constructor
		"no-bitwise": "off", // JSHINT disallow use of bitwise operators
		"no-continue": "error", // disallow use of the continue statement
		"no-inline-comments": "off", // disallow comments inline after code
		"no-lonely-if": "error", // disallow if as the only statement in an else block
		"no-mixed-operators": "error", // disallow mixed binary operators
		"no-mixed-spaces-and-tabs": "error", // JSCS disallow mixed spaces and tabs for indentation
		"no-multiple-empty-lines": [ "error", { max: 2 } ], // JSCS disallow multiple empty lines
		"no-negated-condition": "off", // TRIAL disallow negated conditions
		"no-nested-ternary": "error", // disallow nested ternary expressions
		"no-new-object": "error", // disallow the use of the Object constructor
		"no-plusplus": "off", // JSHINT disallow use of unary operators, ++ and --
		"no-restricted-syntax": [ "error", "WithStatement" ], // disallow use of certain syntax in code
		"no-tabs": "off", // disallow tabs in file
		"no-ternary": "off", // disallow the use of ternary operators
		"no-trailing-spaces": "error", // JSCS disallow trailing whitespace at the end of lines (fixable)
		"no-underscore-dangle": "off", // disallow dangling underscores in identifiers
		"no-unneeded-ternary": "error", // disallow the use of ternary operators when a simpler alternative exists
		"no-whitespace-before-property": "error", // disallow whitespace before properties
		"object-curly-newline": "off", // enforce consistent line breaks inside braces
		"object-curly-spacing": [ "error", "always" ], // require or disallow padding inside curly braces (fixable)
		"object-property-newline": "off", // enforce placing object properties on separate lines
		"one-var-declaration-per-line": "off", // require or disallow newlines around var declarations
		"one-var": [ "error", { "initialized": "never", "uninitialized": "always" } ], // JSCS require or disallow one variable declaration per function
		"operator-assignment": [ "error", "always" ], // require assignment operator shorthand where possible or prohibit it entirely
		"operator-linebreak": [ "error", "after", { "overrides": { "?": "after", ":": "after" } } ], // JSCS enforce operators to be placed before or after line breaks
		"padded-blocks": [ "error", "never" ], // JSCS enforce padding within blocks
		"quote-props": [ "error", "as-needed", { "keywords": false } ], // JSCS require quotes around object literal property names
		"quotes": [ "error", "double", { avoidEscape: true } ], // JSCS specify whether backticks, double or single quotes should be used (fixable)
		"require-jsdoc": [ "off" ], // Require JSDoc comment
		"semi-spacing": [ "error", { "before": false, "after": true } ], // enforce spacing before and after semicolons
		"semi": [ "error", "always" ], // JSCS require or disallow use of semicolons instead of ASI (fixable)
		"sort-keys": "off", // requires object keys to be sorted
		"sort-vars": "off", // sort variables within the same declaration block
		"space-before-blocks": [ "error", "always" ], // JSCS require or disallow a space before blocks (fixable)
		"space-before-function-paren": [ "error", { "anonymous": "ignore", "named": "never" } ], // JSCS require or disallow a space before function opening parenthesis (fixable)
		"space-in-parens": [ "error", "always" ], // JSCS require or disallow spaces inside parentheses
		"space-infix-ops": "error", // JSCS require spaces around operators (fixable)
		"space-unary-ops": [ "error", { "words": false, "nonwords": false } ], // JSCS require or disallow spaces before/after unary operators (fixable)
		"spaced-comment": [ "error", "always" ], // require or disallow a space immediately following the // or /* in a comment
		"unicode-bom": "off", // require or disallow Unicode byte order mark (BOM)
		"wrap-regex": "off" // require regex literals to be wrapped in parentheses
	}
};
