import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/AgregarForm.css';
import ModalCompletado from './ModalCompletado';

const AgregarForm = () => {

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

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const cargarPersonaje = async(e) =>{
    e.preventDefault();
    setShowModal(true);

    await fetch('http://localhost:4040/cargar',{
        method: 'POST',
        body: JSON.stringify(datosPersonaje),
        headers: {"Content-Type": "application/json"}
    });
    setTimeout(() => {
      navigate("/")
      setShowModal(false)
    }, 1500);
  }

  return (
    <>
      <form className='container-formularioAgregar'>
          <input onChange={handleChange} type="text" name="nombre" placeholder='Nombre real del personaje.'/>
          <input onChange={handleChange} type="text" name="nombrePJ" placeholder='Nombre del personaje.'/>
          <input onChange={handleChange} type="text" name="casaPert" placeholder='Casa a la que pertenece el personaje.' />
          <input onChange={handleChange} type="text" name="biografia" placeholder='Biografía del personaje.' />
          <input onChange={handleChange} type="number" name="añoApar" placeholder='Año de aparición del personaje.' />
          <input onChange={handleChange} type="text" name="equipamiento" placeholder='Equipamiento del personaje.' />
          <input onChange={handleChange} type="text" name="imgURL" placeholder='Url de la imagen, separada por coma ( "," ).' />
          <button onClick={cargarPersonaje}>Agregar personaje</button>
      </form>
      {
        showModal && <ModalCompletado texto="El personaje ha sido cargado." />
      }
    </>
  )
}

export default AgregarForm