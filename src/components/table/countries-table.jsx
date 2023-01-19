import React, { useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import CountriesTablePagination from './country-table-pagination/countries-table-pagination';
import CountriesTableActions from './countries-table-actions/countries-table-actions';

const tableCells = [
  { id: 1, label: 'Name' },
  { id: 2, label: 'Region' },
  { id: 3, label: 'Area' },
  { id: 4, label: 'Independent' },
];

const CountriesTable = ({ countries, handlePageChange, pagination, pageSize }) => {
  const [sortName, setSortName] = useState('none');
  const [filteredCountry, setFilteredCountry] = useState('none');

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
    <Box>
      <CountriesTableActions setSortName={setSortName} setFilteredCountry={setFilteredCountry} />

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
      <CountriesTablePagination 
        countries={countries}
        handlePageChange={handlePageChange}
        pagination={pagination}
        pageSize={pageSize}
        />
    </Box>
  )
}

export default CountriesTable;
