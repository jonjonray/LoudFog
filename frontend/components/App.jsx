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
import SongShowContainer from './songs/song_show_container';



const App = () => (
  <div>
      <ProtectedRoute path="/songs/:songId" component={SongShowContainer} />
      <ProtectedRoute path="/songs/upload" component={SongFormContainer} />
      <ProtectedRoute path="/songs" component={SongIndexContainer} />
      <AuthRoute path="/" component={NullSession} />
  </div>
);

export default App;
