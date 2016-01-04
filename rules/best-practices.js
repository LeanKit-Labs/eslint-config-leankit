// Best Practices http://eslint.org/docs/rules/#best-practices

module.exports = {
	"rules": {
		"accessor-pairs": [ 2, { "setWithoutGet": true } ], // enforces getter/setter pairs in objects
		"block-scoped-var": 2, // JSHINT treat var statements as if they were block scoped
		"complexity": [ 0, 5 ], // TRIAL specify the maximum cyclomatic complexity allowed in a program
		"consistent-return": 2, // require return statements to either always or never specify values
		"curly": [ 2, "all" ], // JSCS specify curly brace conventions for all control statements
		"default-case": 2, // require default case in switch statements
		"dot-location": [ 2, "property" ], // enforces consistent newlines before or after dots
		"dot-notation": 2, // JSCS encourages use of dot notation whenever possible
		"eqeqeq": [ 2, "smart" ], // JSHINT require the use of === and !== (fixable)
		"guard-for-in": 2, // JSHINT make sure for-in loops have an if statement
		"no-alert": 2, // disallow the use of alert, confirm, and prompt
		"no-caller": 2, // JSHINT disallow use of arguments.caller or arguments.callee
		"no-case-declarations": 2, // disallow lexical declarations in case clauses
		"no-div-regex": 2, // disallow division operators explicitly at beginning of regular expression
		"no-else-return": 2, // disallow else after a return in an if
		"no-empty-label": 2, // disallow use of labels for anything other than loops and switches
		"no-empty-pattern": 2, // disallow use of empty destructuring patterns
		"no-eq-null": 0, // JSHINT disallow comparisons to null without a type-checking operator
		"no-eval": 2, // JSHINT disallow use of eval()
		"no-extend-native": 2, // disallow adding to native types
		"no-extra-bind": 2, // disallow unnecessary function binding
		"no-fallthrough": 2, // disallow fallthrough of case statements
		"no-floating-decimal": 2, // disallow the use of leading or trailing decimal points in numeric literals
		"no-implicit-coercion": 0, // disallow the type conversions with shorter notations
		"no-implied-eval": 2, // disallow use of eval()-like methods
		"no-invalid-this": 2, // JSHINT disallow this keywords outside of classes or class-like objects
		"no-iterator": 2, // JSHINT disallow usage of __iterator__ property
		"no-labels": 2, // disallow use of labeled statements
		"no-lone-blocks": 2, // disallow unnecessary nested blocks
		"no-loop-func": 2, // JSHINT disallow creation of functions within loops
		"no-magic-numbers": 2, // disallow the use of magic numbers
		"no-multi-spaces": 2, // JSCS disallow use of multiple spaces (fixable)
		"no-multi-str": 2, // JSCS disallow use of multiline strings
		"no-native-reassign": 2, // disallow reassignments of native objects
		"no-new-func": 2, // JSHINT disallow use of new operator for Function object
		"no-new-wrappers": 2, // JSHINT disallows creating new instances of String,Number, and Boolean
		"no-new": 2, // JSHINT disallow use of the new operator when not part of an assignment or comparison
		"no-octal-escape": 2, // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
		"no-octal": 2, // disallow use of octal literals
		"no-param-reassign": [ 0, { "props": false } ], // TRIAL disallow reassignment of function parameters
		"no-process-env": 0, // disallow use of process.env
		"no-proto": 2, // JSHINT disallow usage of __proto__ property
		"no-redeclare": 2, // disallow declaring the same variable more than once
		"no-return-assign": 2, // disallow use of assignment in return statement
		"no-script-url": 2, // JSHINT disallow use of javascript: urls.
		"no-self-compare": 2, // disallow comparisons where both sides are exactly the same
		"no-sequences": 2, // disallow use of the comma operator
		"no-throw-literal": 2, // restrict what can be thrown as an exception
		"no-unused-expressions": 2, // JSHINT disallow usage of expressions in statement position
		"no-useless-call": 2, // disallow unnecessary .call() and .apply()
		"no-useless-concat": 2, // disallow unnecessary concatenation of literals or template literals
		"no-void": 2, // disallow use of the void operator
		"no-warning-comments": [ 0, { "terms": [ "todo", "fixme", "xxx" ], "location": "start" } ], // disallow usage of configurable warning terms in comments - e.g. TODO or FIXME
		"no-with": 2, // JSCS disallow use of the with statement
		"radix": 2, // require use of the second argument for parseInt()
		"vars-on-top": 0, // require declaration of all vars at the top of their containing scope
		"wrap-iife": 2, // JSCS require immediate function invocation to be wrapped in parentheses
		"yoda": 2 // require or disallow Yoda conditions
	}
};
