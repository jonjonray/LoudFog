import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import songsReducer from './songs_reducer';
import { usersReducer } from './users_reducer';
import playerReducer from './player_reducer';
import commentsReducer from './comments_reducer';

export default combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  songs: songsReducer,
  users: usersReducer,
  player: playerReducer,
  comments: commentsReducer
});
