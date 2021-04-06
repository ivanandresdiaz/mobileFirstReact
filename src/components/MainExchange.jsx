import React from 'react';
import '../styles/MainExchange.scss';

const MainExchange = () => {
  return (
    <section className='main-exchange-container'>
      <div className='backgroundImg' />
      <div className='main-exchange-container--title'>
        <h2>Visibilizamos todas las tasa de cambion</h2>
        <p>Traemos informacion en tiempo real de las tasas de cambio y las monedas mas importantes del mundo</p>
      </div>
      <div className='main-tables-container' />
    </section>
  );
};
export default MainExchange;
