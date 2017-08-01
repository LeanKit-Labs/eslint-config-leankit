// eslint-plugin-react https://github.com/yannickcr/eslint-plugin-react

module.exports = {
	"plugins": [ "jsx-a11y" ],
	"rules": {
		"jsx-a11y/anchor-has-content": "error", // Enforce all anchors to contain accessible content.
		"jsx-a11y/aria-props": "error", // Enforce all aria-* props are valid.
		"jsx-a11y/aria-proptypes": "error", // Enforce ARIA state and property values are valid.
		"jsx-a11y/aria-role": "error", // Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
		"jsx-a11y/aria-unsupported-elements": "error", // Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
		"jsx-a11y/click-events-have-key-events": "error", // Enforce a clickable non-interactive element has at least one keyboard event listener.
		"jsx-a11y/heading-has-content": "error", // Enforce heading (h1, h2, etc) elements contain accessible content.
		"jsx-a11y/href-no-hash": "error", // Enforce an anchor element's href prop value is not just #.
		"jsx-a11y/html-has-lang": "error", // Enforce <html> element has lang prop.
		"jsx-a11y/img-has-alt": "error", // Enforce that <img> JSX elements use the alt prop.
		"jsx-a11y/img-redundant-alt": "error", // Enforce <img> alt prop does not contain the word "image", "picture", or "photo".
		"jsx-a11y/label-has-for": "error", // Enforce that <label> elements have the htmlFor prop.
		"jsx-a11y/lang": "error", // Enforce lang attribute has a valid value.
		"jsx-a11y/mouse-events-have-key-events": "error", // Enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users.
		"jsx-a11y/no-access-key": "error", // Enforce that the accessKey prop is not used on any element to avoid complications with keyboard commands used by a screenreader.
		"jsx-a11y/no-marquee": "error", // Enforce <marquee> elements are not used.
		"jsx-a11y/no-onchange": "error", // Enforce usage of onBlur over onChange on select menus for accessibility.
		"jsx-a11y/no-static-element-interactions": "error", // Enforce non-interactive elements have no interactive handlers.
		"jsx-a11y/onclick-has-focus": "error", // Enforce that elements with onClick handlers must be focusable.
		"jsx-a11y/onclick-has-role": "error", // Enforce that non-interactive, visible elements (such as <div>) that have click handlers use the role attribute.
		"jsx-a11y/role-has-required-aria-props": "error", // Enforce that elements with ARIA roles must have all required attributes for that role.
		"jsx-a11y/role-supports-aria-props": "error", // Enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role.
		"jsx-a11y/scope": "error", // Enforce scope prop is only used on <th> elements.
		"jsx-a11y/tabindex-no-positive": "error" // Enforce tabIndex value is not greater than zero.
	}
};
