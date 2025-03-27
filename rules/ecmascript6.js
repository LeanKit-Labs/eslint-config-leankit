export default [
	{
		languageOptions: {
			parserOptions: {
				ecmaVersion: "latest",
				ecmaFeatures: {
					arrowFunctions: true, // enable arrow functions
					binaryLiterals: true, // enable binary literals
					blockBindings: true, // enable let and const
					classes: true, // enable classes
					defaultParams: true, // enable default function parameters
					destructuring: true, // enable destructuring
					forOf: true, // enable for-of loops
					generators: true, // enable generators
					modules: true, // enable modules and global strict mode
					objectLiteralComputedProperties: true, // enable computed object literal property names
					objectLiteralDuplicateProperties: true, // enable duplicate object literal properties in strict mode
					objectLiteralShorthandMethods: true, // enable object literal shorthand methods
					objectLiteralShorthandProperties: true, // enable object literal shorthand properties
					octalLiterals: false, // enable octal literals
					regexUFlag: true, // enable the regular expression u flag
					regexYFlag: true, // enable the regular expression y flag
					restParams: true, // enable the rest parameters
					spread: true, // enable the spread operator for arrays
					superInFunctions: true, // enable super references inside of functions
					templateStrings: true, // enable template strings
					unicodeCodePointEscapes: true, // enable code point escapes
					globalReturn: false, // allow return statements in the global scope
					jsx: true // enable JSX
				}
			}
		},
		rules: {
			"arrow-body-style": [ "off", "as-needed" ],
			"arrow-parens": [ "error", "as-needed" ],
			"arrow-spacing": [ "error", { before: true, after: true } ],
			"constructor-super": "error",
			"generator-star-spacing": [ "error", { before: true, after: false } ],
			"no-class-assign": "error",
			"no-confusing-arrow": "off",
			"no-const-assign": "error",
			"no-dupe-class-members": "error",
			"no-duplicate-imports": "error",
			"no-new-symbol": "error",
			"no-restricted-imports": "off",
			"no-this-before-super": "error",
			"no-useless-computed-key": "error",
			"no-useless-constructor": "error",
			"no-useless-rename": "error",
			"no-var": "error",
			"object-shorthand": [ "error", "always" ],
			"prefer-arrow-callback": "off",
			"prefer-const": "error",
			"prefer-numeric-literals": "off",
			// "prefer-reflect": "off", // removed since this rule is deprecated
			"prefer-rest-params": "error",
			"prefer-spread": "error",
			"prefer-template": "error",
			"require-yield": "error",
			"rest-spread-spacing": [ "error", "never" ],
			"sort-imports": "off",
			"symbol-description": "off",
			"template-curly-spacing": [ "error", "always" ],
			"yield-star-spacing": "off"
		}
	}
];
