import React, {useState, useEffect} from 'react'
import CardHome from '../components/CardHome';
import NavBar from '../components/NavBar';

const Marvel = () => {
    const [personajes, setPersonajes] = useState();

  const ObtenerPersonajes = async() => {
    const result = await fetch(`http://localhost:4040/mostrarporcasa/Marvel`);
    const data = await result.json();
    setPersonajes(data);
    setPersonajesFiltrado(data)
  }

  useEffect(() => {
    ObtenerPersonajes();
  }, [])

  const [personajesFiltrado, setPersonajesFiltrado] = useState();
  
  const filtrarPersonaje = (search) => {
    let resultado = personajes.filter( elemento => {
        if(elemento.nombrePJ.toString().toLowerCase().includes(search.toLowerCase())
        ){
            return elemento;
        }
    });
    setPersonajesFiltrado(resultado);
  }
  

  return (
    <>
    <NavBar />
    <br />
    <div className="container-busqueda">
      <input type="search" placeholder='Búsque un personaje' onChange={(e) => {filtrarPersonaje(e.target.value)}} />
    </div>
    <div className="container-card-personajes">
        {personajesFiltrado && personajesFiltrado.map((personaje,index) =>{
            return(
                <CardHome personaje={personaje} key={index} />
            )
        })}
    </div>
    </>
  )
}

export default Marvel