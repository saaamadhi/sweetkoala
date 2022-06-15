import React from 'react';
import Footer from '../../base/Footer';
import Header from '../../base/Header';
import styles from './about.css';

const About = () => {
  const { wrap } = styles;

  return (
    <div className={wrap}>
      <Header />
      <h3>About</h3>
      <Footer />
    </div>
  );
};

export default About;
