import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
import SongFormContainer from "./song_form_container";
import SongIndexItem from './song_index_item';


class SongIndex extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchSongs();
  }

  render() {
    return (
      <div className="song-index">
        <NavBarContainer />
        <div className="song-index-body">
          <ul>
          {
            this.props.songs.map((song) => (
              <SongIndexItem song={song}
                key={song.title} />
            ))
          }
          </ul>
        </div>
      </div>
  );
  }
}



export default SongIndex;
