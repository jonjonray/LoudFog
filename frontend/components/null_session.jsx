import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer
  from './session_form/session_form_container';

class NullSession extends React.Component {

  render() {
    return (

    <div className="null-session">

      <div className="null-session-body">
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <div className="null-session-banner">

        <div className="auth-buttons">
          <Link to={"/login"}>
            <button className="login"> Sign In </button>
          </Link>

          <Link to={"/signup"}>
            <button className="signup"> Sign Up </button>
          </Link>
        </div>


        <div className="left-logo-head">
          <div className="logo-div"> </div>
          <div className="title-div"> LOUDFOG </div>
        </div>

        <div className="bannerhead-content">
          Welcome to the New Era of Music
        </div>
      </div>

      <div className="null-session-content">
          <div>

          </div>

          </div>

        </div>
      </div>

  );
  }
}



export default NullSession;
