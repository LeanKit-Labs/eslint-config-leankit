import baseConfig from "./index.js";
import es6Config from "./es6.js";

export default [
	...baseConfig,
	...es6Config,
	{
		files: [ "**/*.{js,jsx,mjs,cjs}" ],
		languageOptions: {
			globals: {
				describe: true,
				it: true
			}
		},
		rules: {
			"quote-props": "off",
			"no-magic-numbers": "off",
			"prefer-arrow-callback": "off",
			"no-unused-expressions": "off",
			"max-nested-callbacks": "off"
		}
	}
];
