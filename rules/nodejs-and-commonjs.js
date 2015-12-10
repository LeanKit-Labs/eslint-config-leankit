// Node.js and CommonJS http://eslint.org/docs/rules/#nodejs-and-commonjs

module.exports = {
	"rules": {
		"callback-return": 2, // enforce return after a callback
		"global-require": 2, // enforce require() on top-level module scope
		"handle-callback-err": 0, // enforce require() on top-level module scope
		"no-mixed-requires": [ 2, { "grouping": true } ], //  enforce error handling in callbacks
		"no-new-require": 2, //  disallow mixing regular variable and require declarations
		"no-path-concat": 2, // disallow string concatenation with __dirname and __filename
		"no-process-exit": 2, // disallow process.exit()
		"no-restricted-modules": 0, // restrict usage of specified node modules
		"no-sync": 0 //  disallow use of synchronous methods
	}
};
