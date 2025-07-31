# React Toast Notifications

A flexible and customizable toast notification component for React applications.

## Installation

```bash
npm install react-toast-notifications
```

## Quick Start

1. Wrap your app with the ToastProvider:

```jsx
import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import App from './App';

function Root() {
  return (
    <ToastProvider position="top-right" maxToasts={5}>
      <App />
    </ToastProvider>
  );
}

export default Root;
```

2. Use the useToast hook in your components:

```jsx
import React from 'react';
import { useToast } from 'react-toast-notifications';

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

- `position`: Position of toast container ('top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center')
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

### Toast Options

- `type`: Toast type ('success' | 'error' | 'warning' | 'info')
- `message`: Toast message (required)
- `title`: Toast title (optional)
- `duration`: Auto-dismiss duration in ms (default: 5000, set to 0 to disable)
- `closable`: Show close button (default: true)

## License

MIT