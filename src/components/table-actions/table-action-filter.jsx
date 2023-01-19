import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material';

const TableActionFilter = ({ setFilteredCountry }) => {
  return (
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
  )
}

export default TableActionFilter;
