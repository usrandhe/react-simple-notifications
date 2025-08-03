# React Simple Notifications

A flexible and customizable toast notification component for React applications.

## Installation

```bash
npm install react-simple-notifications
```

## Quick Start

### 1. Import the CSS (Required for all projects)

> **Note:**  
> For SSR frameworks (like Next.js) and all React projects, you must import the CSS file once in your app's entry point (e.g., `src/main.jsx`, `src/index.js`, or `pages/_app.js` for Next.js):

```js

import 'react-simple-notifications/dist/index.css';
```

2. Wrap your app with the ToastProvider:

```jsx
import React from 'react';
import { ToastProvider } from 'react-simple-notifications';
import MyComponent from './MyComponent';
import 'react-simple-notifications/dist/index.css';

function Root() {
  return (
    <ToastProvider position="top-right" maxToasts={5}>
      <MyComponent />
    </ToastProvider>
  );
}

export default Root;
```

2. Use the useToast hook in your components:

```jsx
import React from 'react';
import { useToast } from 'react-simple-notifications';

function MyComponent() {
  const toast = useToast();

  const showSuccess = () => {
    toast.success('Operation completed successfully!', 'Success');
  };

  const showError = () => {
    toast.error('Something went wrong!', 'Error');
  };

  return (
    <div>
      <button onClick={showSuccess}>Show Success</button>
      <button onClick={showError}>Show Error</button>
    </div>
  );
}
```

## API Reference

### ToastProvider Props

- `position`: Position of toast container (`'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'`)
- `maxToasts`: Maximum number of toasts to show (default: 5)

### useToast Hook

Returns an object with the following methods:

- `success(message, title?)`: Show success toast
- `error(message, title?)`: Show error toast  
- `warning(message, title?)`: Show warning toast
- `info(message, title?)`: Show info toast
- `addToast(options)`: Add custom toast
- `removeToast(id)`: Remove specific toast
- `removeAllToasts()`: Remove all toasts

---

## Examples

### All useToast Methods

```jsx
import React from 'react';
import { useToast } from 'react-simple-notifications';

function ToastExamples() {
  const toast = useToast();

  // Show a success toast
  const showSuccess = () => {
    toast.success('Operation completed successfully!', 'Success');
  };

  // Show an error toast
  const showError = () => {
    toast.error('Something went wrong!', 'Error');
  };

  // Show a warning toast
  const showWarning = () => {
    toast.warning('This is a warning!', 'Warning');
  };

  // Show an info toast
  const showInfo = () => {
    toast.info('Here is some information.', 'Info');
  };

  // Show a custom toast with options
  const showCustom = () => {
    const id = toast.addToast({
      type: 'success',
      title: 'Custom Toast',
      message: 'This is a custom toast with options.',
      duration: 8000,
      closable: true
    });
    // Remove this toast after 2 seconds (for demo)
    setTimeout(() => toast.removeToast(id), 2000);
  };

  // Remove all toasts
  const clearAll = () => {
    toast.removeAllToasts();
  };

  return (
    <div>
      <button onClick={showSuccess}>Show Success</button>
      <button onClick={showError}>Show Error</button>
      <button onClick={showWarning}>Show Warning</button>
      <button onClick={showInfo}>Show Info</button>
      <button onClick={showCustom}>Show Custom Toast</button>
      <button onClick={clearAll}>Remove All Toasts</button>
    </div>
  );
}
```

---

### Toast Options

You can use `addToast` with the following options:

```js
toast.addToast({
  type: 'info',           // 'success' | 'error' | 'warning' | 'info'
  message: 'Your message',// required
  title: 'Optional Title',// optional
  duration: 7000,         // optional, ms (default: 5000, set 0 to disable auto-dismiss)
  closable: false         // optional, show close button (default: true)
});
```

---

## SSR Support

- **Always import the CSS file** in your app's entry point for both SPA and SSR projects.
- No CSS is injected automatically; this ensures compatibility with all React frameworks.## API Reference



### Toast Options

- `type`: Toast type ('success' | 'error' | 'warning' | 'info')
- `message`: Toast message (required)
- `title`: Toast title (optional)
- `duration`: Auto-dismiss duration in ms (default: 5000, set to 0 to disable)
- `closable`: Show close button (default: true)

---

## License

MIT
