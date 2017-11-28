import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import SongIndexContainer from './songs/song_index_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
const MainLeft = () => (
  <div className="main-left">

    <ProtectedRoute path="/songs" component={SongIndexContainer} />
  </div>
);

export default MainLeft;
