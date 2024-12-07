import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {logout} from "./../store/action";

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && token !== 'null' && token !== 'undefined') {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Banking App
        </Typography>
        {isAuthenticated && (
          <>
            <Button color="inherit" component={Link} to="/my/accounts">
              Account Summary
            </Button>
            <Button color="inherit" component={Link} to="/my/accounts/transfer">
              Transfer
            </Button>
            <Button variant="contained" color="secondary" onClick={handleLogout}>
              Logout
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;