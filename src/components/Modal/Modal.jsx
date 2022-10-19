import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ toggleModal, url, descr }) => {
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [toggleModal]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <div className={css.Modal}>
        <img src={url} alt={descr} />
        <p className={css.description_modal}>{descr}</p>
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  toggleModal: PropTypes.func,
  url: PropTypes.string,
};
