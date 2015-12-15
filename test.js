module.exports = {
	"env": {
		"es6": true,
		"mocha": true
	},
	"ecmaFeatures": {
		"modules": true, // enable modules and global strict mode
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
		"react/display-name": 0,
		"react/no-multi-comp": 0,
		"init-declarations": 0
	}
};
