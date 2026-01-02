# WordPress Jest Mocks

A collection of Jest mock implementations for WordPress packages, designed to make testing Gutenberg blocks and WordPress components easier.

## Packages Included

This package provides mocks for the following WordPress packages:

- `@wordpress/components` - UI components
- `@wordpress/block-editor` - Block editor components and hooks
- `@wordpress/interactivity` - Interactivity API functions
- `@wordpress/i18n` - Internationalization functions

## Installation

Add as a dependency to your project:

```bash
npm install --save-dev github:frasun/wordpress-jest-mocks
```

Or with yarn:

```bash
yarn add -D github:frasun/wordpress-jest-mocks
```

## Jest Setup

In your `jest.config.js`, extend the default WordPress scripts configuration and add module name mappings:

```javascript
const defaultConfig = require( '@wordpress/scripts/config/jest-unit.config.js' );

module.exports = {
  ...defaultConfig,
  moduleNameMapper: {
    ...defaultConfig.moduleNameMapper,
    '^@wordpress/components$': '<rootDir>/node_modules/wordpress-jest-mocks/components.js',
    '^@wordpress/block-editor$': '<rootDir>/node_modules/wordpress-jest-mocks/block-editor.js',
    '^@wordpress/interactivity$': '<rootDir>/node_modules/wordpress-jest-mocks/interactivity.js',
    '^@wordpress/i18n$': '<rootDir>/node_modules/wordpress-jest-mocks/i18n.js',
  },
};
```

## Using data-testid and Component Identification

All components support the `data-testid` prop for easy selection in tests. Each component also includes a `data-component` attribute for debugging purposes.

```jsx
import { PanelBody, ToggleControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { render, screen } from '@testing-library/react';

function Edit() {
  return (
    <InspectorControls data-testid="my-inspector">
      <PanelBody data-testid="settings-panel">
        <ToggleControl data-testid="toggle" />
      </PanelBody>
    </InspectorControls>
  );
}

test('renders inspector controls', () => {
  render(<Edit />);

  expect(screen.getByTestId('my-inspector')).toBeInTheDocument();
  expect(screen.getByTestId('settings-panel')).toBeInTheDocument();
});

// Rendered output includes data-component for debugging:
// <div data-component="inspector-controls" data-testid="my-inspector">
//   <div data-component="panel-body" data-testid="settings-panel">
//     <div data-component="toggle-control" data-testid="toggle"></div>
//   </div>
// </div>
```

## Available Components

### @wordpress/components

- `Button`
- `Flex`
- `FlexItem`
- `PanelBody`
- `ToggleControl`
- `ToolbarButton`
- `ToolbarGroup`
- `__experimentalInputControl`
- `__experimentalNumberControl`
- `__experimentalText`

### @wordpress/block-editor

- `BlockControls`
- `InspectorControls`
- `MediaUpload`
- `MediaUploadCheck`
- `RichText`
- `RichText.Content`
- `useBlockProps`
- `useBlockProps.save`
- `useInnerBlocksProps`
- `useInnerBlocksProps.save`

### @wordpress/interactivity

- `getConfig`
- `getContext`
- `getElement`
- `store`

### @wordpress/i18n

- `__`

## Testing Examples

### Testing Interactivity API

```jsx
import { getContext, getConfig } from '@wordpress/interactivity';

test('mocks interactivity functions', () => {
  // Customize return values
  getContext.mockReturnValue({ userId: '123', theme: 'dark' });
  getConfig.mockReturnValue({ apiUrl: 'https://api.example.com' });

  const context = getContext();
  const config = getConfig();

  expect(context.userId).toBe('123');
  expect(config.apiUrl).toBe('https://api.example.com');
});
```

### Testing with Media Upload

```jsx
import { render, screen } from '@testing-library/react';
import { MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

test('renders media upload button', () => {
  render(
    <MediaUpload
      render={({ open }) => (
        <Button data-testid="upload-btn" onClick={open}>
          Select Image
        </Button>
      )}
    />
  );

  expect(screen.getByTestId('upload-btn')).toHaveTextContent('Select Image');
});
```
