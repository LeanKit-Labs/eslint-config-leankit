export default [
	{
		rules: {
			"array-bracket-spacing": [ "error", "always" ], // enforce spacing inside array brackets (fixable)
			"block-spacing": [ "error", "always" ], // enforce spacing inside single-line blocks (fixable)
			"brace-style": [ "error", "1tbs", { allowSingleLine: true } ], // enforce one true brace style
			"camelcase": [ "error", { properties: "always" } ], // require camel case names
			"comma-dangle": [ "error", "never" ], // disallow trailing commas
			"comma-spacing": [ "error", { before: false, after: true } ], // enforce spacing before and after commas (fixable)
			"comma-style": [ "error", "last" ], // enforce comma style
			"computed-property-spacing": [ "error", "always" ], // require spacing inside computed properties (fixable)
			"consistent-this": [ "error", "self" ], // enforce consistent naming for capturing context
			"eol-last": "error", // enforce newline at end of file (fixable)
			"func-call-spacing": [ "error", "never" ], // disallow spacing between function name and call
			"func-names": "off", // disable requiring function expressions to have a name
			"func-style": "off", // do not enforce a particular function style
			"id-blacklist": "off", // do not disallow specified identifiers
			"id-length": [ "error", { min: 1, max: 100, properties: "always", exceptions: [] } ], // enforce identifier length limits
			"id-match": "off", // do not require identifiers to match a regex
			"indent": [ "error", "tab", { SwitchCase: 1 } ], // enforce tab indentation with 1 tab for switch cases
			"jsx-quotes": [ "error", "prefer-double" ], // enforce double quotes in JSX attributes
			"key-spacing": [ "error", { beforeColon: false, afterColon: true } ], // enforce spacing between keys and values in objects
			"keyword-spacing": [ "error", {
				before: true,
				after: true,
				overrides: {
					return: { after: true },
					throw: { after: true },
					case: { after: true }
				}
			} ], // enforce spacing before and after keywords
			"line-comment-position": "off", // do not enforce position of line comments
			"linebreak-style": [ "error", "unix" ], // enforce Unix linebreak style
			"lines-around-comment": "off", // do not enforce empty lines around comments
			"lines-around-directive": "off", // do not enforce newlines around directives
			"max-depth": [ "error", 5 ], // enforce maximum block nesting depth
			"max-len": "off", // do not enforce maximum line length
			"max-lines": [ "error", { max: 1000 } ], // enforce maximum lines per file
			"max-nested-callbacks": [ "error", 3 ], // enforce maximum callback nesting depth
			"max-params": [ "error", 5 ], // enforce maximum number of parameters in functions
			"max-statements-per-line": [ "error", { max: 5 } ], // enforce maximum statements per line
			"max-statements": [ "error", { max: 25 } ], // enforce maximum statements per function
			"multiline-ternary": "off", // do not enforce newlines for ternary expressions
			"new-cap": "error", // require constructor names to begin with a capital letter
			"new-parens": "error", // require parentheses when invoking a constructor with no arguments
			"newline-after-var": [ "off", "always" ], // do not enforce newline after variable declarations
			"newline-before-return": "off", // do not enforce newline before return statements
			"newline-per-chained-call": "off", // do not enforce newline per chained call
			"no-array-constructor": "error", // disallow use of the Array constructor
			"no-bitwise": "off", // allow bitwise operators
			"no-continue": "error", // disallow continue statements
			"no-inline-comments": "off", // allow inline comments
			"no-lonely-if": "error", // disallow if as the only statement in an else block
			"no-mixed-operators": "error", // disallow mixing operators
			"no-mixed-spaces-and-tabs": "error", // disallow mixed spaces and tabs
			"no-multiple-empty-lines": [ "error", { max: 2 } ], // disallow multiple empty lines
			"no-negated-condition": "off", // do not disallow negated conditions
			"no-nested-ternary": "error", // disallow nested ternary expressions
			"no-new-object": "error", // disallow use of the Object constructor
			"no-plusplus": "off", // allow unary operators ++ and --
			"no-restricted-syntax": [ "error", "WithStatement" ], // disallow use of 'with' statements
			"no-tabs": "off", // allow tabs in files
			"no-ternary": "off", // allow ternary operators
			"no-trailing-spaces": "error", // disallow trailing whitespace (fixable)
			"no-underscore-dangle": "off", // allow dangling underscores in identifiers
			"no-unneeded-ternary": "error", // disallow unnecessary ternary expressions
			"no-whitespace-before-property": "error", // disallow whitespace before properties
			"object-curly-newline": "off", // do not enforce line breaks inside braces
			"object-curly-spacing": [ "error", "always" ], // require spacing inside curly braces (fixable)
			"object-property-newline": "off", // do not enforce properties on separate lines
			"one-var-declaration-per-line": "off", // do not enforce one variable per line
			"one-var": [ "error", { initialized: "never", uninitialized: "always" } ], // enforce one var declaration per block
			"operator-assignment": [ "error", "always" ], // enforce shorthand assignment operators
			"operator-linebreak": [ "error", "after", { overrides: { "?": "after", ":": "after" } } ], // enforce linebreaks after operators
			"padded-blocks": [ "error", "never" ], // disallow padded blocks
			"quote-props": [ "error", "as-needed", { keywords: false } ], // enforce quoting of object properties as needed
			"quotes": [ "error", "double", { avoidEscape: true } ], // enforce double quotes (fixable)
			"require-jsdoc": [ "off" ], // do not require JSDoc comments
			"semi-spacing": [ "error", { before: false, after: true } ], // enforce spacing around semicolons
			"semi": [ "error", "always" ], // enforce semicolons (fixable)
			"sort-keys": "off", // do not require sorted keys in objects
			"sort-vars": "off", // do not enforce sorted variables
			"space-before-blocks": [ "error", "always" ], // enforce space before blocks (fixable)
			"space-before-function-paren": [ "error", { anonymous: "ignore", named: "never" } ], // enforce spacing before function parentheses (fixable)
			"space-in-parens": [ "error", "always" ], // enforce spacing inside parentheses
			"space-infix-ops": "error", // enforce spacing around infix operators (fixable)
			"space-unary-ops": [ "error", { words: false, nonwords: false } ], // enforce spacing for unary operators (fixable)
			"spaced-comment": [ "error", "always" ], // enforce spacing after comment markers
			"unicode-bom": "off", // do not enforce Unicode BOM usage
			"wrap-regex": "off" // do not require regex literals to be wrapped in parentheses
		}
	}
];
