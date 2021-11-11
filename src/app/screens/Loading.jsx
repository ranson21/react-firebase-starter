// External Dependencies
import React from 'react';
import { CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Create the styles for the Load Screen
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    height: '100vh',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.default,
  },
  loading: {
    color: theme.palette.textColor,
    marginLeft: 50,
    marginBottom: 25,
  },
}));

/**
 * Loading Screen Component
 */
export const LoadScreen = () => {
  // Create the JSS Styles
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.loading} variant="h4">
        Loading...
      </Typography>
      <CircularProgress size={80} thickness={2} />
    </div>
  );
};
