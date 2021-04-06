import React from 'react';
import batabitLogo from '../assets/img/logo.svg';
import '../styles/Header.scss';

const Header = () => {
  return (
    <header>
      <img src={batabitLogo} alt='' />
      <div className='header__title-container'>
        <h1>
          La proxima revolucion en el intercambio de Criptomonedas
        </h1>
        <p>
          Batabit te ayuda a navegar entre los diferentes precios y tendencias
        </p>
        <div className='container--button'>
          <a href='/' className='header__button'>
            Conoce nuestros planes
            <span> </span>
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
