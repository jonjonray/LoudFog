import React from 'react';
import ReactAudioPlayer from 'react-audio-player';


class Player extends React.Component {
  constructor(props){
    super(props);
    let song = { title: "", image_url: "", audio_url: "", id: ""};
    if (this.props.song) {
      song = this.props.song;
    }
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
    this.state = { playing: this.props.playing,
      volume: 1, currentTime: 0, song };

  }

  handlePlay(e){
    if (this.props.song) {
      this.props.playSong();
    }
  }

  handlePause(e){
    if (this.props.song) {
      this.props.pauseSong();
    }
  }

  handleStop(e){
    let player = this.rap.audioEl;
    if (this.props.song) {
      this.setState({ currentTime: 0 });
      this.props.pauseSong();
      player.currentTime = 0;
    }
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

  componentWillReceiveProps(newProps){
    let song = { title: "", image_url: "", audio_url: "", id: ""};
    if (newProps.song) {
      song = newProps.song;
    }
    this.setState({playing: newProps.playing, song});
  }

  timeExpression(seconds){

  }

  componentDidUpdate(){
    if (this.rap) {

      let player = this.rap.audioEl;
      if (this.state.playing) {
        player.play();
      } else {
        player.pause();
      }
    }
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

    if (this.state.song.title === "") {
      return null;
    } else {
    return (
      <div className="audio-player animated fadeInUp">
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
            <div className="volume-slider-parent animated fadeInUp">
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
            src={this.state.song.audio_url}
            listenInterval={50}
            onListen={this.handleProgress}
          />
        </div>
      </div>
      );
    }
  }
}

export default Player;
