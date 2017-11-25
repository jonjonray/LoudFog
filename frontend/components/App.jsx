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
import SongIndexContainer from './songs/song_index_container';
import SongFormContainer from './songs/song_form_container';


const App = () => (
  <div>
    <AuthRoute path="/" component={NullSession} />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <ProtectedRoute path="/songs" component={SongIndexContainer} />
    <ProtectedRoute path="/songs/upload" component={SongFormContainer} />
  </div>
);

export default App;
