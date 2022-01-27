// External Dependencies
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// Style Dependencies
import { theme } from 'app/utils/theme';

/**
 * Method to wrap the application with a theme
 * @param {Object} props -- Contains the component children and user settings
 */
export const ThemeWrapper = ({ children, ...props }) => {
  return (
    <ThemeProvider {...props} theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
