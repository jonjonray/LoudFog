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


const MainRight = () => (
  <div className="main-right">
    <ProtectedRoute path="/songs/:songId" component={SongShowContainer} />
  </div>
);

export default MainRight;
