import React from 'react';
import { Link } from 'react-router-dom';

class SongIndex extends React.Component {

  constructor(props){
    super(props);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignOut(e){
    debugger;
    e.preventDefault();
    this.props.signout();
    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        SONG INDEX
        <button onClick={this.handleSignOut}> Sign Out</button>
      </div>
  );
  }
}



export default SongIndex;
