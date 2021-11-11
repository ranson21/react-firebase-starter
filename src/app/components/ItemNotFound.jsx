// External Dependencies
import React from 'react';
import { MenuItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Style Dependencies
import { searchLabel } from 'app/styles';

// Create the styles for this component
const useStyles = makeStyles(() => ({
  searchLabel,
}));

/**
 * Searchable Dropdown component
 * @param {object} props -- Props Contain User Details for AppBar
 */
export const ItemNotFound = ({ label, list }) => {
  // Create the JSS Styles
  const classes = useStyles();

  return list.length ? null : (
    <MenuItem disabled>
      <Typography variant="inherit" color="textPrimary" align="center" classes={{ root: classes.searchLabel }}>
        No {label} Found
      </Typography>
    </MenuItem>
  );
};
