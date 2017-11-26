import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer
  from './session_form/session_form_container';

class NullSession extends React.Component {

  componentDidMount(){
    document.getElementById('vid').defaultPlaybackRate = 0.1;
  }

  render() {
    return (

    <div className="null-session">
      <video playsInline autoPlay muted loop
        poster="app/assets/images/drummer.png"
        id="vid">
        <source src="https://s3-us-west-1.amazonaws.com/loudfog/drummer.webm"
          type="video/webm">
        </source>
        <source src="https://s3-us-west-1.amazonaws.com/loudfog/shutterstock_v4535888.mov"
          type="video/mov">
        </source>
      </video>
      <div className="null-session-body">
        <div className="left-logo-head">
          <div className="logo-div"> </div>
          <div className="title-div"> LOUDFOG </div>
        </div>



        <div className="auth-buttons">
          <Link to={"/login"}>
            <button className="login"> Sign In </button>
          </Link>

          <Link to={"/signup"}>
            <button className="signup"> Sign Up </button>
          </Link>
        </div>

        <div className="bannerhead-content">
          Welcome to the New Era of Music
        </div>
        <div className="bannerhead-content quote">
          “We are the music makers, and we are the dreamers of dreams.” ― Arthur O’Shaughnessy
        </div>
      </div>

        </div>

  );
  }
}



export default NullSession;
