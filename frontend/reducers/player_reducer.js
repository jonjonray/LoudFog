import { PLAY_SONG, PAUSE_SONG, PLAY_NEW_SONG } from '../actions/player_actions';
import merge from 'lodash/merge';

const _nullPlayer = {
  playing: false,
  songId: null
};

const playerReducer = (state = _nullPlayer, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
      case PLAY_SONG:
        newState = merge({}, state, { playing: true});
        return newState;
      case PLAY_NEW_SONG:
        return { playing: true, songId: action.songId};
      case PAUSE_SONG:
        newState = merge({}, state, { playing: false});
        return newState;
      default:
        return state;
    }
};

export default playerReducer;
