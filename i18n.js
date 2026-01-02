/**
 * Jest mock for @wordpress/i18n
 *
 * This module provides mock implementations for WordPress internationalization functions.
 * These mocks are designed for testing blocks that use translation functions.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */

/**
 * Mock translation function.
 *
 * Returns the text as-is without any translation.
 * In your tests, you can mock this to return specific translations.
 *
 * @param {string} text - The text to translate
 * @return {string} The same text (untranslated)
 *
 * @example
 * // In your component
 * const label = __('Hello World', 'my-plugin');
 *
 * // In your test - verify the English text is being passed
 * expect(screen.getByText('Hello World')).toBeInTheDocument();
 *
 * // Or mock it to return a specific translation
 * jest.mock('@wordpress/i18n', () => ({
 *   __: (text) => text === 'Hello World' ? 'Hola Mundo' : text
 * }));
 */
export const __ = ( text ) => text;
