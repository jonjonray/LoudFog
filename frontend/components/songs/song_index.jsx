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
    this.props.fetchUsers();
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
                    key={`songindex-${song.id}`}
                    currentUser={this.props.currentUser}
                    deleteSong={this.props.deleteSong}
                    selectedId={this.props.location.pathname[this.props.location.pathname.length - 1]}
                    playSong={this.props.playSong}
                    pauseSong={this.props.pauseSong}
                    playNewSong={this.props.playNewSong}
                    player={this.props.player}
                    deleteLike={this.props.deleteLike}
                    createLike={this.props.createLike}
                    fetchSongs={this.props.fetchSongs}
                    />
                ))
              }
              <li className="song-index-item final-li"></li>
            </ul>
          </div>
        </div>
        );
      }
  }
}



export default SongIndex;
