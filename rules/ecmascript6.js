// ECMAScript 6 http://eslint.org/docs/rules/#ecmascript-6

module.exports = {
	"env": {
		"es6": true
	},
	"parserOptions": {
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
		}
	},
	"rules": {
		"arrow-body-style": [ "off", "as-needed" ], // TRIAL require braces in arrow function body
		"arrow-parens": [ "error", "as-needed" ], // require parens in arrow function arguments
		"arrow-spacing": [ "error", { "before": true, "after": true } ], // require space before/after arrow function's arrow (fixable)
		"constructor-super": "error", // verify calls of super() in constructors
		"generator-star-spacing": [ "error", { "before": true, "after": false } ], // enforce spacing around the * in generator functions (fixable)
		"no-class-assign": "error", // disallow modifying variables of class declarations
		"no-confusing-arrow": "off", // disallow arrow functions where they could be confused with comparisons
		"no-const-assign": "error", // disallow modifying variables that are declared using const
		"no-dupe-class-members": "error", // disallow duplicate name in class members
		"no-duplicate-imports": "error", // disallow duplicate module imports
		"no-new-symbol": "error", // disallow new operators with the Symbol object
		"no-restricted-imports": "off", // disallow specified modules when loaded by import
		"no-this-before-super": "error", // disallow use of this/super before calling super() in constructors
		"no-useless-computed-key": "error", // disallow unnecessary computed property keys in object literals
		"no-useless-constructor": "error", // disallow unnecessary constructors
		"no-useless-rename": "error", // disallow renaming import, export, and destructured assignments to the same name
		"no-var": "error", // require let or const instead of var
		"object-shorthand": [ "error", "always" ], // require method and property shorthand syntax for object literals
		"prefer-arrow-callback": "off", // suggest using arrow functions as callbacks
		"prefer-const": "error", // suggest using const declaration for variables that are never modified after declared
		"prefer-numeric-literals": "off", // disallow parseInt() in favor of binary, octal, and hexadecimal literals
		"prefer-reflect": "off", // suggest using Reflect methods where applicable
		"prefer-rest-params": "error", // require rest parameters instead of arguments
		"prefer-spread": "error", // suggest using the spread operator instead of .apply()
		"prefer-template": "error", // suggest using template literals instead of strings concatenation
		"require-yield": "error", // disallow generator functions that do not have yield
		"rest-spread-spacing": [ "error", "never" ], // enforce spacing between rest and spread operators and their expressions
		"sort-imports": "off", // enforce sorted import declarations within modules
		"symbol-description": "off", // require symbol descriptions
		"template-curly-spacing": [ "error", "always" ], // require or disallow spacing around embedded expressions of template strings
		"yield-star-spacing": "off" // require or disallow spacing around the * in yield* expressions
	}
};
