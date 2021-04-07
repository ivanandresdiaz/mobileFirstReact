import React from 'react';

const TarjetaPrecios = () => {
  return (
    <>
      <article className='plans-container--card'>
        <div className='container-recommended'>
          <p className='recommended'>Recomendado</p>
        </div>
        <div className='plan-info-container'>
          <h3 className='plan-card--title'>
            Pago Anual
          </h3>
          <p className='plan-card--price'>
            <span>$</span>
            99
          </p>
          <p className='plan-card-saving'>*Ahorras $129 comparado al plan mensual.</p>
          <button className='plan-card--ca' type='button'>
            Escoger este
            <span>. </span>
          </button>
        </div>
      </article>
    </>
  );
};
export default TarjetaPrecios;
