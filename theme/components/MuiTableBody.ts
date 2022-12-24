import { Components, Theme } from '@mui/material';

const MuiTableBody: Components<Theme>['MuiTableBody'] = {
  styleOverrides: {
    root: { '.MuiTableCell-root': { padding: '8px 16px' } },
  },
};

export default MuiTableBody;
