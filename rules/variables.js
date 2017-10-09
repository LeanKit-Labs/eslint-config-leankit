// Variables http://eslint.org/docs/rules/#variables

module.exports = {
	"rules": {
		"init-declarations": "off", //  enforce or disallow variable initializations at definition
		"no-catch-shadow": "error", // disallow the catch clause parameter name being the same as a variable in the outer scope
		"no-delete-var": "error", // disallow deletion of variables
		"no-label-var": "error", // disallow labels that share a name with a variable
		"no-restricted-globals": "off", // disallow specified global variables
		"no-shadow-restricted-names": "error", // disallow shadowing of names such as arguments
		"no-shadow": "error", // JSHINT disallow declaration of variables already declared in the outer scope
		"no-undef-init": "error", // disallow use of undefined when initializing variables
		"no-undef": "error", // JSHINT disallow use of undeclared variables unless mentioned in a /*global */ block
		"no-undefined": "off", // disallow use of undefined variable
		"no-unused-vars": [ "error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false, "argsIgnorePattern": "^_" } ], // JSHINT disallow declaration of variables that are not used in the code
		"no-use-before-define": [ "error", "nofunc" ] // JSHINT disallow use of variables before they are defined
	}
};
