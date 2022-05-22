import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import not_found_icon from '../../../shared/assets/not_found_icon.svg';
import styles from './404.css';

const NotFound = () => {
  const { wrap, page_icon, not_found_img } = styles;

  const intl = useIntl();

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
      <NavLink to="/">{intl.formatMessage({ id: 'catalog' })}</NavLink>
    </div>
  );
};

export default NotFound;
