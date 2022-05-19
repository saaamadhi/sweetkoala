import React from 'react';
import Footer from '../../base/Footer';
import Header from '../../base/Header';
import Catalog from '../../base/Catalog';
import Banner from '../../base/Banner';
import styles from './home.css';

const Home = () => {
  const { content } = styles;

  return (
    <div>
      <Header />
      <div className={content}>
        <Banner />
        <Catalog />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
