import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Create the styles for this component
const useStyles = makeStyles(() => ({
  container: {
    height: `calc(100% - 53px)`,
  },
  emptyList: { display: 'flex', flexDirection: 'column' },
  emptyListText: { marginTop: 25 },
  emptyListImage: { height: 300 },
}));

/**
 * No Libraries component
 */
export const EmptyContainer = ({ image, label, height, width }) => {
  // Create the JSS Styles
  const classes = useStyles();

  return (
    <Grid container className={classes.container} justify="center" alignItems="center">
      <div className={classes.emptyList}>
        <img width={width} height={height} src={image} />
        <Typography align="center" variant="h5" className={classes.emptyListText}>
          {label}
        </Typography>
      </div>
    </Grid>
  );
};

EmptyContainer.defaultProps = {
  height: 300,
};
