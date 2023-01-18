import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  components: {
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#e9e8ff',
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:nth-child(even)': {
            backgroundColor: '#f7f7f7',
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          '&:last-child': {
            textAlign: 'right',
          }
        },
      },
    },
  }
},
);

export default theme;
