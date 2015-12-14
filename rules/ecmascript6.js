// ECMAScript 6 http://eslint.org/docs/rules/#ecmascript-6

module.exports = {
	"env": {
		"es6": true
	},
	"ecmaFeatures": {
		"arrowFunctions": true, // enable arrow functions
		"binaryLiterals": true, // enable binary literals
		"blockBindings": true, // enable let and const
		"classes": true, // enable classes
		"defaultParams": true, // enable default function parameters
		"destructuring": true, // enable destructuring
		"forOf": true, // enable for-of loops
		"generators": true, // enable generators
		"modules": true, // enable modules and global strict mode
		"objectLiteralComputedProperties": true, // enable computed object literal property names
		"objectLiteralDuplicateProperties": true, // enable duplicate object literal properties in strict mode
		"objectLiteralShorthandMethods": true, // enable object literal shorthand methods
		"objectLiteralShorthandProperties": true, // enable object literal shorthand properties
		"octalLiterals": false, // enable octal literals
		"regexUFlag": true, // enable the regular expression u flag
		"regexYFlag": true, // enable the regular expression y flag
		"restParams": true, // enable the rest parameters
		"spread": true, // enable the spread operator for arrays
		"superInFunctions": true, // enable super references inside of functions
		"templateStrings": true, // enable template strings
		"unicodeCodePointEscapes": true, // enable code point escapes
		"globalReturn": false, // allow return statements in the global scope
		"jsx": true, // enable JSX
		"experimentalObjectRestSpread": true // enable support for the experimental object rest/spread properties
	},
	"rules": {
		"arrow-body-style": [ 0, "as-needed" ], // TRIAL require braces in arrow function body
		"arrow-parens": [ 2, "as-needed" ], // require parens in arrow function arguments
		"arrow-spacing": [ 2, { "before": true, "after": true } ], // require space before/after arrow function's arrow (fixable)
		"constructor-super": 2, // verify calls of super() in constructors
		"generator-star-spacing": [ 2, { "before": true, "after": false } ], // enforce spacing around the * in generator functions (fixable)
		"no-class-assign": 2, // disallow modifying variables of class declarations
		"no-const-assign": 2, // disallow modifying variables that are declared using const
		"no-dupe-class-members": 2, // disallow duplicate name in class members
		"no-this-before-super": 2, // disallow use of this/super before calling super() in constructors
		"no-var": 2, // require let or const instead of var
		"object-shorthand": [ 2, "always" ], // require method and property shorthand syntax for object literals
		"prefer-arrow-callback": 2, // suggest using arrow functions as callbacks
		"prefer-const": 2, // suggest using const declaration for variables that are never modified after declared
		"prefer-reflect": 0, // suggest using Reflect methods where applicable
		"prefer-spread": 2, // suggest using the spread operator instead of .apply()
		"prefer-template": 2, // suggest using template literals instead of strings concatenation
		"require-yield": 2 // disallow generator functions that do not have yield
	}
};
