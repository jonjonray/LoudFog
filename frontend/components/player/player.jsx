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
    this.handleVolume = this.handleVolume.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
    this.state = { playing: false, volume: 1, currentTime: 0 };

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
    this.setState({ playing: false, currentTime: 0 });
    player.currentTime = 0;
    player.pause();
  }

  handleVolume(e){
    let player = this.rap.audioEl;
    player.volume = e.target.value;
    this.setState( { volume: e.target.volume } );

  }

  handleProgress(e){
    let player = this.rap.audioEl;
    let percentage = player.currentTime / player.duration;
    this.setState({ currentTime: percentage });

  }

  timeExpression(seconds){

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
          <div className="player-progress-wrapper">

            <div className="progress-slider-parent">
              <progress id="progress-slider"
                max="1"
                value={this.state.currentTime}
            
                 />
            </div>

        </div>
          <div className="player-volume-button-wrapper">
          <div className="player-volume-button">
            <div className="volume-slider-parent">
              <input id="volume-slider"
                type="range"
                min="0"
                max="1"
                onChange={this.handleVolume}
                step="0.1" />
            </div>
          </div>
        </div>
          <ReactAudioPlayer
            ref={(element) => { this.rap = element; }}
            src="https://s3-us-west-1.amazonaws.com/loudfog/songs/audios/000/000/043/original/12.mp3"
            listenInterval={50}
            onListen={this.handleProgress}
          />
        </div>
      </div>
    );
  }
}

export default Player;
