// Import Firebase/GCIP dependencies. These are installed on npm install.
import firebase from 'firebase/app';
import 'firebase/auth';

/**
 * Initializes the firebase application based on the passed params
 * @param {Object} options -- API_KEY, SENDER_ID, APP_ID, and PROJECT_ID
 * @returns {Object} -- The initialized firebase application
 */
export const init = ({ key, sender, app, projectId }) => {
  // Initialize the firebase app
  firebase.initializeApp({
    projectId,
    apiKey: key,
    authDomain: `${projectId}.firebaseapp.com`,
    storageBucket: `${projectId}.appspot.com`,
    messagingSenderId: sender,
    appId: app,
  });

  // Return the initialized instance of firebase
  return firebase;
};
