import * as APIUtil from '../../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";


export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => {
  APIUtil.signup(user).then(
    currentUser => dispatch(
      receiveCurrentUser(currentUser)));
};

export const signin = user => dispatch => {
  APIUtil.signin(user).then(
    currentUser => dispatch(
      receiveCurrentUser(currentUser)));
};

export const signout = () => dispatch => {
  APIUtil.signout().then(
    currentUser => dispatch(
      receiveCurrentUser(null)));
};
