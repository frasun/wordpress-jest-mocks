/**
 * WordPress Jest Mocks
 *
 * Central export file for all WordPress package mocks.
 * Import the specific mock files you need in your Jest configuration.
 *
 * @example
 * // In jest.config.js
 * moduleNameMapper: {
 *   '^@wordpress/components$': '<rootDir>/node_modules/@wordpress/jest-mocks/components.js',
 *   '^@wordpress/block-editor$': '<rootDir>/node_modules/@wordpress/jest-mocks/block-editor.js',
 *   '^@wordpress/interactivity$': '<rootDir>/node_modules/@wordpress/jest-mocks/interactivity.js',
 *   '^@wordpress/i18n$': '<rootDir>/node_modules/@wordpress/jest-mocks/i18n.js',
 * }
 */

// This file serves as a reference point for the package
// Individual mock files should be imported directly in your Jest configuration
export default {
	components: './components.js',
	blockEditor: './block-editor.js',
	interactivity: './interactivity.js',
	i18n: './i18n.js',
};
