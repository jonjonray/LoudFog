import React from 'react';
import { Link } from 'react-router-dom';
import SongIndexItem from '../songs/song_index_item';


class UserShow extends React.Component {
  constructor(props){
    super(props);
    this.state = { likeMode: false };
  }

  render(){
    let avatar;
    if (this.props.user.avatar_url) {
      avatar = this.props.user.avatar_url;
    } else {
      avatar = "https://s3-us-west-1.amazonaws.com/loudfog/default_avatar.jpg";
    }

    let list;
    if (!this.state.likeMode) {
        list = (
          <ul className="user-show-song-list">
        {
          this.props.songs.map((song) => (
            <SongIndexItem song={song}
              user={this.props.user}
              key={song.title}
              currentUser={this.props.currentUser}
              deleteSong={this.props.deleteSong}
              selectedId={-1}
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
      </ul>
    );
  } else {
    list = (
      <ul className="user-show-song-list">
    {
      this.props.liked.map((song) => (
        <SongIndexItem song={song}
          user={this.props.user}
          key={song.title}
          currentUser={this.props.currentUser}
          deleteSong={this.props.deleteSong}
          selectedId={-1}
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
  </ul>
);
  }



    return (
      <div className="user-show">
        <div className="user-show-body">
          <div className="user-show-header-parent">
            <div className="user-show-header">
              <div className="user-show-avatar-parent">
                <img className="user-show-avatar"
                  src={avatar} />
              </div>
              <div className="user-show-username">
                {`${ this.props.user.username}`}
              </div>
            </div>
          </div>
          <div className="user-show-feed-switch">
            <div className={`user-show-song-option ${!this.state.likeMode ? "selected-switch" : null }`}
                  onClick={ e => this.setState({likeMode: false})}>
                  Songs
            </div>
            <div className={`user-show-liked-option ${this.state.likeMode ? "selected-switch" : null }`}
              onClick={ e => this.setState({likeMode: true}) }>
              Liked
            </div>
          </div>
          { list }

        </div>
      </div>
    );
  }
}


export default UserShow;
