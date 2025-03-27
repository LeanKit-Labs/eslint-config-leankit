import bestPractices from "./rules/best-practices.js";
import possibleErrors from "./rules/possible-errors.js";
import nodeCommonjs from "./rules/nodejs-and-commonjs.js";
import strictMode from "./rules/strict-mode.js";
import stylisticIssues from "./rules/stylistic-issues.js";
import variables from "./rules/variables.js";
import ecmascript6 from "./rules/ecmascript6.js";
import reactRules from "./rules/react.js";
import a11yRules from "./rules/a11y.js";
import jsdocRules from "./rules/jsdoc.js";
import jsdocStrictRules from "./rules/jsdoc-strict.js";

export default [
	...bestPractices,
	...possibleErrors,
	...nodeCommonjs,
	...strictMode,
	...stylisticIssues,
	...variables,
	...ecmascript6,
	...reactRules,
	...a11yRules,
	...jsdocRules,
	...jsdocStrictRules,
	{
		languageOptions: {
			globals: {
				window: "readonly",
				document: "readonly",
				process: "readonly",
				__dirname: "readonly",
				__filename: "readonly",
				module: "writable",
				exports: "writable",
				require: "readonly"
			}
		}
	}
];
