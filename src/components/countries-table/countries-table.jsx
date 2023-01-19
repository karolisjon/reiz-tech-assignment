import React, { useState } from 'react';
import { Box, Table } from '@mui/material';
import CountriesTablePagination from './country-table-pagination/countries-table-pagination';
import CountriesTableActions from './countries-table-actions/countries-table-actions';
import CountriesTableHead from './countries-table-head/countries-table-head';
import CountriesTableBody from './countries-table-body/countries-table-body';

const CountriesTable = ({
  countries,
  handlePageChange,
  pagination,
  pageSize
}) => {
  const [sortName, setSortName] = useState('none');
  const [filteredCountry, setFilteredCountry] = useState('none');

  return (
    <Box>
      <CountriesTableActions setSortName={setSortName} setFilteredCountry={setFilteredCountry} />
      <Table>
        <CountriesTableHead />
        <CountriesTableBody
          countries={countries}
          sortName={sortName}
          filteredCountry={filteredCountry}
        />
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
