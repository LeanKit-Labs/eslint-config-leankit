export default [
	{
		rules: {
			"accessor-pairs": [ "error", { "setWithoutGet": true } ], // enforces getter/setter pairs in objects
			"array-callback-return": "error", // enforce return statements in callbacks of array methods
			"block-scoped-var": "error", // JSHINT treat var statements as if they were block scoped
			"class-methods-use-this": "off", // enforce that class methods utilize this
			"complexity": [ "off", 5 ], // TRIAL specify the maximum cyclomatic complexity allowed in a program
			"consistent-return": "off", // require return statements to either always or never specify values
			"curly": [ "error", "all" ], // JSCS specify curly brace conventions for all control statements
			"default-case": "error", // require default case in switch statements
			"dot-location": [ "error", "property" ], // enforces consistent newlines before or after dots
			"dot-notation": [ "error", { "allowPattern": "^[a-z]+(_[a-z]+)+$" } ], // JSCS encourages use of dot notation whenever possible
			"eqeqeq": [ "error", "smart" ], // JSHINT require the use of === and !== (fixable)
			"guard-for-in": "error", // JSHINT make sure for-in loops have an if statement
			"no-alert": "error", // disallow the use of alert, confirm, and prompt
			"no-caller": "error", // JSHINT disallow use of arguments.caller or arguments.callee
			"no-case-declarations": "error", // disallow lexical declarations in case clauses
			"no-div-regex": "error", // disallow division operators explicitly at beginning of regular expression
			"no-else-return": "error", // disallow else after a return in an if
			"no-empty-function": "off", // disallow empty functions
			"no-empty-pattern": "error", // disallow use of empty destructuring patterns
			"no-eq-null": "off", // JSHINT disallow comparisons to null without a type-checking operator
			"no-eval": "error", // JSHINT disallow use of eval()
			"no-extend-native": "error", // disallow adding to native types
			"no-extra-bind": "error", // disallow unnecessary function binding
			"no-extra-label": "error", // disallow unnecessary labels
			"no-fallthrough": "error", // disallow fallthrough of case statements
			"no-floating-decimal": "error", // disallow the use of leading or trailing decimal points in numeric literals
			"no-global-assign": "error", // disallow assignments to native objects or read-only global variables
			"no-implicit-coercion": "off", // disallow the type conversions with shorter notations
			"no-implicit-globals": "off", // disallow var and named function declarations in the global scope
			"no-implied-eval": "error", // disallow use of eval()-like methods
			"no-invalid-this": "error", // JSHINT disallow this keywords outside of classes or class-like objects
			"no-iterator": "error", // JSHINT disallow usage of __iterator__ property
			"no-labels": "error", // disallow use of labeled statements
			"no-lone-blocks": "error", // disallow unnecessary nested blocks
			"no-loop-func": "error", // JSHINT disallow creation of functions within loops
			"no-magic-numbers": [ "error", { "ignore": [ -1, -0.5, 0, 0.5, 1, 2, 100 ] } ], // disallow the use of magic numbers except common incrementers / indexes
			"no-multi-spaces": "error", // JSCS disallow use of multiple spaces (fixable)
			"no-multi-str": "error", // JSCS disallow use of multiline strings
			"no-new-func": "error", // JSHINT disallow use of new operator for Function object
			"no-new-wrappers": "error", // JSHINT disallows creating new instances of String,Number, and Boolean
			"no-new": "error", // JSHINT disallow use of the new operator when not part of an assignment or comparison
			"no-octal-escape": "error", // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \u00A9";
			"no-octal": "error", // disallow use of octal literals
			"no-param-reassign": [ "off", { "props": false } ], // TRIAL disallow reassignment of function parameters
			"no-proto": "error", // JSHINT disallow usage of __proto__ property
			"no-redeclare": "error", // disallow declaring the same variable more than once
			"no-return-assign": "error", // disallow use of assignment in return statement
			"no-script-url": "error", // JSHINT disallow use of javascript: urls.
			"no-self-assign": "error", // disallow assignments where both sides are exactly the same
			"no-self-compare": "error", // disallow comparisons where both sides are exactly the same
			"no-sequences": "error", // disallow use of the comma operator
			"no-throw-literal": "error", // restrict what can be thrown as an exception
			"no-unmodified-loop-condition": "error", // disallow unmodified loop conditions
			"no-unused-expressions": "error", // JSHINT disallow usage of expressions in statement position
			"no-unused-labels": "error", // disallow unused labels
			"no-useless-call": "error", // disallow unnecessary .call() and .apply()
			"no-useless-concat": "error", // disallow unnecessary concatenation of literals or template literals
			"no-useless-escape": "error", // disallow unnecessary escape characters
			"no-void": "error", // disallow use of the void operator
			"no-warning-comments": [ "off", { "terms": [ "todo", "fixme", "xxx" ], "location": "start" } ], // disallow usage of configurable warning terms in comments - e.g. TODO or FIXME
			"no-with": "error", // JSCS disallow use of the with statement
			"radix": "error", // require use of the second argument for parseInt()
			"vars-on-top": "off", // require declaration of all vars at the top of their containing scope
			"wrap-iife": "error", // JSCS require immediate function invocation to be wrapped in parentheses
			"yoda": "error" // require or disallow Yoda conditions
		}
	}
];
