import { RECEIVE_COMMENTS, REMOVE_COMMENT, RECEIVE_COMMENT } from "../actions/comment_actions";
import merge from 'lodash/merge';

const commentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_COMMENTS:
      newState = merge({}, action.comments);
      return newState;
    case REMOVE_COMMENT:
      newState = merge({}, oldState);
      delete newState[action.commentId];
      return newState;
    case RECEIVE_COMMENT:
      newState = merge({}, oldState, action.comment);
      return newState;
    default:
      return oldState;
  }
};

export default commentsReducer;
