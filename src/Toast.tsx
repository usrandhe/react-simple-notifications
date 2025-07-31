import React, { useEffect, useState } from 'react';
import { ToastProps } from './types';
import './Toast.css';

const Toast: React.FC<ToastProps> = ({
  id,
  type,
  title,
  message,
  duration = 5000,
  closable = true,
  onClose
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsRemoving(true);
    setTimeout(() => {
      onClose?.(id);
    }, 300); // Match animation duration
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      case 'info':
        return 'ℹ';
      default:
        return 'ℹ';
    }
  };

  return (
    <div
      className={`toast toast--${type} ${isVisible ? 'toast--visible' : ''} ${
        isRemoving ? 'toast--removing' : ''
      }`}
      role="alert"
      aria-live="assertive"
    >
      <div className="toast__icon">
        {getIcon()}
      </div>
      <div className="toast__content">
        {title && <div className="toast__title">{title}</div>}
        <div className="toast__message">{message}</div>
      </div>
      {closable && (
        <button
          className="toast__close"
          onClick={handleClose}
          aria-label="Close notification"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default Toast;