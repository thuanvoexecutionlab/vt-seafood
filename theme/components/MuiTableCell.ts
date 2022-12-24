import { Components, Theme } from '@mui/material';

const MuiTableCell: Components<Theme>['MuiTableCell'] = {
  defaultProps: { align: 'center' },
  styleOverrides: {
    root: {
      ':not(:first-of-type)': {
        borderLeft: '1px solid rgba(224, 224, 224, 1)',
      },
      borderBottom: '1px solid rgba(224, 224, 224, 1)',
    },
  },
};

export default MuiTableCell;
