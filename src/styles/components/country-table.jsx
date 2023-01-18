import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

const tableCells = [
  { id: 1, label: 'Name' },
  { id: 2, label: 'Region' },
  { id: 3, label: 'Area' },
  { id: 4, label: 'Independent' },
];

const CountryTable = ({ countries }) => {

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

      <TableBody>
        {
          countries.map(({ name, region, area, independent }, i) => (
            <TableRow key={i}>
              <TableCell>{name}</TableCell>
              <TableCell>{region}</TableCell>
              <TableCell>{area}</TableCell>
              <TableCell>{independent ? 'Yes' : 'No'}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>


  )
}

export default CountryTable;
