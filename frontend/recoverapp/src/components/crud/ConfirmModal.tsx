// ConfirmModal.tsx
import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  type?: 'danger' | 'warning' | 'info';
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
  type = 'danger'
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <div className={`modal-icon ${type}`}>
            <AlertTriangle size={24} />
          </div>
          <div className="modal-text">
            <h3 className="modal-title">{title}</h3>
            <p className="modal-message">{message}</p>
          </div>
          <button onClick={onCancel} className="modal-close">
            <X size={20} />
          </button>
        </div>
        <div className="modal-actions">
          <button onClick={onConfirm} className="btn btn-danger flex-1">
            {confirmText}
          </button>
          <button onClick={onCancel} className="btn btn-secondary flex-1">
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
