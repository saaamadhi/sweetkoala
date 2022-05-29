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
import ClipLoader from 'react-spinners/ClipLoader';

const Home = () => {
  const { content, lwder } = styles;
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const intl = useIntl();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts()
      .then(({ data }) => {
        dispatch(ActionCreators.setCatalog(data));
        setProducts(data);
        setLoading(false);
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
        <div className={lwder}>
          <ClipLoader loading={loading} size={50} />
        </div>
        <Catalog products={products} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
