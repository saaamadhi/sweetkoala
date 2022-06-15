import React from 'react';
import Delete from '@mui/icons-material/Delete';
import { Image } from 'cloudinary-react';
import { object } from 'prop-types';
import { CLAUDINARY_PATH } from '../../../shared/const';
import styles from './cartCard.css';

const CartCard = ({ product }) => {
  const { wrap, deleteIcon, inner, img, main_info } = styles;

  const handleDelete = () => {};

  return (
    <div className={wrap}>
      <button type="button" onClick={handleDelete}>
        <Delete className={deleteIcon} />
      </button>
      <div className={inner}>
        <Image
          publicId={`${CLAUDINARY_PATH}/image/upload/v1652370045/${product.sku}.jpg`}
          className={img}
          size="150"
        />
        <div className="product__name">{product.name}</div>
      </div>
      <div className={main_info}>
        <span>Германия</span>
        <span> | </span>
        <span>35р/кг</span>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  product: object,
};

export default CartCard;
