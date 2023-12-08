import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import ModalCompletado from './ModalCompletado';
import './styles/ModalActualizarPJ.css';

const ModalActualizarPJ = ({params}) => {

  const nomb = params;

    const [datosPersonaje, setDatosPersonaje] = useState({
        'nombre': '',
        'nombrePJ': '',
        'casaPert': '',
        'biografia': '',
        'añoApar': 0,
        'equipamiento': '',
        'imgURL': ''
      })
    
      const handleChange = (e) =>{
        setDatosPersonaje({...datosPersonaje, [e.target.name]: e.target.value})
      }
    
      const [showModal, setShowModal] = useState(false);
    
      const actualizarPersonaje = async(e) =>{
        e.preventDefault();
        setShowModal(true);
        await fetch(`http://localhost:4040/actualizar/${nomb}`,{
            method: 'PUT',
            body: JSON.stringify(datosPersonaje),
            headers: {"Content-Type": "application/json"}
        });
        setTimeout(() =>{
          setShowModal(false);
          window.location.reload()
        }, 1500)
      }

  const cerrarModal = (e) => {
    e.preventDefault();
    window.location.reload()
  }

  return (
    <>
        <div className="container-modal-actualizarpj">
            <form className='modal-item-actualizar'>
              <div className="container-cerrar-modal">
                <button onClick={cerrarModal}>X</button>
              </div>
                <h2>Actualizar personaje</h2>
                <input onChange={handleChange} type="text" name="nombre" placeholder='Nombre real del personaje.'/>
                <input onChange={handleChange} type="text" name="nombrePJ" placeholder='Nombre del personaje.'/>
                <input onChange={handleChange} type="text" name="casaPert" placeholder='Casa a la que pertenece el personaje.' />
                <input onChange={handleChange} type="text" name="biografia" placeholder='Biografía del personaje.' />
                <input onChange={handleChange} type="number" name="añoApar" placeholder='Año de aparición del personaje.' />
                <input onChange={handleChange} type="text" name="equipamiento" placeholder='Equipamiento del personaje.' />
                <input onChange={handleChange} type="text" name="imgURL" placeholder='Url de la imagen, separada por coma ( "," ).' />
                <button onClick={actualizarPersonaje}>Agregar personaje</button>
            </form>
        </div>
        {
            showModal && <ModalCompletado texto="El personaje ha sido actualizado." />
        }
    </>
  )
}

export default ModalActualizarPJ