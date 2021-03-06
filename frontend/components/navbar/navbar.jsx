import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import SongFormContainer from '../songs/song_form_container';
class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.handleSignOut = this.handleSignOut.bind(this);
  }


  handleSignOut(e){
    e.preventDefault();
    this.props.signout();
    this.props.history.push("/");
  }

  render(){
    return (
      <div className="navbar">

        <div className="left">
          <div className="nav-logo"></div>
        </div>
        <div className="right">

          <Link to={this.props.location.pathname + "/upload"}>
          <div className="upload-button">
            Upload
          </div>
          </Link>

          <Link to={`/songs/users/${this.props.currentUser.id}`}>
          <div className="username">
            {this.props.currentUser.username}
          </div>
        </Link>
          <div
            className="signout-button"
            onClick={this.handleSignOut}>
            Sign Out
          </div>
        </div>
      </div>
    );
  }


}

export default NavBar;
