import reactRules from "./rules/react.js";

export default [
	...reactRules,
	{
		rules: {
			// TRIAL: the complexity rule is turned off
			"complexity": "off"
		},
		settings: {
			react: {
				version: "18"
			}
		}
	}
];
