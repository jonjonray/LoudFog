import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';


class SongShow extends React.Component {
  constructor(props){
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  componentWillMount(){
    // this.props.fetchUsers();
    // this.props.fetchSongs();
  }

  handlePlay(e){
    if (this.props.song.id === this.props.player.songId ) {
      this.props.playSong();
    } else {
      this.props.playNewSong(this.props.song.id);
    }
  }

  handlePause(e){
    this.props.pauseSong();
  }

  render(){



    if (!this.props.song) {
      return (<div> LOADING </div>);
    } else {
      let button;

      if ((this.props.player.songId !== this.props.song.id ) ||
      (this.props.player.songId === this.props.song.id && !this.props.player.playing) ) {
        button =  (
          <div className="song-show-play-button"
                onClick={this.handlePlay}>
          </div>
        );
      } else {
        button = (
          <div className="song-show-pause-button"
              onClick={this.handlePause}>
          </div>
        );
      }
    return (
      <div className="song-show">
        <div className="song-show-body">
        <div className="song-show-header-parent">
        <div className="song-show-header">
          <div className="song-show-header-left">
            <div className="song-show-top-left">

            { button }
            <div className="song-show-text">
              <div className="song-show-username">
                {this.props.users[this.props.song.user_id] ?
                  this.props.users[this.props.song.user_id].username :
                  null
                }
            </div>
              <div className="song-show-title">
                {this.props.song.title}
              </div>
            </div>
          </div>
        </div>
          <div className="song-show-header-right">
            <img src={this.props.song.image_url} />
          </div>


        </div>
        </div>
        </div>
      </div>
      );
    }
  }
}

export default SongShow;
