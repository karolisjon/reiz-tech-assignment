import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = ({ countries }) => {

  return (
    <Box>
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
