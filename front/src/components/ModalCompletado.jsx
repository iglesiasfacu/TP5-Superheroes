import React from 'react';
import completado from '../assets/cheque.png';
import './styles/ModalCompletado.css';

const ModalCompletado = ({texto}) => {
  return (
    <div className="container-modal-completado">
        <div className="modal-completado">
            <img src={completado} alt="img-completado" />
            <p>{texto}</p>
        </div>
    </div>
  )
}

export default ModalCompletado