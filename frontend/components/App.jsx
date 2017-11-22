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
import SongIndex from './songs/song_index';

const App = () => (
  <div>
    <AuthRoute path="/" component={NullSession} />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <ProtectedRoute path="/songs" component={SongIndex} />
  </div>
);

export default App;
