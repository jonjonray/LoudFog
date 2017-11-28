import React from 'react';


class Player extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="audio-player">

        <div className="player-play-button">

        </div>


        <div className="player-progress-bar">

        </div>

        <div className="player-volume-button">

        </div>
      </div>
    );
  }
}

export default Player;
