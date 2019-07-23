## 5.x

### 5.1.0

* Ignored max-statements for test configuration

### 5.0.0

* Updated deps & rules that were commonly overridden

## 4.x

### 4.5.1

* Locked down eslint-plugin-react to ~7.12.4

### 4.5.0

* Changed to use babel's no-invalid-this

### 4.4.0

* Removed no-unused-expressions override from test.js

### 4.3.0

* Added rule to enforce js extension for react components

### 4.2.0

* Moved overrides from consuming repos into this project

### 4.1.1

* Add linting of unused arguments

### 4.1.0

* Updated rules to match our JSCS settings
* Updated to use new string-based rule setting syntax. Converted 0, 1 and 2 to "off", "warn" and "error" respectively.

### 4.0.0

* Updated to eslint 4 Also updated all dependencies to latest versions.

## 3.x

### 3.0.0

* Updated to latest version of eslint
* General update to rules
* Update react rules and add a11y rules

## 2.x

### 2.0.0

* Upgrade to eslint 2.0.*

## 1.x

### 1.1.0

* Minor Tweaks to `eslint-config-leankit` based on lessons learned when integrating the rules into `nonstop-index-ui`
* Turned off the following rules: `react/jsx-handler-names`, `no-extra-parens`, `react/jsx-boolean-value`, `no-eq-null`, `newline-after-var`
* Update the following rules: `react/sort-comp`, `react/jsx-quotes`
* Turn this warning into an error: `react/sort-comp`
* There are 4 remaining TRIAL rules: `complexity`, `arrow-body-style`, `no-negated-condition`, `no-extra-parens`

### 1.0.0

Initial Release
