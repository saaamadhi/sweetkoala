import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const Login = () => {
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
          Log In!
        </Button>
      </form>
      {/*need to add Footer*/}
    </div>
  );
};

export default Login;