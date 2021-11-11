// External Dependencies
import { createMuiTheme } from '@material-ui/core/styles';

/**
 * Method to set the application theme
 */
export const theme = createMuiTheme({
  themeName: 'Audit Signal Theme',
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: { xs: 0, lg: 1280, sm: 600, xl: 1920, md: 960 },
  },
  mixins: {
    toolbar: {
      minHeight: 56,
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 48,
      },
      '@media (min-width:600px)': { minHeight: 48 },
    },
  },
  spacing: 8,
  palette: {
    secondary: {
      main: '#f06292',
      contrastText: '#fff',
    },
    type: 'light',
    primary: {
      main: '#4527a0',
      contrastText: '#fff',
    },
  },
});
