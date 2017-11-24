import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
class SongIndex extends React.Component {

  constructor(props){
    super(props);

  }


  render() {
    return (
      <div className="song-index">
        <NavBarContainer />
        <div className="song-index-body">

        </div>
      </div>
  );
  }
}



export default SongIndex;
