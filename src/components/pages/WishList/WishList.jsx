import React from 'react';
import { store } from '../../../redux/store';
import { useDispatch } from 'react-redux';
import CartCard from '../../base/CartCard';
import Header from '../../base/Header';
import Footer from '../../base/Footer';

const WishList = () => {
  const state = store.getState();
  const userProducts = state.wishList.products;

  return (
    <div>
      <Header />
      WishList
      {userProducts.length
        ? userProducts.map((product, index) => (
            <CartCard key={`${product.name}-${index}`} product={product} />
          ))
        : null}
      <Footer />
    </div>
  );
};

export default WishList;
