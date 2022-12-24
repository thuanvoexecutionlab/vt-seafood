import { createTheme } from '@mui/material/styles';
import breakpoints from './breakpoints';
import components from './components';
import palette from './palette';
import transitions from './transitions';
import typography from './typography';

// export { notoSansJP } from './typography';

// Create a theme instance.
const theme = createTheme({ palette, components, breakpoints, typography, transitions });

export default theme;
