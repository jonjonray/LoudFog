import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_error_reducer';
import songsErrorReducer from './song_error_reducer';

export default combineReducers({
  session: sessionErrorsReducer,
  songs: songsErrorReducer
});
