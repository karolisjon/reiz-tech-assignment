import React from 'react';
import { Box } from '@mui/material';
import CountriesTableActionSort from './countries-table-action-sort';
import CountriesTableActionFilter from './countries-table-action-filter';

const CountriesTableActions = ({ setSortName, setFilteredCountry }) => {
  return (
    <Box sx={{ display: 'flex', my: 2 }}>
      <CountriesTableActionSort setSortName={setSortName} />
      <CountriesTableActionFilter setFilteredCountry={setFilteredCountry} />
    </Box>
  )
}

export default CountriesTableActions;
