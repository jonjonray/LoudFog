import React from 'react';
import { Link } from 'react-router-dom';

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
          LOUDFOG
        </div>
        <div className="right">

          <Link to={this.props.match.path + "/upload"}>
          <div className="upload-button"></div>
          </Link>

          <div className="username">
            {this.props.currentUser.username}
          </div>

          <div
            className="signout-button"
            onClick={this.handleSignOut}>
          </div>
        </div>
      </div>
    );
  }


}

export default NavBar;
