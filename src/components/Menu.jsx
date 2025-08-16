import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="menu-container">
      <h1>Menú Principal</h1>
      <nav>
        <ul className="menu-list">
          <li>
            <Link to="/ejercicio1">
              <button className="menu-button">Ejercicio 1</button>
            </Link>
          </li>
          <li>
            <Link to="/ejercicio2">
              <button className="menu-button">Ejercicio 2</button>
            </Link>
          </li>
          <li>
            <Link to="/ejercicio3">
              <button className="menu-button">Ejercicio 3</button>
            </Link>
          </li>
          <li>
            <Link to="/ejercicio4">
              <button className="menu-button">Ejercicio 4</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;