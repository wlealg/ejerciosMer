import React from 'react';
import { Link } from 'react-router-dom';

function Ejercicio1() {
  return (
    <div className="page-container">
      <h2>Página de Ejercicio 4</h2>
      <div className="image-wrapper">
        <img
          src="https://via.placeholder.com/400"
          alt="Imagen del Ejercicio 1"
          className="centered-image"
        />
      </div>
      <Link to="/">
        <button className="back-button">Volver al Menú</button>
      </Link>
    </div>
  );
}

export default Ejercicio1;