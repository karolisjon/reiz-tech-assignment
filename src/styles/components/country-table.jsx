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
  const [filteredCountry, setFilteredCountry] = useState('none');

  const getSmallCountries = () => {
    const LT = countries.filter(country => country.name === 'Lithuania');
    const smallCountries = countries.filter(country => country.area < LT[0].area);

    console.log(smallCountries);
    return smallCountries;
  }

  const sortNameMethods = {
    'none': { method: (a, b) => null },
    ascending: { method: (a, b) => a.name.localeCompare(b.name, 'en') },
    descending: { method: (a, b) => b.name.localeCompare(a.name, 'en') },
  };

  const filterCountryMethods = {
    'none': { method: (country) => country },
    'smaller': { method: (country) => country.area < 653000 },
    'oceania': { method: (country) => country.region === 'Oceania' },
  };

  return (
    <Box>

      <Box sx={{ display: 'flex', my: 2 }}>
        <FormControl variant='standard' sx={{ mr: 2, width: 200 }}>
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

        <FormControl variant='standard' sx={{ width: 200 }}>
          <InputLabel>FILTER BY</InputLabel>
          <Select
            defaultValue={'none'}
            onChange={(e) => setFilteredCountry(e.target.value)}
          >
            <MenuItem value='none'><em>None</em></MenuItem>
            <MenuItem value='smaller'>smaller than LT</MenuItem>
            <MenuItem value='oceania'>'Oceania' region</MenuItem>
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
            countries
            .filter(filterCountryMethods[filteredCountry].method)
            .sort(sortNameMethods[sortName].method)
            .map(({ name, region, area, independent }, i) => (
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
