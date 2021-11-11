// External Dependencies
import React from 'react';
import { ClickAwayListener, Popper, Paper, Grow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Create the Stlyes for the Menu
export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  popper: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

/**
 * Menu Component wraps a menu item in the paper with a grow transition
 * @param {Object} props -- Contains the children and classes to render
 */
export const MenuComponent = ({ children, TransitionProps, width, classes }) => (
  <Grow {...TransitionProps} style={{ transformOrigin: 'center bottom' }}>
    <Paper className={classes.root} style={{ width }}>
      {children}
    </Paper>
  </Grow>
);

/**
 * Menu component renders a popover menu
 * @param {Object} props -- Contains children and pass-though props for the menu
 */
export const Menu = ({ anchorEl, open, onClose, disableClickAway, placement, ...props }) => {
  // Create the JSS Styles
  const classes = useStyles();

  return (
    anchorEl && (
      <Popper open={open || false} anchorEl={anchorEl} className={classes.popper} placement={placement} transition disablePortal>
        {({ TransitionProps }) => (
          <React.Fragment>
            {!disableClickAway ? (
              <ClickAwayListener onClickAway={onClose}>
                <div>
                  <MenuComponent TransitionProps={TransitionProps} classes={classes} {...props} />
                </div>
              </ClickAwayListener>
            ) : (
              <MenuComponent TransitionProps={TransitionProps} classes={classes} {...props} />
            )}
          </React.Fragment>
        )}
      </Popper>
    )
  );
};
