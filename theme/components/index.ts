import { Components, Theme } from '@mui/material';
import MuiTableBody from './MuiTableBody';
import MuiTableCell from './MuiTableCell';
import MuiTableHead from './MuiTableHead';
import MuiTextField from './MuiTextField';

const components: Components<Omit<Theme, 'components'>> = {
  MuiTableHead,
  MuiTableBody,
  MuiTableCell,
  MuiTextField,
};

export default components;
