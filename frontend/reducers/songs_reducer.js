import {
  RECEIVE_ALL_SONGS,
  RECEIVE_SONG,
  REMOVE_SONG
} from '../actions/song_actions';

import merge from 'lodash/merge';

const songsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_SONGS:
      newState = merge({}, action.songs);
      return newState;
    case RECEIVE_SONG:
      newState = merge({}, oldState, {[action.song.id]: action.song});
      return newState;
    case REMOVE_SONG:
      newState = merge({}, oldState);
      delete newState[action.songId];
      return newState;
    case "MAKE_LIKE":
      newState = merge({}, oldState);
      newState[action.like.song_id].likes.push(action.like.user_id);
      return newState;
    case "REMOVE_LIKE":
      newState = merge({}, oldState);
      let index = newState[action.like.song_id].likes.indexOf(action.like.user_id);
      delete newState[action.like.song_id].likes[index];
      return newState;
    default:
      return oldState;
  }
};

export default songsReducer;
