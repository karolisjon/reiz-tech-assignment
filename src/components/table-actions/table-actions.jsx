import React from 'react';
import { Box } from '@mui/material';
import TableActionSort from './table-action-sort';
import TableActionFilter from './table-action-filter';

const TableActions = ({ setSortName, setFilteredCountry }) => {
  return (
    <Box sx={{ display: 'flex', my: 2 }}>
      <TableActionSort setSortName={setSortName} />
      <TableActionFilter setFilteredCountry={setFilteredCountry} />
    </Box>
  )
}

export default TableActions;
