import React from 'react';
import Header from './Header';
import MainExchange from './MainExchange';
import Tables from './Tables';

const App = () => {
  return (
    <>
      <Header />
      <MainExchange />
      <Tables bitcoinDown etherumUp rippleUp stelarDown title='Monedas' monedas />
      <Tables bitcoinDown etherumUp rippleUp stelarDown title='Comisiones' comisiones />
    </>
  );
};
export default App;
