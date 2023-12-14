import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

const Footer = ({primary, fontColor}) => {
  return (
    <AppBar position="static" sx={{backgroundColor: primary}}>
      <Container>
        <Toolbar>
          <Typography variant="body1">
            © 2023 Your Website Name. All rights reserved.
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
