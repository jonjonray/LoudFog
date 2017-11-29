import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
// <div className="player-play-button">
//
// </div>
//
//
// <div className="player-progress-bar">
//
// </div>
//
// <div className="player-volume-button">
//
// </div>

class Player extends React.Component {
  constructor(props){
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);

  }

  handlePlay(e){
    let player = this.rap.audioEl;
    player.play();
    // let volume = player.volume / 1;
    // let volumeMeter =
  }

  handlePause(e){
    let player = this.rap.audioEl;
  }

  render(){
    return (
      <div className="audio-player">
        <div className="audio-player-contents">
          <div className="player-play-button"
              onClick={this.handlePlay}>
          </div>
          <ReactAudioPlayer
            ref={(element) => { this.rap = element; }}
            src="https://s3-us-west-1.amazonaws.com/loudfog/songs/audios/000/000/004/original/4.mp3"
          />
        </div>
      </div>
    );
  }
}

export default Player;
