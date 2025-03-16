import React, { useState, useEffect } from 'react';
import styles from "../../../assets/styles/components/ui/_modal.module.scss";

interface ModalProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen = false, onClose }) => {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    onClose?.();
  };

  if (!open) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button 
          onClick={handleClose} 
          className={styles.closeButton}
          aria-label="Fechar modal"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;