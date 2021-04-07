import React from 'react';
import Footer from './Footer';
import Header from './Header';
import MainExchange from './MainExchange';
import PictureComodin from './PictureComodin';
import Planes from './Planes';
import Presentacion from './Presentacion';
import ProductDetail from './ProductDetail';
import Tables from './Tables';

const App = () => {
  return (
    <>
      <Presentacion />
      <Header />
      <MainExchange />
      <div className='container-currencies-main'>
        <Tables bitcoinDown etherumUp rippleUp stelarDown title='Monedas' monedas />
        <Tables bitcoinDown etherumUp rippleUp stelarDown title='Comisiones' comisiones />
      </div>
      <ProductDetail />
      <PictureComodin />
      <Planes />
      <Footer />
      <Presentacion />
    </>
  );
};
export default App;
