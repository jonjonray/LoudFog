import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import SessionFormContainer
  from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NullSession from './null_session';
import Main from './main';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute path="/songs" component={Main} />
      <AuthRoute path="/" component={NullSession} />
    </Switch>
  </div>
);

export default App;
