import React from 'react';
// import { useState } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import s from './Modal.module.css';
import Drop from '../Drop/Drop';
// import { FileUploader } from 'react-drag-drop-files';
// const fileTypes = ['JPG', 'PNG', 'GIF'];
const customStyles = {
  width: '680px',
  padding: '20px',
  height: '92%',
  background: '#F8F8F7',
  borderRadius: '20px',
  left: '45%',
  rigth: '30px',
  bottom: '30px',
  top: '30px',
  position: 'absolute',
};

function Modal({ trigger, onClose }) {
  return (
    <div>
      <Rodal
        onClose={() => false}
        visible={trigger}
        className={s.rodalMask}
        customStyles={customStyles}
      >
        <Drop />
        <div className={s.button} onClick={onClose}></div>
      </Rodal>
    </div>
  );
}

export default Modal;
