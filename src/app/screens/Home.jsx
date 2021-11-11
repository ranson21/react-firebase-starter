// External Depedencies
import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Style dependencies
import { appBarHeight } from 'app/styles';

// Create the dashboard screen styles
export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: appBarHeight,
    height: '100%',
  },
}));

/**
 * Dashboard Screen Component
 */
export const Home = props => {
  const classes = useStyles();

  return (
    <Container classes={{ root: classes.root }}>
      <Grid container direction="column">
        <Grid item xs={12}>
          <h1>Dashboard</h1>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
