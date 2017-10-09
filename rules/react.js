// eslint-plugin-react https://github.com/yannickcr/eslint-plugin-react

module.exports = {
	"plugins": [ "react" ],
	"rules": {
		// List of supported rules
		"react/display-name": "error", // Prevent missing displayName in a React component definition
		"react/forbid-component-props:": "off", // Forbid certain props on Components
		"react/forbid-prop-types": [ "error", { "forbid": [ "any" ] } ], // Forbid certain propTypes
		"react/no-danger": "error", // Prevent usage of dangerous JSX properties
		"react/no-danger-with-children": "error", // Prevent problem with children and props.dangerouslySetInnerHTML
		"react/no-deprecated": "error", // Prevent usage of deprecated methods
		"react/no-did-mount-set-state": "error", // Prevent usage of setState in componentDidMount
		"react/no-did-update-set-state": "error", // Prevent usage of setState in componentDidUpdate
		"react/no-direct-mutation-state": "error", // Prevent direct mutation of this.state
		"react/no-find-dom-node": "off", // Prevent usage of findDOMNode
		"react/no-is-mounted": "error", // Prevent usage of isMounted
		"react/no-multi-comp": [ "error", { "ignoreStateless": true } ], // Prevent multiple component definition per file
		"react/no-render-return-value": "error", // Prevent usage of the return value of React.render
		"react/no-set-state": "off", // Prevent usage of setState
		"react/no-string-refs": "off", // Prevent using string references in ref attribute.
		"react/no-unknown-property": "error", // Prevent usage of unknown DOM property
		"react/no-unused-prop-types": "error", // Prevent definitions of unused prop types
		"react/prefer-es6-class": "off", // Prefer es6 class instead of createClass for React Components
		"react/prefer-stateless-function": "warn", // Enforce stateless React Components to be written as a pure function
		"react/prop-types": "error", // Prevent missing props validation in a React component definition
		"react/react-in-jsx-scope": "error", // Prevent missing React when using JSX
		"react/require-optimization": "off", // Enforce React components to have a shouldComponentUpdate method
		"react/require-render-return": "error", // Enforce ES5 or ES6 class for returning value in render function
		"react/self-closing-comp": "error", // Prevent extra closing tags for components without children
		"react/sort-comp": [ "error", {
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
		"react/style-prop-object": "error", // Enforce style prop value being an object
		// JSX-specific rules
		"react/jsx-boolean-value": [ "off", "always" ], // Enforce boolean attributes notation in JSX
		"react/jsx-closing-bracket-location": [ "warn", { "location": "after-props" } ], // Validate closing bracket location in JSX
		"react/jsx-curly-spacing": [ "error", "always" ], // Enforce or disallow spaces inside of curly braces in JSX attributes
		"react/jsx-equals-spacing": [ "error", "never" ], // Enforce or disallow spaces around equal signs in JSX attributes (fixable)
		"react/jsx-filename-extension": "off", // Restrict file extensions that may contain JSX
		"react/jsx-first-prop-new-line": "off", // Enforce position of the first prop in JSX
		"react/jsx-handler-names": [ "off", { "eventHandlerPrefix": "handle", "eventHandlerPropPrefix": "on" } ], // Enforce event handler naming conventions in JSX
		"react/jsx-indent": [ "error", "tab" ], // Validate JSX indentation
		"react/jsx-indent-props": [ "error", "tab" ], // Validate props indentation in JSX
		"react/jsx-key": "error", // Validate JSX has key prop when in array or iterator
		"react/jsx-max-props-per-line": [ "error", { "maximum": 10 } ], // Limit maximum of props on a single line in JSX
		"react/jsx-no-bind": [ "off" ], // Prevent usage of .bind() and arrow functions in JSX props
		"react/jsx-no-comment-textnodes": "error", // Prevent comments from being inserted as text nodes
		"react/jsx-no-duplicate-props": [ "error", { "ignoreCase": false } ], // Prevent duplicate props in JSX
		"react/jsx-no-literals": "off", // Prevent usage of unwrapped JSX strings
		"react/jsx-no-target-blank": "error", // Prevent usage of unsafe target='_blank'
		"react/jsx-no-undef": "error", // Disallow undeclared variables in JSX
		"react/jsx-pascal-case": "off", // Enforce PascalCase for user-defined JSX components
		"react/jsx-sort-props": "off", // Enforce props alphabetical sorting
		"react/jsx-tag-spacing": "error", // Validate whitespace in and around the JSX opening and closing brackets (fixable)
		"react/jsx-uses-react": "error", // Prevent React to be incorrectly marked as unused
		"react/jsx-uses-vars": "error", // Prevent variables used in JSX to be incorrectly marked as unused
		"react/jsx-wrap-multilines": "error" // Prevent missing parentheses around multilines JSX
	}
};
