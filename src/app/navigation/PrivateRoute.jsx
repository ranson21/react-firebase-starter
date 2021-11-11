// External Dependencies
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Component Dependencies
import { AppContainer } from 'app/containers/App';

/**
 * Private Route Component renders a screen or redirects
 * @param {Object} props -- Contains the Screen to render for a given route
 */
export const PrivateRoute = ({ component: Screen, ...props }) => {
  // Create the Navigation Closure
  const nav = () => (props.isAuth ? <AppContainer Screen={Screen} {...props} /> : <Redirect to={'/login'} />);

  // Return the Modified route
  return <Route render={nav} {...props} />;
};
