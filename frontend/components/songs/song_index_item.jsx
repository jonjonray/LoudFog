import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

class SongIndexItem extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    let _defaultURL = "http://wikiclipart.com/wp-content/uploads/2017/05/Music-notes-black-and-white-small-music-notes-clipart-2.jpeg";
    let imageSource = this.props.song.image_url ?
      this.props.song.image_url : _defaultURL;
    return (
      <li className="song-index-item">
        <img src={imageSource}
           className="song-image" />
         <div className="play-button">

        </div>

        <div className="song-title">
          {this.props.song.title}
        </div>


      </li>
    );
  }
}


export default SongIndexItem;
