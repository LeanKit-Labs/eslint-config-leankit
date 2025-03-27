export default [
	{
		files: [ "test.js" ],
		languageOptions: {
			globals: {
				// Mocha environment globals
				describe: "readonly",
				it: "readonly",
				before: "readonly",
				after: "readonly",
				beforeEach: "readonly",
				afterEach: "readonly"
			}
		},
		rules: {
			"max-nested-callbacks": [ "error", 15 ],
			"max-lines": [ "error", { max: 2500 } ],
			"max-statements": "off",
			"no-magic-numbers": "off",
			"init-declarations": "off",
			"react/prop-types": "off",
			"react/display-name": "off",
			"react/no-multi-comp": "off",
			"react/prefer-stateless-function": "off"
		}
	}
];
