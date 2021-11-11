/**
 * @module App
 */
import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { LoadScreen } from 'app/screens/Loading';
import { RecoilRoot } from 'recoil';

// Import the Firebase app initializer
import { init } from 'app/config/firebase';

// Lazy load the application
const App = React.lazy(() => import('app/root'));
const Theme = React.lazy(() => import('app/components/ThemeWrapper'));

// Set the DOM Element to attach the SPA
const root = document.getElementById('root');

// Initialize the firebase app
const firebase = init({
  key: process.env.API_KEY,
  sender: process.env.SENDER_ID,
  app: process.env.APP_ID,
  projectId: process.env.PROJECT_ID,
});

/**
 * Main Application Render Method
 * @param {function} Component -- JSX Component being rendered
 * @memberof App
 */
export const renderer = (Component, dom) =>
  render(
    <RecoilRoot>
      <Suspense fallback={<LoadScreen />}>
        <Theme>
          <Component firebase={firebase} />
        </Theme>
      </Suspense>
    </RecoilRoot>,
    dom
  );

// Call the render method with the App component
renderer(App, root);

// Setup the hot module reloading to replace components on disk-write with the new version
if (module.hot) {
  module.hot.accept('app', () => renderer(App, dom));
}
