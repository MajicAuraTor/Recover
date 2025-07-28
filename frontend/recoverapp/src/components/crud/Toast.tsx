import React from 'react';
import { X, CheckCircle, XCircle, Info } from 'lucide-react';
import type { Toast as ToastType } from '../../types/procedure';

interface ToastProps {
  toast: ToastType;
  onRemove: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({ toast, onRemove }) => {
  const icons = {
    success: CheckCircle,
    error: XCircle,
    info: Info,
  };

  const Icon = icons[toast.type];

  const getToastClass = (type: string) => {
    switch (type) {
      case 'success': return 'toast-success';
      case 'error': return 'toast-error';
      case 'info': return 'toast-info';
      default: return 'toast-info';
    }
  };

  return (
    <div className={`toast ${getToastClass(toast.type)}`}>
      <Icon size={20} />
      <span className="toast-message">{toast.message}</span>
      <button
        onClick={() => onRemove(toast.id)}
        className="toast-close"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default Toast;