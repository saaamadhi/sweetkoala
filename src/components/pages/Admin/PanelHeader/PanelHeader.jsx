import React from 'react';
import styles from './panelHeader.css';

const PanelHeader = () => {
  const { wrap } = styles;

  return (
    <div className={wrap}>
      <h3>Admin Panel</h3>
    </div>
  );
};

export default PanelHeader;
