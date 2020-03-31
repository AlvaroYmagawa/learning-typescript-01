import React from 'react';
import { Switch } from 'react-router-dom';

// CUSTOM IMPORTS
import Route from './Route';
// PUBLIC URLS
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
// PRIVATE URLS
import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      {/* PUBLIC ROUTES */}
      <Route path="/" exact >
        <SignIn />
      </Route>

      <Route path="/register">
        <SignUp />
      </Route>

      {/* PUBLIC ROUTES */}
      <Route path="/dashboard">
        <Dashboard />
      </Route>

    </Switch>
  );
}
