import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// CUSTOM IMPORTS
import AuthLayout from '../pages/Layout/Auth';
import DefaultLayout from '../pages/Layout/Default';
import store from '../store';

interface Props{
  isPrivate?: boolean,
  path: string,
  exact?: boolean,
}

const RouteWrapper: React.FC<Props> = ({isPrivate, path, exact, children}) => {
  // GETTING SESSION STATUS INSIDE AUTH REDUCER
  const { signed } = store.getState().auth;

  // REDIRECTS
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  // LAYOUT CONTROLS
  let Layout: React.FC = signed ? DefaultLayout : AuthLayout;
  //-----

  return (
    <Route
      path={path}
      exact={exact}
      render={props => (
        <Layout>
          {children}
        </Layout>
      )}
    />
  );
}

export default RouteWrapper;