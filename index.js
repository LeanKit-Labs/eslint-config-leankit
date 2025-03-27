import bestPractices from "./rules/best-practices.js";
import possibleErrors from "./rules/possible-errors.js";
import nodeCommonjs from "./rules/nodejs-and-commonjs.js";
import strictMode from "./rules/strict-mode.js";
import stylisticIssues from "./rules/stylistic-issues.js";
import variables from "./rules/variables.js";
import jsdoc from "./rules/jsdoc.js";

export default [
	...bestPractices,
	...possibleErrors,
	...nodeCommonjs,
	...strictMode,
	...stylisticIssues,
	...variables,
	...jsdoc,
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
