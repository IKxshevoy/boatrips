import React, {
  ReactNode,
  useEffect,
} from 'react';
import styles from './modal.module.scss';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose,children }) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className={styles.modalWrapper}>
          <div className={styles.overlay} onClick={onClose}></div>
          <div className={styles.modalContent}>
            <div className={styles.modal}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};
