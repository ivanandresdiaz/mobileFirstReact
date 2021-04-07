import React from 'react';
import TarjetaPrecios from './TarjetaPrecios';
import '../styles/Planes.scss';

const Planes = () => {
  return (
    <section id='plans' className='main-plans-container'>
      <div className='plans--title'>
        <h2>Esocge el plan que mejor se ajuste a ti</h2>
        <p>Cualquier plan te da acceso completo a nuestra plataforma</p>
      </div>
      <section className='plans-container--slider'>
        <TarjetaPrecios />
        <TarjetaPrecios />
        <TarjetaPrecios />
      </section>
    </section>
  );
};
export default Planes;
