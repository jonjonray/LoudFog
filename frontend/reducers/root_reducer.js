import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import songsReducer from './songs_reducer';

export default combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  songs: songsReducer
});
