import React from 'react';
import { TableBody, TableCell, TableRow } from '@mui/material';

const CountriesTableBody = ({ countries,sortName, filteredCountry }) => {
  
  const sortNameMethods = {
    'none': { method: (a, b) => null },
    ascending: { method: (a, b) => a.name.localeCompare(b.name, 'en') },
    descending: { method: (a, b) => b.name.localeCompare(a.name, 'en') },
  };

  const filterCountryMethods = {
    'none': { method: (country) => country },
    'smaller': { method: (country) => country.area < 65300 },
    'oceania': { method: (country) => country.region === 'Oceania' },
  };

  return (
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
  )
}

export default CountriesTableBody;
