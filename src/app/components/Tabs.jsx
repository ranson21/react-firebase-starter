// External Dependencies
import React from 'react';
import { Tabs as MTabs, Tab as MTab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Util Dependencies
import { a11yProps } from 'app/utils/format';

// Create the tab styles
export const useStyles = makeStyles(theme => ({
  root: {
    textTransform: 'none',
    minHeight: 'auto',
    minWidth: 120,
  },
  wrapper: {
    '& > svg': {
      marginRight: 10,
      marginLeft: '-10px',
    },
    display: 'flex',
    flexDirection: 'row',
  },
  tabIndicator: {
    width: 120,
  },
  tabContainer: {
    height: '100%',
  },
}));

/**
 * Method to render a tab header
 * @param {object} props -- Props Contain the tab header state
 */
export const Tab = ({ selectTab, index, icon: Icon, ...props }) => {
  // Create the JSS Styles
  const classes = useStyles();

  return (
    <MTab label={props.label} icon={<Icon />} classes={{ root: classes.root, wrapper: classes.wrapper }} {...a11yProps(index)} {...props} />
  );
};

/**
 * Method to render tab navigation
 * @param {object} props -- Props Contain the tab state
 */
export const Tabs = ({ selected, selectTab, children, label }) => {
  // Create the JSS Styles
  const classes = useStyles();

  return (
    <MTabs
      onChange={(_, tab) => selectTab(tab)}
      value={selected}
      indicatorColor="primary"
      aria-label={label}
      classes={{
        flexContainer: classes.tabContainer,
        indicator: classes.tabIndicator,
      }}
    >
      {children}
    </MTabs>
  );
};
