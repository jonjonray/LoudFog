import { PLAY_SONG, PAUSE_SONG, PLAY_NEW_SONG } from '../actions/player_actions';
import merge from 'lodash/merge';


const playerReducer = (state = {}, action) => {
    Object.freeze(state);
}
