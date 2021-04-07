import React from 'react';
import LogoFooter from '../assets/img/logo-footer.svg';
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <footer>
      <section className='left'>
        <ul>
          <li>
            {' '}
            <a href='#Home'>Linkedin</a>
            {' '}
          </li>
          <li>
            {' '}
            <a href='#Home'>CrunchBase</a>
          </li>
          <li>
            {' '}
            <a href='#Home'>Hackernews</a>
            {' '}
          </li>
        </ul>
      </section>
      <section className='right'>
        <img src={LogoFooter} alt='Logo Batatabit' />
      </section>
    </footer>
  );
};
export default Footer;
