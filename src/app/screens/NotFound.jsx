// External Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import { Button, Grid } from '@material-ui/core';

// Create the styles for the AppBar component
export const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(1),
  },
  container: {
    height: '100%',
  },
  box: {
    marginLeft: theme.spacing(4),
  },
}));

/**
 * Settings Screen Component
 */
export const NotFound = () => {
  // Create the JSS Styles
  const classes = useStyles();

  // Create the history hook
  const history = useHistory();

  return (
    <Grid container className={classes.container} alignContent="center">
      <Grid item xs={6}>
        <Grid container className={classes.container} direction="column" alignContent="flex-end">
          <svg
            width="380px"
            height="500px"
            viewBox="0 0 837 1045"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref="http://www.bohemiancoding.com/sketch/ns"
          >
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path
                d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z"
                id="Polygon-1"
                stroke="#007FB2"
                strokeWidth="6"
              ></path>
              <path
                d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z"
                id="Polygon-2"
                stroke="#EF4A5B"
                strokeWidth="6"
              ></path>
              <path
                d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z"
                id="Polygon-3"
                stroke="#795D9C"
                strokeWidth="6"
              ></path>
              <path
                d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z"
                id="Polygon-4"
                stroke="#F2773F"
                strokeWidth="6"
              ></path>
              <path
                d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z"
                id="Polygon-5"
                stroke="#36B455"
                strokeWidth="6"
              ></path>
            </g>
          </svg>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid container className={classes.container} alignContent="center">
          <div className={classes.box}>
            <h1>404</h1>
            <p>Page not found</p>
            <Button variant="contained" className={classes.button} href="#/home">
              Go to Home Page
            </Button>
            <Button color="primary" onClick={() => history.goBack()} variant="contained">
              Go Back
            </Button>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NotFound;
