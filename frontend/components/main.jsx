import MainLeft from './main_left.jsx';
import MainRight from './main_right.jsx';
import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SongFormContainer from './songs/song_form_container';
import PlayerContainer from './player/player_container';

const Main = () => (
  <div className="main">
    <ProtectedRoute path="/songs" component={NavBarContainer} />
    <ProtectedRoute path="/songs/upload" component={SongFormContainer}/>
    <ProtectedRoute path="/songs/:songId/upload" component={SongFormContainer}/>
    <ProtectedRoute path="/songs/users/:userId/upload" component={SongFormContainer}/>


    <ProtectedRoute path="/songs" component={MainLeft} />
    <ProtectedRoute path="/songs" component={MainRight} />

    <ProtectedRoute path="/" component={PlayerContainer} />
  </div>
);

export default Main;
