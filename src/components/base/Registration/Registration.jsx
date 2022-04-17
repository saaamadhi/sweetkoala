import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="content">
      {/* need to add Header, login icon*/}
      <form action="#" method="get" className="log-form">
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          helperText="Not valid email"
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          helperText="Incorrect password"
        />
        <Button variant="contained" disableElevation>
          sign up
        </Button>
      </form>
      {/*need to add CheckBox + Footer*/}
    </div>
  );
};

export default Registration;
