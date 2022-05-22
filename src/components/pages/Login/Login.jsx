import React, { useState } from 'react';
import Footer from '../../base/Footer';
import { useDispatch } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import { login } from '../../../shared/services/auth.service';
import { ActionCreators } from '../../../redux/actions/actionCreators';

import Header from '../../base/Header';
import { FormattedMessage, useIntl } from 'react-intl';
import { TextField, Button } from '@mui/material';
import login_icon from '../../../shared/assets/login_icon.svg';
import styles from './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    wrap,
    content,
    form,
    button,
    form__input,
    page_icon,
    registration_link,
  } = styles;

  const intl = useIntl();

  const handleLogin = () => {
    if (email === '' || password === '') {
      confirm(intl.formatMessage({ id: 'err.fields' }));

      return;
    } else {
      login(email, password)
        .then((data) => {
          dispatch(ActionCreators.setAuthToken(data.token));
          dispatch(ActionCreators.setUserRole(data.role));
          navigate('/');
        })
        .catch((e) => {
          confirm(intl.formatMessage({ id: 'err.smthWentWrong' }));
        });
    }
  };

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
            type="password"
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
          <Button variant="contained" disableElevation onClick={handleLogin}>
            <FormattedMessage id="login" />
          </Button>

          <NavLink to="/registration" className={registration_link}>
            {intl.formatMessage({ id: 'dontHaveAcc' })}
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Login;
