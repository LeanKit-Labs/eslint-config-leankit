// eslint-plugin-react https://github.com/yannickcr/eslint-plugin-react

module.exports = {
	"plugins": [ "react" ],
	"rules": {
		// List of supported rules
		"react/display-name": 2, // Prevent missing displayName in a React component definition
		"react/forbid-component-props:": 0, // Forbid certain props on Components
		"react/forbid-prop-types": [ 2, { "forbid": [ "any" ] } ], // Forbid certain propTypes
		"react/no-danger": 2, // Prevent usage of dangerous JSX properties
		"react/no-danger-with-children": 2, // Prevent problem with children and props.dangerouslySetInnerHTML
		"react/no-deprecated": 2, // Prevent usage of deprecated methods
		"react/no-did-mount-set-state": 2, // Prevent usage of setState in componentDidMount
		"react/no-did-update-set-state": 2, // Prevent usage of setState in componentDidUpdate
		"react/no-direct-mutation-state": 2, // Prevent direct mutation of this.state
		"react/no-find-dom-node": 0, // Prevent usage of findDOMNode
		"react/no-is-mounted": 2, // Prevent usage of isMounted
		"react/no-multi-comp": [ 2, { "ignoreStateless": true } ], // Prevent multiple component definition per file
		"react/no-render-return-value": 2, // Prevent usage of the return value of React.render
		"react/no-set-state": 0, // Prevent usage of setState
		"react/no-string-refs": 0, // Prevent using string references in ref attribute.
		"react/no-unknown-property": 2, // Prevent usage of unknown DOM property
		"react/no-unused-prop-types": 2, // Prevent definitions of unused prop types
		"react/prefer-es6-class": 0, // Prefer es6 class instead of createClass for React Components
		"react/prefer-stateless-function": 1, // Enforce stateless React Components to be written as a pure function
		"react/prop-types": 2, // Prevent missing props validation in a React component definition
		"react/react-in-jsx-scope": 2, // Prevent missing React when using JSX
		"react/require-optimization": 0, // Enforce React components to have a shouldComponentUpdate method
		"react/require-render-return": 2, // Enforce ES5 or ES6 class for returning value in render function
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
		"react/style-prop-object": 2, // Enforce style prop value being an object
		// JSX-specific rules
		"react/jsx-boolean-value": [ 0, "always" ], // Enforce boolean attributes notation in JSX
		"react/jsx-closing-bracket-location": [ 1, { "location": "after-props" } ], // Validate closing bracket location in JSX
		"react/jsx-curly-spacing": [ 2, "always" ], // Enforce or disallow spaces inside of curly braces in JSX attributes
		"react/jsx-equals-spacing": [ 2, "never" ], // Enforce or disallow spaces around equal signs in JSX attributes (fixable)
		"react/jsx-filename-extension": 2, // Restrict file extensions that may contain JSX
		"react/jsx-first-prop-new-line": 0, // Enforce position of the first prop in JSX
		"react/jsx-handler-names": [ 0, { "eventHandlerPrefix": "handle", "eventHandlerPropPrefix": "on" } ], // Enforce event handler naming conventions in JSX
		"react/jsx-indent": [ 2, "tab" ], // Validate JSX indentation
		"react/jsx-indent-props": [ 2, "tab" ], // Validate props indentation in JSX
		"react/jsx-key": 2, // Validate JSX has key prop when in array or iterator
		"react/jsx-max-props-per-line": [ 2, { "maximum": 10 } ], // Limit maximum of props on a single line in JSX
		"react/jsx-no-bind": [ 0 ], // Prevent usage of .bind() and arrow functions in JSX props
		"react/jsx-no-comment-textnodes": 2, // Prevent comments from being inserted as text nodes
		"react/jsx-no-duplicate-props": [ 2, { "ignoreCase": false } ], // Prevent duplicate props in JSX
		"react/jsx-no-literals": 0, // Prevent usage of unwrapped JSX strings
		"react/jsx-no-target-blank": 2, // Prevent usage of unsafe target='_blank'
		"react/jsx-no-undef": 2, // Disallow undeclared variables in JSX
		"react/jsx-pascal-case": 0, // Enforce PascalCase for user-defined JSX components
		"react/jsx-sort-props": 0, // Enforce props alphabetical sorting
		"react/jsx-space-before-closing": 2, // Validate spacing before closing bracket in JSX (fixable)
		"react/jsx-uses-react": 2, // Prevent React to be incorrectly marked as unused
		"react/jsx-uses-vars": 2, // Prevent variables used in JSX to be incorrectly marked as unused
		"react/jsx-wrap-multilines": 2 // Prevent missing parentheses around multilines JSX
	}
};
