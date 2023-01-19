import React from 'react';
import { Pagination } from '@mui/material';

const TablePagination = ({ handlePageChange, pagination, pageSize }) => {

  return (
    <Pagination
      shape='rounded'
      variant='outlined'
      sx={{ display: 'flex', justifyContent: 'flex-end', my: 4 }}
      count={Math.ceil(pagination.count / pageSize)}
      onChange={handlePageChange}
    />
  )
}

export default TablePagination;
