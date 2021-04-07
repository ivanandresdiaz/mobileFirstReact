/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import '../styles/Presentacion.scss';

const Presentacion = () => {
  return (
    <div className='presentacion'>
      <div className='container-presentacion'>
        <a className='ancla' href='https://www.facebook.com/ivanandres.diazlopez.5/'>
          {'<'}
          Andres
          <span className='logo-Andres'> Diaz {'/>'}</span>
        </a>
      </div>
    </div>
  );
};
export default Presentacion;
