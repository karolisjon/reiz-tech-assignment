import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material';

const TableActionSort = ({ setSortName }) => {
  return (
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
  )
}

export default TableActionSort;
