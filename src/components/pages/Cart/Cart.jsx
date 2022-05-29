import React from 'react';
import { store } from '../../../redux/store';
import Header from '../../base/Header';
import Footer from '../../base/Footer';
import CartCard from '../../base/CartCard';

const Basket = () => {
  const state = store.getState();
  const userProducts = state.cart.products;

  return (
    <div>
      <Header />
      Basket
      <div>
        {userProducts.length
          ? userProducts.map((product, index) => (
              <CartCard key={`${product.name}-${index}`} product={product} />
            ))
          : null}
      </div>
      <Footer />
    </div>
  );
};

export default Basket;
