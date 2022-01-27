// External Dependencies
import React, { useState } from 'react';
import clsx from 'clsx';
import { Grid, AppBar as MAppBar, Toolbar as MToolBar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon } from '@material-ui/icons';

// Component Dependencies
import Logo from 'app/components/Logo';
import { ProfileMenu } from 'app/components/ProfileMenu';

// Create the styles for the AppBar component
export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    boxShadow: 'none',
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.primary.main,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  selectedButton: {
    backgroundColor: theme.palette.primary.light,
  },
}));

/**
 * Method to render the Application Bar
 * @param {object} props -- Props Contain User Details for AppBar
 */
export const AppBar = props => {
  // Create the JSS Styles
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  return (
    <Grid container direction="column" className={classes.root}>
      <MAppBar position="fixed" className={classes.appBar}>
        <MToolBar>
          <IconButton
            edge="start"
            className={clsx(classes.menuButton, { [classes.selectedButton]: open })}
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(!open)}
          >
            <MenuIcon />
          </IconButton>
          <Logo />
          <ProfileMenu {...props} />
        </MToolBar>
      </MAppBar>
    </Grid>
  );
};
