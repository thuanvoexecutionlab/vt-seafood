import { Components, Theme } from '@mui/material';

const MuiTableHead: Components<Theme>['MuiTableHead'] = {
  styleOverrides: {
    root: ({ theme }) => {
      return { '.MuiTableCell-head': { fontWeight: theme.typography.fontWeightMedium } };
    },
  },
};

export default MuiTableHead;
