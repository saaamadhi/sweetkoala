import React from 'react';
import { string } from 'prop-types';
import { Image } from 'cloudinary-react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import shopping_basket from '../../../shared/assets/shopping_basket.svg';
import styles from './catalogCard.css';

const CatalogCard = ({ publicId }) => {
  const { wrap, inner, main_info, basket, like, img } = styles;

  return (
    <div className={wrap}>
      <button type="button">
        <FavoriteBorderIcon className={like} />
      </button>
      <div className={inner}>
        <Image publicId={publicId} className={img} />
        <div className="product__name">Marshmello</div>
      </div>
      <div className={main_info}>
        <span>Германия</span>
        <span> | </span>
        <span>35р/кг</span>
        <button type="button">
          <img className={basket} src={shopping_basket} alt="shopping_basket" />
        </button>
      </div>
    </div>
  );
};

export default CatalogCard;

CatalogCard.propTypes = {
  publicId: string.isRequired,
};
