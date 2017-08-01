// Node.js and CommonJS http://eslint.org/docs/rules/#nodejs-and-commonjs

module.exports = {
	"rules": {
		"callback-return": "error", // enforce return after a callback
		"global-require": "error", // enforce require() on top-level module scope
		"handle-callback-err": "off", // enforce require() on top-level module scope
		"no-mixed-requires": [ "error", { "grouping": true } ], //  enforce error handling in callbacks
		"no-new-require": "error", //  disallow mixing regular variable and require declarations
		"no-path-concat": "error", // disallow string concatenation with __dirname and __filename
		"no-process-env": "off", // disallow use of process.env
		"no-process-exit": "error", // disallow process.exit()
		"no-restricted-modules": "off", // restrict usage of specified node modules
		"no-restricted-properties": "off", // disallow certain properties on certain objects
		"no-sync": "off" //  disallow use of synchronous methods
	}
};
