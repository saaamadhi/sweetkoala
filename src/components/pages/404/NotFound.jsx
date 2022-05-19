import React from 'react';
import not_found_icon from '../../../shared/assets/not_found_icon.svg';
import styles from './404.css';

const NotFound = () => {
  const { wrap, page_icon, not_found_img } = styles;

  return (
    <div className={wrap}>
      <div className={page_icon}>
        <img
          className={not_found_img}
          src={not_found_icon}
          alt="not_found_img"
        />
      </div>
      <h1 style={{ color: 'red' }}>OOPS! Donut not found</h1>
    </div>
  );
};

export default NotFound;
