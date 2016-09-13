module.exports = {
	"extends": [
		"eslint-config-leankit/rules/best-practices",
		"eslint-config-leankit/rules/possible-errors",
		"eslint-config-leankit/rules/nodejs-and-commonjs",
		"eslint-config-leankit/rules/strict-mode",
		"eslint-config-leankit/rules/stylistic-issues",
		"eslint-config-leankit/rules/variables",
		"eslint-config-leankit/rules/ecmascript6"
		// "eslint-config-leankit/rules/react"
	],
	"env": {
		"browser": true,
		"node": true,
		"commonjs": true
	}
};
