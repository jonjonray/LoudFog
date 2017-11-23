import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
class SongIndex extends React.Component {

  constructor(props){
    super(props);
    this.handleSignOut = this.handleSignOut.bind(this);
    console.log(this.props);
  }

  handleSignOut(e){
    e.preventDefault();
    this.props.signout();
    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <NavBarContainer />
        <button onClick={this.handleSignOut}> Sign Out</button>
      </div>
  );
  }
}



export default SongIndex;
