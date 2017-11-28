import { RECEIVE_SONG, RECEIVE_SONG_ERRORS } from '../actions/song_actions';
import merge from 'lodash/merge';

const _nullErrors = [];

export default (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_SONG:
        return _nullErrors;
      case RECEIVE_SONG_ERRORS:
        return action.errors;
      default:
        return _nullErrors;
    }
};
