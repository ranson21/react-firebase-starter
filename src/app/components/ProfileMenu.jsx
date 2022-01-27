// External Dependencies
import React, { useState } from 'react';
import clsx from 'clsx';
import { ListItemIcon, MenuList, MenuItem, Typography, Divider, Button } from '@material-ui/core';
import { ExitToApp as Logout, Settings } from '@material-ui/icons';
import { lighten, makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import firebase from 'firebase/app';

// Component Dependencies
import { Menu } from 'app/components/Menu';

// Style Dependencies
import { useHistory } from 'react-router';

// Export the Use Styles function
export const useStyles = makeStyles(theme => ({
  avatar: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  selected: {
    backgroundColor: theme.palette.primary.light,
  },
  profileName: {
    fontWeight: 700,
  },
  menuButton: {
    whiteSpace: 'nowrap',
    padding: 4,
    marginLeft: theme.spacing(1),
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

/**
 * Profile Menu Component
 * @param {object} props -- Contains User Details for the profile menu
 */
export const ProfileMenu = ({ user, ...props }) => {
  // Create the JSS Styles
  const classes = useStyles();

  // Setup local state to handle the menu being open/closed
  const [anchorEl, setAnchorEl] = useState(null);

  // Setup the logout handler
  const handleLogout = () => {};

  // Setup the event handler to toggle the menu
  const toggle = event => {
    anchorEl ? setAnchorEl(null) : setAnchorEl(event.currentTarget);
  };

  // Create the history object
  const history = useHistory();

  const handleNav = () => {
    setAnchorEl(null);
    history.push('/settings');
  };

  return (
    <React.Fragment>
      <div
        className={clsx(classes.menuButton, {
          [classes.selected]: anchorEl,
        })}
        aria-haspopup="true"
        onClick={toggle}
      >
        <Typography classes={{ body2: classes.profileName }} variant="body2">
          {user.displayName}
        </Typography>
        <Typography variant="body2">{user.email}</Typography>
      </div>
      <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={toggle} placement="bottom-end">
        <MenuList>
          <MenuItem onClick={handleNav}>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <Typography variant="inherit" color="textPrimary">
              Account Settings
            </Typography>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <Typography variant="inherit" color="textPrimary">
              Logout
            </Typography>
          </MenuItem>
        </MenuList>
      </Menu>
    </React.Fragment>
  );
};
