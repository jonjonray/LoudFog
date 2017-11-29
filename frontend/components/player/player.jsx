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
    this.handleStop = this.handleStop.bind(this);
    this.state = { playing: false };

  }

  handlePlay(e){
    let player = this.rap.audioEl;
    this.setState({ playing: true });
    player.play();

  }

  handlePause(e){
    let player = this.rap.audioEl;
    this.setState({ playing: false });
    player.pause();
  }

  handleStop(e){
    let player = this.rap.audioEl;
    this.setState({ playing: false });
    player.currentTime = 0;
    player.pause();
  }

  render(){
    let playPause;
    if (!this.state.playing) {
      playPause = (<div className="player-play-button"
          onClick={this.handlePlay}>
      </div>);
    } else {
      playPause = (<div className="player-pause-button"
          onClick={this.handlePause}>
      </div>);
    }


    return (
      <div className="audio-player">
        <div className="audio-player-contents">

          { playPause }
          <div className="player-stop-button"
                onClick={this.handleStop}>

          </div>

          <ReactAudioPlayer
            ref={(element) => { this.rap = element; }}
            src="https://s3-us-west-1.amazonaws.com/loudfog/songs/audios/000/000/043/original/12.mp3"
          />
        </div>
      </div>
    );
  }
}

export default Player;
