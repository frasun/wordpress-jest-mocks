/**
 * Jest mock for @wordpress/block-editor
 *
 * This module provides mock implementations for WordPress block editor components.
 * These mocks are designed for testing Gutenberg blocks.
 *
 * All components support the `data-testid` prop for easy selection in tests.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/
 */

/**
 * Mock useBlockProps hook.
 *
 * Returns the props passed to it, with both regular and save variants.
 *
 * @param {Object} props - Block props
 * @return {Object} The same props object
 *
 * @example
 * // In Edit component
 * const blockProps = useBlockProps();
 *
 * // In Save component
 * const blockProps = useBlockProps.save();
 */
export const useBlockProps = Object.assign( ( props ) => props, {
	save: jest.fn( ( props ) => props ),
} );

/**
 * Mock InspectorControls component.
 *
 * Renders controls in the block inspector sidebar.
 *
 * @param {Object}          props               - Component props
 * @param {React.ReactNode} props.children      - Inspector control elements
 * @param {string}          [props.data-testid] - Test ID for selecting in tests
 *
 * @example
 * <InspectorControls data-testid="my-inspector">
 *   <PanelBody>
 *     <ToggleControl label="Enable Feature" />
 *   </PanelBody>
 * </InspectorControls>
 */
export const InspectorControls = ( { children, ...props } ) => (
	<div
		data-component="inspector-controls"
		data-testid={ props[ 'data-testid' ] }
	>
		{ children }
	</div>
);

/**
 * Mock useInnerBlocksProps hook.
 *
 * Used for blocks that contain other blocks (InnerBlocks).
 * Returns merged props, filtering out template-related options.
 *
 * @param {Object} blockProps - Base block props
 * @param {Object} options    - InnerBlocks options (template, templateLock, etc.)
 * @return {Object} Merged props
 *
 * @example
 * // In Edit component
 * const innerBlocksProps = useInnerBlocksProps(blockProps, {
 *   template: [['core/paragraph']],
 *   templateLock: false
 * });
 *
 * // In Save component
 * const innerBlocksProps = useInnerBlocksProps.save(blockProps);
 */
export const useInnerBlocksProps = Object.assign(
	( blockProps, options ) => {
		const { template, templateLock, ...safeProps } = options;

		return {
			...blockProps,
			...safeProps,
		};
	},
	{
		save: ( blockProps = {}, options = {} ) => ( {
			...blockProps,
			...options,
		} ),
	}
);

/**
 * Mock RichText component.
 *
 * Provides rich text editing capabilities in blocks.
 * Renders as the specified tag with value or placeholder.
 *
 * @param {Object} props               - Component props
 * @param {string} props.value         - The text content
 * @param {string} [props.placeholder] - Placeholder text when empty
 * @param {string} [props.tagName='p'] - HTML tag to render as
 * @param {string} [props.data-testid] - Test ID for selecting in tests
 *
 * @example
 * <RichText
 *   data-testid="block-title"
 *   tagName="h2"
 *   value={title}
 *   placeholder="Enter title..."
 * />
 */
export const RichText = ( { value, placeholder, tagName = 'p', ...props } ) => {
	const Tag = tagName;
	return (
		<Tag data-component="rich-text" data-testid={ props[ 'data-testid' ] }>
			{ value || placeholder }
		</Tag>
	);
};

/**
 * Mock RichText.Content component.
 *
 * Used in the save function to render the saved rich text content.
 *
 * @param {Object} props                 - Component props
 * @param {string} props.value           - The saved text content
 * @param {string} [props.tagName='div'] - HTML tag to render as
 * @param {string} [props.data-testid]   - Test ID for selecting in tests
 *
 * @example
 * <RichText.Content
 *   data-testid="saved-title"
 *   tagName="h2"
 *   value={title}
 * />
 */
RichText.Content = ( { value, tagName = 'div', ...props } ) => {
	const Tag = tagName;
	return (
		<Tag
			data-component="rich-text-content"
			data-testid={ props[ 'data-testid' ] }
		>
			{ value }
		</Tag>
	);
};

/**
 * Mock BlockControls component.
 *
 * Renders controls in the block toolbar.
 *
 * @param {Object}          props               - Component props
 * @param {React.ReactNode} props.children      - Toolbar control elements
 * @param {string}          [props.data-testid] - Test ID for selecting in tests
 *
 * @example
 * <BlockControls data-testid="my-toolbar">
 *   <ToolbarGroup>
 *     <ToolbarButton onClick={handleClick}>
 *       Action
 *     </ToolbarButton>
 *   </ToolbarGroup>
 * </BlockControls>
 */
export const BlockControls = ( { children, ...props } ) => (
	<div data-component="block-controls" data-testid={ props[ 'data-testid' ] }>
		{ children }
	</div>
);

/**
 * Mock MediaUpload component.
 *
 * Handles media selection from the WordPress media library.
 * Renders the provided render function.
 *
 * @param {Object}   props               - Component props
 * @param {Function} props.render        - Render function that receives media selection props
 * @param {string}   [props.data-testid] - Test ID for selecting in tests
 *
 * @example
 * <MediaUpload
 *   data-testid="media-uploader"
 *   render={({ open }) => (
 *     <Button onClick={open}>Select Image</Button>
 *   )}
 * />
 */
export const MediaUpload = ( { render: Render, ...props } ) => (
	<div data-component="media-upload" data-testid={ props[ 'data-testid' ] }>
		<Render />
	</div>
);

/**
 * Mock MediaUploadCheck component.
 *
 * Checks if the user has permission to upload media.
 * In this mock, it always renders children.
 *
 * @param {Object}          props               - Component props
 * @param {React.ReactNode} props.children      - Child elements to render if check passes
 * @param {string}          [props.data-testid] - Test ID for selecting in tests
 *
 * @example
 * <MediaUploadCheck data-testid="media-check">
 *   <MediaUpload ... />
 * </MediaUploadCheck>
 */
export const MediaUploadCheck = ( { children, ...props } ) => (
	<div
		data-component="media-upload-check"
		data-testid={ props[ 'data-testid' ] }
	>
		{ children }
	</div>
);
