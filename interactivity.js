/**
 * Jest mock for @wordpress/interactivity
 *
 * This module provides mock implementations for WordPress Interactivity API functions.
 * These mocks are designed to be used in Jest tests for WordPress blocks that use
 * the Interactivity API.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-interactivity/
 */

/**
 * Mock implementation of the store function.
 *
 * The store function is used to create interactive stores in WordPress blocks.
 * This mock returns the store definition as-is for testing purposes.
 *
 * @param {string} namespace - The namespace for the store
 * @param {Object} storeDef  - The store definition object
 * @return {Object} The store definition
 *
 * @example
 * const myStore = store('my-plugin', {
 *   state: { count: 0 },
 *   actions: { increment: () => {} }
 * });
 */
export const store = jest.fn( ( namespace, storeDef ) => {
	return storeDef;
} );

/**
 * Mock implementation of the getContext function.
 *
 * Returns an empty context object by default.
 * You can customize the return value in your tests using jest.mockReturnValue().
 *
 * @return {Object} Empty context object
 *
 * @example
 * // In your test
 * import { getContext } from '@wordpress/interactivity';
 * getContext.mockReturnValue({ user: 'John' });
 */
export const getContext = jest.fn( () => ( {} ) );

/**
 * Mock implementation of the getElement function.
 *
 * Returns a mock element object with ref and attributes.
 *
 * @return {Object} Mock element object with ref and attributes
 *
 * @example
 * // In your test
 * import { getElement } from '@wordpress/interactivity';
 * getElement.mockReturnValue({
 *   ref: mockRef,
 *   attributes: { 'data-id': '123' }
 * });
 */
export const getElement = jest.fn( () => ( {
	ref: null,
	attributes: {},
} ) );

/**
 * Mock implementation of the getConfig function.
 *
 * Returns an empty configuration object by default.
 *
 * @return {Object} Empty config object
 *
 * @example
 * // In your test
 * import { getConfig } from '@wordpress/interactivity';
 * getConfig.mockReturnValue({ apiUrl: 'https://api.example.com' });
 */
export const getConfig = jest.fn( () => ( {} ) );
