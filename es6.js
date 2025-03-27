import ecmascript6 from "./rules/ecmascript6.js";

export default [
	...ecmascript6,
	{
		rules: {
			"vars-on-top": "error"
		}
	}
];
