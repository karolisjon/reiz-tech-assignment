import React from 'react';
import {
  Table,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';

const tableCells = [
  { id: 1, label: 'Name' },
  { id: 2, label: 'Region' },
  { id: 3, label: 'Area' },
  { id: 4, label: 'Independent' },
]

const CountryList = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {
            tableCells.map(({ id, label }) => (
              <TableCell key={id} align="left">{label}</TableCell>
            ))
          }
        </TableRow>
      </TableHead>
    </Table>
  )
}

export default CountryList;
