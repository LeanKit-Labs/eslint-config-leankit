// Variables http://eslint.org/docs/rules/#variables

module.exports = {
	"rules": {
		"init-declarations": [ 2, "always" ], //  enforce or disallow variable initializations at definition
		"no-catch-shadow": 2, // disallow the catch clause parameter name being the same as a variable in the outer scope
		"no-delete-var": 2, // disallow deletion of variables
		"no-label-var": 2, // disallow labels that share a name with a variable
		"no-shadow-restricted-names": 2, // disallow shadowing of names such as arguments
		"no-shadow": 2, // JSHINT disallow declaration of variables already declared in the outer scope
		"no-undef-init": 2, // disallow use of undefined when initializing variables
		"no-undef": 2, // JSHINT disallow use of undeclared variables unless mentioned in a /*global */ block
		"no-undefined": 0, // disallow use of undefined variable
		"no-unused-vars": [ 2, { "vars": "all", "args": "none" } ], // JSHINT disallow declaration of variables that are not used in the code
		"no-use-before-define": [ 2, "nofunc" ] // JSHINT disallow use of variables before they are defined
	}
};
