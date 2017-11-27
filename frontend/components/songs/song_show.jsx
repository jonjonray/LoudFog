import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';

class SongShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUsers();
    this.props.fetchSongs();
  }

  render(){
    return (
      <div className="song-show">
        <NavBarContainer />
        <div className="song-show-body"> </div>
      </div>


      );
  }
}

export default SongShow;
