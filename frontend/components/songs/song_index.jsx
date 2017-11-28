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
    this.props.fetchUsers();
    this.props.fetchSongs();
  }

  render() {
    if (!this.props.songs || !this.props.users) {
      return <div>"LOADING"</div>;
    } else {
      return (
        <div className="song-index">
          <div className="song-index-body">
            <div className="feed">Feed</div>
            <ul className="song-list">
              {
                this.props.songs.map((song) => (
                  <SongIndexItem song={song}
                    user={this.props.users[song.user_id]}
                    key={song.title}
                    currentUser={this.props.currentUser}
                    deleteSong={this.props.deleteSong} />
                ))
              }
            </ul>
          </div>
        </div>
        );
      }
  }
}



export default SongIndex;
