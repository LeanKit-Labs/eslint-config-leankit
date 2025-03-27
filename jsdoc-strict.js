import jsdoc from "./rules/jsdoc.js";
import jsdocStrict from "./rules/jsdoc-strict.js";

export default [
	...jsdoc,
	...jsdocStrict
];
