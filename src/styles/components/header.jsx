import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = ({ countries }) => {

  return (
    <Box sx={{ my: 4 }}>
      <Typography
        variant='h4'
        component='h1'
      >
        Countries
      </Typography>
      <Typography
        variant='body1'
        component='h2'
      >
        {countries.length} countries
      </Typography>
    </Box>
  )
}

export default Header;
