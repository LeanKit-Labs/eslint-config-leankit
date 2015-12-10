module.exports = {
	"extends": "eslint-config-leankit/base",
	"env": {
		"browser": true,
		"node": true,
		"mocha": true
	},
	"globals": {
		"before": true,
		"beforeEach": true,
		"describe": true,
		"global": true,
		"it": true,
		"sinon": true,
		"should": true
	},
	"rules": {
		"max-nested-callbacks": [ 2, 15 ],
		"no-unused-expressions": 0,
		"no-magic-numbers": 0,
		"react/prop-types": 0,
		"react/display-name": 0
	}
};
