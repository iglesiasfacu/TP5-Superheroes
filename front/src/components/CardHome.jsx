import React from 'react';
import './styles/CardHome.css'
import { Link } from 'react-router-dom';

const CardHome = ({personaje}) => {

    const {nombre, nombrePJ, casaPert, biografia, añoApar, imgURL} = personaje;

   const urlIMG = imgURL.split(',')
   let imagen = urlIMG[0] ? urlIMG[0] : imgURL;
   if (urlIMG.length > 1){
    console.log(urlIMG[0])
      imagen =  urlIMG[0] ? urlIMG[0] : imgURL;
   }

  return (
    <Link className='container-detalle' to={`/detalle/${nombrePJ}`}>
        <div className="container-img">
          <img src={imagen} alt={nombre} />
        </div>
        <div className="container-detalles">
          <h2>{nombrePJ}</h2>
          <div className="container-informacion">
            <p>Biografía: {biografia}</p>
            <p>Año de aparición: {añoApar}</p>
            <p>Personaje de: {casaPert}</p>
          </div>
        </div>
    </Link>
  )
}

export default CardHome