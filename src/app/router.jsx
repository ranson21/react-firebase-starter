// External Dependencies
import React, { Suspense } from 'react';
import { useRecoilState } from 'recoil';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { Dashboard } from '@material-ui/icons';

// Component Dependencies
import { PublicRoute } from 'app/navigation/PublicRoute';
import { PrivateRoute } from 'app/navigation/PrivateRoute';
import { LoadScreen } from 'app/screens/Loading';
import { userState } from 'app/state/auth';
import { componentLoader } from 'app/utils/loader';

// Top-Level routes
export const ROUTES = [
  {
    path: 'home',
    Icon: Dashboard,
  },
];

// Application Screens
const Login = React.lazy(() => import('app/screens/Login'));
const Home = React.lazy(() => import('app/screens/Home'));
const NotFound = React.lazy(() => import('app/screens/NotFound'));

/**
 * Application Router
 * @param {object} props -- Route Properties
 */
export const AppRouter = props => {
  const [user] = useRecoilState(userState);

  return (
    <Suspense fallback={<LoadScreen />}>
      <Router>
        <Switch>
          <PublicRoute {...props} exact path="/login" component={Login} isAuth={Boolean(user)} />
          <PrivateRoute {...props} exact path="/home" component={Home} isAuth={Boolean(user)} />
          <PrivateRoute {...props} exact component={NotFound} isAuth={Boolean(user)} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default AppRouter;
