// External Dependencies
import React from 'react';
import { Typography, Link } from '@material-ui/core';

export const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#/home">
        Abby Ranson
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
