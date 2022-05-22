import React, { useEffect, useState } from 'react';
import Footer from '../../base/Footer';
import Header from '../../base/Header';
import Catalog from '../../base/Catalog';
import Banner from '../../base/Banner';
import { FormattedMessage, useIntl } from 'react-intl';
import styles from './home.css';
import { store } from '../../../redux/store';
import { useDispatch } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import { getAllProducts } from '../../../shared/services/product.service';
import { ActionCreators } from '../../../redux/actions/actionCreators';

const Home = () => {
  const { content } = styles;
  const [products, setProducts] = useState([]);
  const intl = useIntl();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = store.getState();

  useEffect(() => {
    getAllProducts()
      .then(({ data }) => {
        dispatch(ActionCreators.setCatalog(data));
        setProducts(data);
      })
      .catch((e) => {
        confirm(intl.formatMessage({ id: 'err.smthWentWrong' }));
      });
  }, [dispatch, intl]);

  return (
    <div>
      <Header />
      <div className={content}>
        <Banner />
        <Catalog products={products} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
