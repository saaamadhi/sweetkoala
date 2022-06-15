import React, { useState } from 'react';
import { store } from '../../../redux/store';
import { useDispatch } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { ActionCreators } from '../../../redux/actions/actionCreators';
import { FormattedMessage, useIntl } from 'react-intl';
import { TextField, Button } from '@mui/material';
import Header from '../../base/Header';
import Footer from '../../base/Footer';
import CartCard from '../../base/CartCard';
import styles from './cart.css';

const Basket = () => {
  const [openUIform, setOpenUIform] = useState(true);
  const [openCOform, setOpenCOform] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardInstance, setCardInstance] = useState('');
  const [cardDate, setCardDate] = useState('');
  const state = store.getState();
  const userProducts = state.cart.products;

  const intl = useIntl();

  const handleMakeOrder = () => {};

  const { userInfo__form, userPayment__form, open } = styles;

  const handleSubmitUserInfo = () => {
    setOpenUIform(!openUIform);
    setOpenCOform(!openCOform);
  };

  const handlePaymentSubmit = () => {
    return confirm(intl.formatMessage({ id: 'order_added' }));
  };

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
      <form
        action="#"
        method="post"
        className={classNames(userInfo__form, { [open]: openUIform })}>
        <TextField
          id="name"
          label={intl.formatMessage({ id: 'name' })}
          variant="outlined"
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="surname"
          label={intl.formatMessage({ id: 'surname' })}
          variant="outlined"
          margin="normal"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <TextField
          id="email"
          type="email"
          label={intl.formatMessage({ id: 'email' })}
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="phone"
          type="phone"
          label={intl.formatMessage({ id: 'phone' })}
          variant="outlined"
          margin="normal"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          id="deliveryAddress"
          label={intl.formatMessage({ id: 'address' })}
          variant="outlined"
          margin="normal"
          value={deliveryAddress}
          onChange={(e) => setDeliveryAddress(e.target.value)}
        />
        <Button
          variant="contained"
          disableElevation
          onClick={handleSubmitUserInfo}>
          <FormattedMessage id="checkout" />
        </Button>
      </form>
      <form
        action="#"
        method="post"
        className={classNames(userPayment__form, { [open]: openCOform })}>
        <TextField
          id="cardNumber"
          label={intl.formatMessage({ id: 'card_number' })}
          variant="outlined"
          margin="normal"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <TextField
          id="cardDate"
          type="month"
          label={intl.formatMessage({ id: 'card_date' })}
          variant="outlined"
          margin="normal"
          value={cardDate}
          onChange={(e) => setCardDate(e.target.value)}
        />
        <TextField
          id="cardInstance"
          label={intl.formatMessage({ id: 'card_instance' })}
          variant="outlined"
          margin="normal"
          value={cardInstance}
          onChange={(e) => setCardInstance(e.target.value)}
        />
        <Button
          variant="contained"
          disableElevation
          onClick={handlePaymentSubmit}>
          <FormattedMessage id="pay" />
        </Button>
      </form>
      <Footer />
    </div>
  );
};

export default Basket;
