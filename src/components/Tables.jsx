import React from 'react';
import '../styles/Tables.scss';
import ClassNames from 'classnames';

const Tables = (props) => {
  const { bitcoinUp, bitcoinDown, etherumUp, etherumDown, rippleUp, rippleDown, stelarUp, stelarDown, title, monedas, comisiones } = props;
  const bitcoinTendency = ClassNames('currency', { bitcoinUp, bitcoinDown });
  const etherumTendency = ClassNames('currency', { etherumUp, etherumDown });
  const rippleTendency = ClassNames('currency', { rippleUp, rippleDown });
  const stelarTendency = ClassNames('currency', { stelarUp, stelarDown });
  const titleAbout = ClassNames('currency-table--title', { monedas, comisiones });
  return (
    <div className='main-currency-table'>
      <p className={titleAbout}>{title}</p>
      <div className='currency-table--container'>
        <table>
          <tr>
            <td className='table__top-left'>Bitcoin</td>
            <td className='table__top-right table__right'>
              $1.96
              <span className={bitcoinTendency}>. </span>
            </td>
          </tr>
          <tr>
            <td>Ethreum</td>
            <td className='table__right'>
              $0.07
              <span className={etherumTendency}>. </span>
            </td>
          </tr>
          <tr>
            <td>Rippel</td>
            <td className='table__right'>
              $2.17
              <span className={rippleTendency}>. </span>
            </td>
          </tr>
          <tr>
            <td className='table__bottom-left'>
              Stelar
              <span className='currency-down'>. </span>
            </td>
            <td className='table__bottom-right table__right'>
              $4.96
              <span className={stelarTendency}>. </span>
            </td>
          </tr>
        </table>
      </div>
      <div className='currency-table--date'>
        <p>
          {' '}
          <b>Actualizado:</b>
          {' '}
          19 Julio 23:45
        </p>
      </div>
    </div>
  );
};
export default Tables;
