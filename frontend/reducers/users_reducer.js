import merge from 'lodash/merge';
import { RECEIVE_ALL_USERS }
  from '../actions/user_actions';

export const usersReducer = (oldState, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_USERS:
    newState = merge({}, action.users);
      return newState;
    default:
      return oldState;
  }
};
