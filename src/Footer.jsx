import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', p: 2, mt: 'auto' }} component="footer">
      <Typography variant="body2" color="inherit" align="center">
       Shravan © 2024 Blog Application
      </Typography>
    </Box>
  );
};

export default Footer;
