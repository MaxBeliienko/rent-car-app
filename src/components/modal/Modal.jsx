import { useEffect } from 'react';
import sprite from '../../img/sprite.svg';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscClose = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscClose);
    }

    return () => {
      window.removeEventListener('keydown', handleEscClose);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(styles['no-scroll']);
    } else {
      document.body.classList.remove(styles['no-scroll']);
    }

    return () => {
      document.body.classList.remove(styles['no-scroll']);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <svg width={16} height={16}>
            <use href={`${sprite}#icon-close`}></use>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
