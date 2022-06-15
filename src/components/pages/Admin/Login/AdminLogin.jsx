import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import { login } from '../../../../shared/services/admin.service';
import { ActionCreators } from '../../../../redux/actions/actionCreators';
import PanelHeader from '../PanelHeader';
import { FormattedMessage, useIntl } from 'react-intl';
import { TextField, Button } from '@mui/material';
import styles from './adminLogin.css';

const AdminLogin = () => {
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
        .then(({ data }) => {
          dispatch(ActionCreators.setAuthToken(data.token));
          dispatch(ActionCreators.setUserRole(data.role));
          navigate('/admin/dashboard');
        })
        .catch((e) => {
          confirm(intl.formatMessage({ id: 'err.smthWentWrong' }));
        });
    }
  };

  return (
    <div className={wrap}>
      <PanelHeader />
      <div className={content}>
        <span>Admin Login</span>
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
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
