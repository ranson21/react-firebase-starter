// External Dependencies
import React from 'react';
import { Route, Redirect, useParams, useLocation } from 'react-router-dom';

/**
 * Public Route Component
 * @param {Object} props -- Contains the screen to render or redirect
 * @returns {Component} -- Route Wrapped Screen component
 */
export const PublicRoute = ({ component: Screen, ...props }) => {
  // Create the Navigation Closure
  const nav = () =>
    !props.isAuth ? (
      <main>
        <Screen {...props} />
      </main>
    ) : (
      <Redirect to="/home" />
    );

  // Return the Modified route
  return <Route render={nav} {...props} />;
};
