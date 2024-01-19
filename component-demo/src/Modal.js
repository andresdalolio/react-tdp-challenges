import React from 'react';
import { createPortal } from 'react-dom';

function Modal( { children }) {
  return createPortal(
    <div className="modal" id="modal">
      {children}
    </div>,
    document.body
  );
}

export default Modal;
