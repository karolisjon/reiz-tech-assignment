import React from 'react';
import { TableCell, TableHead, TableRow } from '@mui/material';

const tableCells = [
  { id: 1, label: 'Name' },
  { id: 2, label: 'Region' },
  { id: 3, label: 'Area' },
  { id: 4, label: 'Independent' },
];

const CountriesTableHead = () => {
  return (
    <TableHead sx={{ backgroundColor: 'primary.main' }}>
      <TableRow>
        {
          tableCells.map(({ id, label }) => (
            <TableCell key={id} align="left" sx={{ fontWeight: 'bold' }}>{label}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  )
}

export default CountriesTableHead;
