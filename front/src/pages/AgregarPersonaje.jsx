import React from 'react'
import AgregarForm from '../components/AgregarForm'
import NavBar from '../components/NavBar';
import './styles/AgregarPersonaje.css';

const AgregarPersonaje = () => {
  return (
    <div>
        <NavBar />
        <br />
        <div className="container-agregarPersonaje">
          <h2>Agregar personaje</h2>
          <AgregarForm />
        </div>
    </div>
  )
}

export default AgregarPersonaje