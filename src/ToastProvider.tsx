import React, { createContext, useState, useCallback, ReactNode } from 'react';
import { ToastProps, ToastContextType } from './types';
import Toast from './Toast';
import './ToastContainer.css';

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
  children: ReactNode;
  position?: ToastProps['position'];
  maxToasts?: number;
}

const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  position = 'top-right',
  maxToasts = 5
}) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = useCallback((toastData: Omit<ToastProps, 'id'>) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newToast: ToastProps = {
      ...toastData,
      id,
      position
    };

    setToasts(prevToasts => {
      const updatedToasts = [newToast, ...prevToasts];
      return updatedToasts.slice(0, maxToasts);
    });

    return id;
  }, [position, maxToasts]);

  const removeToast = useCallback((id: string) => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
  }, []);

  const removeAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  const contextValue: ToastContextType = {
    addToast,
    removeToast,
    removeAllToasts
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <div className={`toast-container toast-container--${position}`}>
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            {...toast}
            onClose={removeToast}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastProvider;