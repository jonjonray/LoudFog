import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

class SongIndexItem extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return (
      <li>
        {this.props.song.title}
        <ReactAudioPlayer src={this.props.song.audio_url}
          controls />
      </li>
    );
  }
}


export default SongIndexItem;
