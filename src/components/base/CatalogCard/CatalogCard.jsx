import React from 'react';
import { string, object } from 'prop-types';
import { Image } from 'cloudinary-react';
import { useDispatch } from 'react-redux';
import ProductDetail from '../ProductDetail';
import { ActionCreators } from '../../../redux/actions/actionCreators';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import shopping_basket from '../../../shared/assets/shopping_basket.svg';
import styles from './catalogCard.css';

const CatalogCard = ({ item, publicId }) => {
  const { wrap, inner, main_info, basket, like, img } = styles;

  const dispatch = useDispatch;

  const handleAddToList = () => {
    dispatch(ActionCreators.addToWishList(item));
  };

  const handleAddToCart = () => {
    dispatch(ActionCreators.addToCart(item));
  };

  return (
    <div className={wrap}>
      <button type="button" onClick={handleAddToList}>
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
        <button type="button" onClick={handleAddToCart}>
          <img className={basket} src={shopping_basket} alt="shopping_basket" />
        </button>
      </div>
    </div>
  );
};

export default CatalogCard;

CatalogCard.propTypes = {
  item: object.isRequired,
  publicId: string.isRequired,
};
