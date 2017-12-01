import merge from 'lodash/merge';
import { RECEIVE_ALL_USERS }
  from '../actions/user_actions';

export const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_USERS:
    newState = merge({}, action.users);
      return newState;
    case "MAKE_LIKE":
      newState = merge({}, oldState);
      newState[action.like.user_id].likes.push(action.like.song_id);
      return newState;
    case "REMOVE_LIKE":
      newState = merge({}, oldState);
      let index = newState[action.like.user_id].likes.indexOf(action.like.song_id);
      delete newState[action.like.user_id].likes[index];
      return newState;
    default:
      return oldState;
  }
};
