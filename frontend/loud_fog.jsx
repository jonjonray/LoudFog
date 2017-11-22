import React from 'react';
import Root from './components/root';
import * as SessionApiUtil from './util/session_api_util';
import configureStore from './store/store';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById("root");
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signout = SessionApiUtil.signout;
  ReactDOM.render(<Root store={store} />, root );
});
