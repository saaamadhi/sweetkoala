import React, { useState } from 'react';
import Footer from '../../base/Footer';
import Header from '../../base/Header';
import { FormattedMessage, useIntl } from 'react-intl';
import { TextField, Button } from '@mui/material';
import login_icon from '../../../shared/assets/login_icon.svg';
import styles from './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);

  const { wrap, content, form, button, form__input, page_icon } = styles;

  const intl = useIntl();

  return (
    <div className={wrap}>
      <Header />
      <div className={content}>
        <div className={page_icon}>
          <img src={login_icon} alt="login_icon" />
        </div>
        <form action="#" method="get" className={form}>
          <TextField
            id="email"
            label={intl.formatMessage({ id: 'email' })}
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText={error && intl.formatMessage({ id: 'err.emailFormat' })}
            InputProps={{
              classes: {
                focused: form__input,
              },
            }}
          />
          <TextField
            id="password"
            label={intl.formatMessage({ id: 'password' })}
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            helperText={error && intl.formatMessage({ id: 'err.password' })}
            InputProps={{
              classes: {
                focused: form__input,
              },
            }}
          />
          <Button variant="contained" disableElevation>
            <FormattedMessage id="login" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
