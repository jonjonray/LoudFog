import * as commentUtil from '../util/comments_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const createComment = (comment) => (dispatch) => (
  commentUtil.createComment(comment).then((comments) => dispatch(receiveComment(comments)))
);


export const deleteComment = (commentId) => (dispatch) => (
  commentUtil.removeComment(commentId).then((comment) => dispatch(removeComment(comment.id)))
);


export const fetchComments = (id) => (dispatch) => (
  commentUtil.fetchComments(id).then((comments) => dispatch(receiveComments(comments)))
);
