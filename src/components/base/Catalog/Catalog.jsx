import React from 'react';
import CatalogCard from '../CatalogCard';
import styles from './catalog.css';

const Catalog = () => {
  return (
    <CatalogCard
      publicId={
        'https://res.cloudinary.com/dg91vh5ga/image/upload/v1652370045/marshmello_kbm6rd.jpg'
      }
    />
  );
};

export default Catalog;
