import React from 'react';
import { object } from 'prop-types';

const CartCard = ({ product }) => {
  console.log(product);

  return <div>CartCard</div>;
};

CartCard.propTypes = {
  product: object,
};

export default CartCard;
