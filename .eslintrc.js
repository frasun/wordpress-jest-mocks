/**
 * ESLint Configuration
 *
 * Using .eslintrc.js format for better VSCode ESLint extension compatibility.
 */

module.exports = {
	extends: [ 'plugin:@wordpress/eslint-plugin/recommended-with-formatting' ],
	env: {
		jest: true,
		node: true,
	},
	rules: {
		'jsdoc/no-undefined-types': [ 'error', {
			definedTypes: [ 'React' ],
		} ],
	},
};
