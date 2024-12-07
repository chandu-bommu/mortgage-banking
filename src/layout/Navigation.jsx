import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
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
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;