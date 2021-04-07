import React from 'react';
import '../styles/ProductDetail.scss';
import CardsDetails from './CardsDetails';

const ProductDetail = () => {
  return (
    <section className='main-product-detail'>
      <div className='container-span'>
        <span className='product-detail--batata-logo'>.</span>
      </div>
      <div className='product-detail--title'>
        <h2>Creamos un producto sin comparación.</h2>
        <p>Confiable y diseñado para su uso diario.</p>
      </div>
      <div className='container-cards'>
        <CardsDetails />
        <CardsDetails />
        <CardsDetails />
        <CardsDetails />
      </div>
    </section>
  );
};
export default ProductDetail;
