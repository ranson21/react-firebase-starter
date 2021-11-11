// External Dependencies
import React, { useState } from 'react';
import clsx from 'clsx';
import { TextField, MenuList, InputAdornment, ClickAwayListener } from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';
import { Menu } from 'app/components/shared/Menu';
import { makeStyles } from '@material-ui/core/styles';

// Component Dependencies
import { ItemNotFound } from 'app/components/shared/ItemNotFound';

// Util Dependencies
import { selectInputValue } from 'app/utils/format';

// Style Dependencies
import { searchLabel } from 'app/styles';

// Create the styles for this component
const useStyles = makeStyles(() => ({
  searchLabel,
  textFieldDense: {
    width: 100,
  },
  dropDown: {
    cursor: 'pointer',
  },
}));

/**
 * Searchable Dropdown component
 * @param {object} props -- Props Contain User Details for AppBar
 */
export const SearchableDropdown = ({ children, width, onClose, list, searchLabel, selectionRange, ...props }) => {
  // Create the JSS Styles
  const classes = useStyles();

  // Create local state to handle the menu opening/closing
  const [anchorEl, setAnchorEl] = useState(null);

  // Setup the open menu handler to focus the text
  const openMenu = event => {
    // Get the input element
    const [input] = event.currentTarget.nodeName === 'INPUT' ? [event.currentTarget] : event.currentTarget.getElementsByTagName('input');

    // Focus the input and select the contents
    input.focus();

    // Determine the selection range if propvided
    const range = selectionRange && selectionRange(input.value);

    // Select the input value
    selectInputValue(input, range);

    // Set the menu anchor to attach search results
    setAnchorEl(event.currentTarget);
  };

  // Setup the close menu handler to hide the menu and run any supplied callback actions
  const closeMenu = () => {
    // Close the menu
    setAnchorEl(null);

    // Run the onClose callback if provided
    if (onClose) {
      onClose();
    }
  };

  return (
    <React.Fragment>
      <ClickAwayListener onClickAway={closeMenu}>
        <TextField
          {...props}
          style={{ width }}
          variant="outlined"
          onClick={openMenu}
          className={clsx({
            [classes.textFieldDense]: props.size === 'small',
          })}
          InputProps={{
            inputProps: {
              onClick: openMenu,
              onFocus: openMenu,
            },
            endAdornment: (
              <InputAdornment position="end" className={classes.dropDown}>
                <ArrowDropDown />
              </InputAdornment>
            ),
          }}
        />
      </ClickAwayListener>
      <Menu
        keepMounted
        disableClickAway
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={closeMenu}
        placement="bottom-start"
        width={width}
      >
        <MenuList>
          <ItemNotFound list={list} label={searchLabel || props.label} />
          {children}
        </MenuList>
      </Menu>
    </React.Fragment>
  );
};

SearchableDropdown.defaultProps = {
  size: 'small',
};
