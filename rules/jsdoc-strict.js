export default [
	{
		rules: {
			"jsdoc/check-alignment": "error", // Ensure JSDoc block tags are aligned
			"jsdoc/check-param-names": "error", // Verify that parameter names in JSDoc match function parameters
			"jsdoc/check-tag-names": "error", // Enforce valid JSDoc tag names
			"jsdoc/check-types": "error", // Validate types in JSDoc comments
			"jsdoc/require-param": "error", // Require that functions with parameters have a corresponding JSDoc @param tag
			"jsdoc/require-param-description": "error", // Require that JSDoc @param tags have a description
			"jsdoc/require-param-name": "error", // Ensure each @param tag has a name
			"jsdoc/require-param-type": "error", // Require a type for each @param tag
			"jsdoc/require-returns": "error", // Require a JSDoc @returns tag for functions that return a value
			"jsdoc/require-returns-check": "error", // Validate that a @returns tag exists when needed
			"jsdoc/require-returns-description": "error", // Require a description for the @returns tag
			"jsdoc/require-returns-type": "error", // Require a type for the @returns tag
			"jsdoc/require-description": "error", // Require a description in JSDoc comments
			"jsdoc/require-description-complete-sentence": "error", // Enforce that descriptions are complete sentences
			"jsdoc/require-hyphen-before-param-description": "error" // Enforce a hyphen before the parameter description
		}
	}
];
