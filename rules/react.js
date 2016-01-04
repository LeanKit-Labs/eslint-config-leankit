// eslint-plugin-react https://github.com/yannickcr/eslint-plugin-react

module.exports = {
	"plugins": [ "react" ],
	"rules": {
		"react/display-name": [ 2, { "acceptTranspilerName": true } ], // Prevent missing displayName in a React component definition
		"react/forbid-prop-types": [ 2, { "forbid": [ "any" ] } ], // Forbid certain propTypes
		"react/jsx-boolean-value": [ 0, "always" ], // Enforce boolean attributes notation in JSX
		"react/jsx-closing-bracket-location": [ 1, { "location": "after-props" } ], // Validate closing bracket location in JSX
		"react/jsx-curly-spacing": [ 2, "always" ], // Enforce or disallow spaces inside of curly braces in JSX attributes
		"react/jsx-handler-names": [ 0, { "eventHandlerPrefix": "handle", "eventHandlerPropPrefix": "on" } ], // Enforce event handler naming conventions in JSX
		"react/jsx-indent-props": [ 2, "tab" ], // Validate props indentation in JSX
		"react/jsx-key": [ 2, 2 ], // Validate JSX has key prop when in array or iterator
		"react/jsx-max-props-per-line": [ 2, { "maximum": 10 } ], // Limit maximum of props on a single line in JSX
		"react/jsx-no-bind": [ 0 ], // Prevent usage of .bind() and arrow functions in JSX props
		"react/jsx-no-duplicate-props": [ 2, { "ignoreCase": false } ], // Prevent duplicate props in JSX
		"react/jsx-no-literals": 0, // Prevent usage of unwrapped JSX strings
		"react/jsx-no-undef": 2, // Disallow undeclared variables in JSX
		"react/jsx-pascal-case": 0, // Enforce PascalCase for user-defined JSX components
		"react/jsx-sort-prop-types": 0, // Enforce propTypes declarations alphabetical sorting
		"react/jsx-sort-props": 0, // Enforce props alphabetical sorting
		"react/jsx-uses-react": 2, // Prevent React to be incorrectly marked as unused
		"react/jsx-uses-vars": 2, // Prevent variables used in JSX to be incorrectly marked as unused
		"react/no-danger": 2, // Prevent usage of dangerous JSX properties
		"react/no-did-mount-set-state": [ 2, "allow-in-func" ], // Prevent usage of setState in componentDidMount
		"react/no-did-update-set-state": 2, // Prevent usage of setState in componentDidUpdate
		"react/no-direct-mutation-state": 2, // Prevent direct mutation of this.state
		"react/no-multi-comp": [ 2, { "ignoreStateless": true } ], // Prevent multiple component definition per file
		"react/no-set-state": 0, // Prevent usage of setState
		"react/no-unknown-property": 2, // Prevent usage of unknown DOM property
		"react/prefer-es6-class": 0, // Prefer es6 class instead of createClass for React Components
		"react/prop-types": 2, // Prevent missing props validation in a React component definition
		"react/react-in-jsx-scope": 2, // Prevent missing React when using JSX
		"react/require-extension": 2, // Restrict file extensions that may be required
		"react/self-closing-comp": 2, // Prevent extra closing tags for components without children
		"react/sort-comp": [ 2, {
			"order": [
				"mixins",
				"lux",
				"props",
				"state",
				"everything-else",
				"render"
			],
			"groups": {
				"lux": [
					"getActionGroup",
					"getActions",
					"stores"
				],
				"props": [
					"propTypes",
					"getDefaultProps"
				],
				"state": [
					"getInitialState"
				]
			}
		} ], // Enforce component methods order
		"react/wrap-multilines": 2 // Prevent missing parentheses around multilines JSX
	}
};
