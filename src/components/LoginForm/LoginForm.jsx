

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, fetchAccountSummary } from '../../store/action';
import { TextField, Button, Typography } from '@mui/material';

const LoginForm = () => {
  const [customerId, setCustomerId] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(customerId, password)); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5">Login</Typography>
      <TextField 
        label="Customer ID" 
        value={customerId} 
        onChange={(e) => setCustomerId(e.target.value)} 
        fullWidth 
        margin="normal" 
      />
      <TextField 
        label="Password" 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        fullWidth 
        margin="normal" 
      />
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;