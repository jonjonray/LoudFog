import React from 'react';
import Root from './components/root';
import * as SessionApiUtil from './util/session_api_util';
import configureStore from './store/store';
import ReactDOM from 'react-dom';
import { receiveErrors } from './actions/session/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById("root");
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signout = SessionApiUtil.signout;
  window.signin = SessionApiUtil.signin;
  window.receiveErrors = receiveErrors;
  ReactDOM.render(<Root store={store} />, root );
});
