import React from 'react';
import './styles/NavBar.css';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='container-navbar'>
      <div className="container-logo">
        <Link to="/">
          <img src={logo} alt="logo-spa" />
        </Link>
      </div>
      <div className="container-agregar">
        <Link className='btn-agregar' to="/agregarpersonaje"><p>Agregar personaje</p></Link>
        <Link className='btn-agregar' to="/marvel"><p>Marvel</p></Link>
        <Link className='btn-agregar' to="/dc"><p>DC</p></Link>
      </div>
    </div>
  )
}

export default NavBar