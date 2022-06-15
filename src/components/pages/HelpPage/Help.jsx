import React, { useState } from 'react';
import { TextField, TextareaAutosize, Button } from '@mui/material';
import { FormattedMessage, useIntl } from 'react-intl';
import Footer from '../../base/Footer';
import Header from '../../base/Header';
import styles from './help.css';

export const Help = () => {
  const { wrap, form__inner, textarea, content } = styles;
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');
  const intl = useIntl();

  const handleSubmit = () => {};

  return (
    <div className={wrap}>
      <Header />
      <h3>
        <FormattedMessage id="global.help" />
      </h3>
      <br />
      <span>
        Вы можете отправить свой вопрос или отзыв, заполнив форму ниже или
        <br />
        позвонив по контактному номеру, указанному ниже:
      </span>
      <span style={{ textAlign: 'left' }}>
        <b>+375 29 535-33-17</b>
      </span>
      <div className={content}>
        <form action="#" method="post">
          <div className={form__inner}>
            <TextField
              id="name"
              label={intl.formatMessage({ id: 'name' })}
              variant="outlined"
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            <TextareaAutosize
              className={textarea}
              aria-label="minimum height"
              placeholder={intl.formatMessage({ id: 'textarea' })}
              value={notes}
              minRows={3}
              onChange={(e) => setNotes(e.target.value)}
            />
            <Button variant="contained" disableElevation onClick={handleSubmit}>
              <FormattedMessage id="send" />
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Help;
