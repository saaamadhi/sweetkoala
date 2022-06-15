import React from 'react';
import Footer from '../../base/Footer';
import Header from '../../base/Header';
import styles from './delivery.css';

const Delivery = () => {
  const { wrap } = styles;

  return (
    <div className={wrap}>
      <Header />
      <h3>Delivery</h3>
      <Footer />
    </div>
  );
};

export default Delivery;
