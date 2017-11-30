import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import SongShowContainer from './songs/song_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import PlaceholderCloud from './placeholder_cloud';
import UserShowContainer from './users/user_show_container';

const MainRight = () => (
  <div className="main-right">
    <Switch>
    <Route exact path="/songs/upload" component={PlaceholderCloud} />
    <ProtectedRoute path="/songs/users/:userId" component={UserShowContainer} />
    <ProtectedRoute path="/songs/:songId" component={SongShowContainer} />
    <ProtectedRoute path="/songs" component={PlaceholderCloud} />
    </Switch>
  </div>
);

export default MainRight;
