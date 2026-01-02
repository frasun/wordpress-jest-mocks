/**
 * Jest mock for @wordpress/components
 *
 * This module provides mock implementations for WordPress UI components.
 * Each component renders a simple div with data attributes for testing.
 *
 * All components support the `data-testid` prop for easy selection in tests.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */

/**
 * Mock PanelBody component.
 *
 * Renders a collapsible panel typically used in the block inspector.
 *
 * @param {Object}          props               - Component props
 * @param {React.ReactNode} props.children      - Child elements
 * @param {string}          [props.data-testid] - Test ID for selecting in tests
 *
 * @example
 * <PanelBody data-testid="my-panel">
 *   <div>Panel content</div>
 * </PanelBody>
 */
export const PanelBody = ( props ) => (
	<div data-component="panel-body" data-testid={ props[ 'data-testid' ] }>
		{ props.children }
	</div>
);

/**
 * Mock __experimentalNumberControl component.
 *
 * Experimental number input control.
 *
 * @param {Object} props               - Component props
 * @param {string} [props.data-testid] - Test ID for selecting in tests
 *
 * @example
 * <__experimentalNumberControl data-testid="number-input" />
 */
export const __experimentalNumberControl = ( props ) => (
	<div
		data-component="number-control"
		data-testid={ props[ 'data-testid' ] }
	></div>
);

/**
 * Mock __experimentalInputControl component.
 *
 * Experimental text input control.
 *
 * @param {Object} props               - Component props
 * @param {string} [props.data-testid] - Test ID for selecting in tests
 *
 * @example
 * <__experimentalInputControl data-testid="text-input" />
 */
export const __experimentalInputControl = ( props ) => (
	<div
		data-component="input-control"
		data-testid={ props[ 'data-testid' ] }
	></div>
);

/**
 * Mock ToggleControl component.
 *
 * A toggle switch control for boolean values.
 *
 * @param {Object} props               - Component props
 * @param {string} [props.data-testid] - Test ID for selecting in tests
 *
 * @example
 * <ToggleControl data-testid="toggle-switch" />
 */
export const ToggleControl = ( props ) => (
	<div
		data-component="toggle-control"
		data-testid={ props[ 'data-testid' ] }
	></div>
);

/**
 * Mock ToolbarGroup component.
 *
 * Groups toolbar buttons together.
 *
 * @param {Object}          props               - Component props
 * @param {React.ReactNode} props.children      - Child elements (typically ToolbarButton)
 * @param {string}          [props.data-testid] - Test ID for selecting in tests
 *
 * @example
 * <ToolbarGroup data-testid="my-toolbar">
 *   <ToolbarButton>Click me</ToolbarButton>
 * </ToolbarGroup>
 */
export const ToolbarGroup = ( props ) => (
	<div data-component="toolbar-group" data-testid={ props[ 'data-testid' ] }>
		{ props.children }
	</div>
);

/**
 * Mock ToolbarButton component.
 *
 * A button used within toolbar groups.
 *
 * @param {Object}          props               - Component props
 * @param {React.ReactNode} props.children      - Button content
 * @param {string}          [props.data-testid] - Test ID for selecting in tests
 *
 * @example
 * <ToolbarButton data-testid="align-left">Align Left</ToolbarButton>
 */
export const ToolbarButton = ( props ) => (
	<button data-component="toolbar-button" data-testid={ props[ 'data-testid' ] }>
		{ props.children }
	</button>
);

/**
 * Mock Button component.
 *
 * A general-purpose button component.
 *
 * @param {Object}          props               - Component props
 * @param {React.ReactNode} props.children      - Button content
 * @param {string}          [props.data-testid] - Test ID for selecting in tests
 *
 * @example
 * <Button data-testid="submit-button">Submit</Button>
 */
export const Button = ( { children, ...props } ) => (
	<div data-component="button" data-testid={ props[ 'data-testid' ] }>
		{ children }
	</div>
);

/**
 * Mock __experimentalText component.
 *
 * Experimental text component for displaying styled text.
 *
 * @param {Object}          props               - Component props
 * @param {React.ReactNode} props.children      - Text content
 * @param {string}          [props.data-testid] - Test ID for selecting in tests
 *
 * @example
 * <__experimentalText data-testid="description">Description text</__experimentalText>
 */
export const __experimentalText = ( { children, ...props } ) => (
	<div data-component="text" data-testid={ props[ 'data-testid' ] }>
		{ children }
	</div>
);

/**
 * Mock Flex component.
 *
 * A flexbox layout container.
 *
 * @param {Object}          props               - Component props
 * @param {React.ReactNode} props.children      - Child elements
 * @param {string}          [props.data-testid] - Test ID for selecting in tests
 *
 * @example
 * <Flex data-testid="flex-container">
 *   <FlexItem>Item 1</FlexItem>
 *   <FlexItem>Item 2</FlexItem>
 * </Flex>
 */
export const Flex = ( { children, ...props } ) => (
	<div data-component="flex" data-testid={ props[ 'data-testid' ] }>
		{ children }
	</div>
);

/**
 * Mock FlexItem component.
 *
 * A flex item used within Flex containers.
 *
 * @param {Object}          props               - Component props
 * @param {React.ReactNode} props.children      - Item content
 * @param {string}          [props.data-testid] - Test ID for selecting in tests
 *
 * @example
 * <FlexItem data-testid="flex-item">Content</FlexItem>
 */
export const FlexItem = ( { children, ...props } ) => (
	<div data-component="flex-item" data-testid={ props[ 'data-testid' ] }>
		{ children }
	</div>
);
