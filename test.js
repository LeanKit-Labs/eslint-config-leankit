module.exports = {
	"env": {
		"mocha": true
	},
	"rules": {
		"max-nested-callbacks": [ "error", 15 ],
		"max-lines": [ "error", { "max": 2500 } ],
		"max-statements": "off",
		"no-magic-numbers": "off",
		"init-declarations": "off",
		"react/prop-types": "off",
		"react/display-name": "off",
		"react/no-multi-comp": "off",
		"react/prefer-stateless-function": "off"
	}
};
