import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = () => {
  
  return (
    <Box sx={{ mt: 4, mb: 6 }}>
      <Typography
        variant='h4'
        component='h1'
      >
        Countries table
      </Typography>
    </Box>
  )
}

export default Header;
