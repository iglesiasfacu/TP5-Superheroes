import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ModalActualizarPJ from '../components/ModalActualizarPJ';
import ModalCompletado from '../components/ModalCompletado';
import NavBar from '../components/NavBar';
import Slider from '../components/Slider';
import './styles/DetallePersonaje.css';
import marvel from '../assets/marvel.png';
import dc from '../assets/dc.png';

const DetallePersonaje = () => {

  const [personaje, setPersonaje] = useState();
  const [showModal, setShowModal] = useState(false);
  const [resultImg, setResultImg] = useState();
  const [showModalActualizar, setShowModalActualizar] = useState(false);

  const params = useParams();
  const navigate = useNavigate()
  
  const ObtenerPersonaje = async() => {
    const result = await fetch(`http://localhost:4040/mostrarindividual/${params.id}`);
    const data = await result.json();
    setPersonaje(data);
    if (data.casaPert == "Marvel"){
      setResultImg(marvel);
    } else if ((data.casaPert == "DC") || (data.casaPert == "Dc Comic")){
      setResultImg(dc)
    }
  }
  
  useEffect(() => {
    ObtenerPersonaje()
  }, [])
  
  console.log("params: ", params.id)

  const eliminarPersonaje = async() => {
    setShowModal(true);
    await fetch(`http://localhost:4040/eliminar/${params.id}`, {
      method: 'DELETE'
    });
    setTimeout(()=>{
      setShowModal(false);
      navigate("/")
    },1500)
  }




  return (
    <>
    <NavBar />
    <div className='container-detallePersonaje'>
      {personaje && 
      <>
        <div className="container-detalle-texto">
          <h1>{personaje.nombrePJ}</h1>
          <img src={resultImg} alt="" />
          <p><b>Nombre real: </b>{personaje.nombre}</p>
          <p><b>Biografía: </b>{personaje.biografia}</p>
          <p><b>Año de aparición: </b>{personaje.añoApar}</p>
          <p><b>Personaje de: </b>{personaje.casaPert}</p>
          <div className="container-detalle-buttons">
            <button onClick={() => setShowModalActualizar(true)}>Actualizar</button>
            <button onClick={eliminarPersonaje}>Eliminar</button>
          </div>
        </div>
        <Slider imagenes={personaje.imgURL} />
      </>
      }
    </div>
    {
      showModal && <ModalCompletado texto="El personaje ha sido eliminado." />
    }
    {
      showModalActualizar && <ModalActualizarPJ params={params.id}/>
    }
    </>
  )
}

export default DetallePersonaje