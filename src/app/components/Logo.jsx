// External Dependencies
import React from 'react';
import { Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Create the Logo Styles
export const useStyles = makeStyles(theme => ({
  logo: {
    color: theme.palette.type === 'dark' ? theme.palette.primary.main : 'white',
    display: 'flex',
    flex: 1,
  },
  label: { padding: '0 15px', whiteSpace: 'nowrap' },
}));

/**
 * Method to render the Application Logo
 * @param {object} props -- Props Contain User Details for AppBar
 */
export default () => {
  // Create the JSS Styles
  const classes = useStyles();

  return (
    <Link className={classes.logo} href="#/home" underline="none">
      <Typography className={classes.label} variant="h6" color="inherit"></Typography>
    </Link>
  );
};
