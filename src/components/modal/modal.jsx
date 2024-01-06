import ReactDOM from "react-dom";
import React, {useEffect} from "react";
import PropTypes from "prop-types";

import styles from './modal.module.css';
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import ModalOverlay from "../modal-overlay/modal-overlay";

const modalRoot = document.getElementById('modals-root');

function Modal({onClose, children}) {

  function onEsc(evt) {

    if (evt.key === 'Escape') {
      evt.preventDefault()
      onClose();
    }
  }

  useEffect(() => {

    document.addEventListener('keydown', onEsc)
    return () => {
      document.removeEventListener('keydown', onEsc)
    }
  })

  return ReactDOM.createPortal(
    (<>
      <ModalOverlay onClick={onClose}/>
      <div className={styles.modal}>
        <button type="button" className={styles.buttonClose} onClick={onClose}>
          <CloseIcon type="primary"/>
        </button>
        <div className={styles.children}>{children}</div>
      </div>
    </>),
    modalRoot
  )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default Modal