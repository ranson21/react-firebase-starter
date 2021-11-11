// External Dependencies
import React from 'react';
import { Icon } from '@material-ui/core';
import { loadCSS } from 'fg-loadcss';

/**
 * Font-Awesome Icon loader component
 * @param {Object} props -- Contains the font awesome icon name to render
 */
export const FontAwesomeIcon = ({ icon, ...props }) => {
  React.useEffect(() => {
    const node = loadCSS('https://use.fontawesome.com/releases/v5.12.0/css/all.css', document.querySelector('#font-awesome-css'));

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return <Icon {...props} className={icon} />;
};
