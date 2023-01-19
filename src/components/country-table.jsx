import React, { useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import TablePagination from './table-pagination';
import TableActions from './table-actions/table-actions';

const tableCells = [
  { id: 1, label: 'Name' },
  { id: 2, label: 'Region' },
  { id: 3, label: 'Area' },
  { id: 4, label: 'Independent' },
];

const CountryTable = ({ countries, handlePageChange, pagination, pageSize }) => {
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
      <TableActions setSortName={setSortName} setFilteredCountry={setFilteredCountry} />

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
      <TablePagination 
        countries={countries}
        handlePageChange={handlePageChange}
        pagination={pagination}
        pageSize={pageSize}
        />
    </Box>
  )
}

export default CountryTable;
