import React from 'react';


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
