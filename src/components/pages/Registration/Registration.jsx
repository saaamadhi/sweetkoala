import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { FormattedMessage, useIntl } from 'react-intl';
import { Types } from '../../../redux/actions/actionTypes';
import { registration } from '../../../shared/services/auth.service';
import { ActionCreators } from '../../../redux/actions/actionCreators';
import axios from 'axios';
import registration_icon from '../../../shared/assets/registration_icon.svg';
import Header from '../../base/Header';
import styles from './registration.css';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [checked, setChecked] = useState(false);

  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { wrap, content, form, form__input, page_icon } = styles;

  const intl = useIntl();
  const API_URL = 'http://localhost:5000/user/';

  const hadleSubmit = () => {
    if (email === '' || password === '') {
      confirm('All rows should be filled!');

      return;
    } else if (!checked) {
      confirm('you should sign up checkbox!');

      return;
    } else {
      registration('CLIENT', email, password)
        .then(({ data }) => {
          dispatch(ActionCreators.setAuthToken(data.token));
          navigate('/');
        })
        .catch((e) => {
          confirm('something went wrong!');
        });
    }
  };

  return (
    <div className={wrap}>
      <Header />
      <div className={content}>
        <div className={page_icon}>
          <img src={registration_icon} alt="registration_icon" />
        </div>

        <form action="#" method="post" className={form}>
          <TextField
            id="email"
            type="email"
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
            label="Password"
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

          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  value={checked}
                  onChange={() => setChecked(!checked)}
                />
              }
              label={intl.formatMessage({ id: 'checkbox.Privacy&Policy' })}
            />
          </FormGroup>
          <Button variant="contained" disableElevation onClick={hadleSubmit}>
            <FormattedMessage id="signup" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
