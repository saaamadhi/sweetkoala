import React from 'react';
import styles from './footer.css';

const Footer = () => {
  const date = new Date().getFullYear();

  const { footer } = styles;

  return (
    <footer className={footer}>
      <div>
        <p>Copyright © {date} SweetKoala.com</p>
      </div>
    </footer>
  );
};

export default Footer;
