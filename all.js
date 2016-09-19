module.exports = {
	"extends": [
		"./rules/best-practices.js",
		"./rules/possible-errors.js",
		"./rules/nodejs-and-commonjs.js",
		"./rules/strict-mode.js",
		"./rules/stylistic-issues.js",
		"./rules/variables.js",
		"./rules/ecmascript6.js",
		"./rules/react.js",
		"./rules/a11y.js"
	],
	"env": {
		"browser": true,
		"node": true,
		"commonjs": true
	}
};
