import React from 'react';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer className="footer">
      <Typography variant="body2" align="center"> 
        &copy; {new Date().getFullYear()} Banking App
      </Typography>
    </footer>
  );
};

export default Footer;