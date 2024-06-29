// Este componente mostrará una barra de navegación y el contenido de la página correspondiente a la ruta actual. Esta ruta tendrá a las demás como rutas hijas.

import React from 'react';
import { Link } from 'react-router-dom';

function Root() {
  return (
    <>
      <h1>Criptomonedas</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/coin">Coin</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    
    </>
  );
}


export default Root;