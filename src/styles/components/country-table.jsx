import React, { useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
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
  const [sortName, setSortName] = useState('none');

  const sortNameMethods = {
    'none': { method: (a, b) => null },
    ascending: { method: (a, b) => a.name.localeCompare(b.name, 'en') },
    descending: { method: (a, b) => b.name.localeCompare(a.name, 'en') },
  };

  return (
    <Box>

      <Box sx={{ display: 'flex', my: 2 }}>
        <FormControl variant='standard' sx={{ width: 200 }}>
          <InputLabel>SORT NAME</InputLabel>
          <Select
            defaultValue={'none'}
            onChange={(e) => setSortName(e.target.value)}
          >
            <MenuItem value='none'><em>None</em></MenuItem>
            <MenuItem value='ascending'>A to Z</MenuItem>
            <MenuItem value='descending'>Z to A</MenuItem>
          </Select>
        </FormControl>

      </Box>

      <Table>
        <TableHead>
          <TableRow>
            {
              tableCells.map(({ id, label }) => (
                <TableCell key={id} align="left" sx={{ fontWeight: 'bold' }}>{label}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>

        <TableBody>
          {
            countries.sort(sortNameMethods[sortName].method).map(({ name, region, area, independent }, i) => (
              <TableRow key={i}
                sx={{
                  '&:hover': {
                    backgroundColor: '#f2f2f2',
                  }
                }}
              >
                <TableCell>{name}</TableCell>
                <TableCell>{region}</TableCell>
                <TableCell>{area}</TableCell>
                <TableCell>{independent ? 'Yes' : 'No'}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </Box>
  )
}

export default CountryTable;
