import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
import SongFormContainer from "./song_form_container";


class SongIndex extends React.Component {

  constructor(props){
    super(props);
  }


  render() {
    return (
      <div className="song-index">
        <NavBarContainer />
        <div className="song-index-body">
          <SongFormContainer />
        </div>
      </div>
  );
  }
}



export default SongIndex;
