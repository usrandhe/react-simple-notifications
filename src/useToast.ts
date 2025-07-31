import { useContext } from 'react';
import { ToastContext } from './ToastProvider';
import { ToastType, ToastContextType } from './types';

export const useToast = (): ToastContextType & {
  success: (message: string, title?: string) => string;
  error: (message: string, title?: string) => string;
  warning: (message: string, title?: string) => string;
  info: (message: string, title?: string) => string;
} => {
  const context = useContext(ToastContext);
  
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  const createToastMethod = (type: ToastType) => (message: string, title?: string) => {
    return context.addToast({ type, message, title });
  };

  return {
    ...context,
    success: createToastMethod('success'),
    error: createToastMethod('error'),
    warning: createToastMethod('warning'),
    info: createToastMethod('info')
  };
};