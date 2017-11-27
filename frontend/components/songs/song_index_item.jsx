import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

class SongIndexItem extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    let _defaultURL =
    "http://wikiclipart.com/wp-content/uploads/2017/05/Music-notes-black-and-white-small-music-notes-clipart-2.jpeg";
    let imageSource = this.props.song.image_url ?
      this.props.song.image_url : _defaultURL;

    let additionalIcons = this.props.user.id === this.props.currentUser.id;

      if (!this.props.user || !this.props.song) {
        return (<div> LOADING </div>);
      } else {
    return (
      <li className="song-index-item">
        <img src={imageSource}
           className="song-image" />
         <div className="play-button">

        </div>
        <div className="credits">
          <div className="song-creator">
            {this.props.user.username}
          </div>
          <div className="song-title">
            {this.props.song.title}
          </div>

          <div className="like-comment-buttons">
            <div className="like">
              <div className="like-icon">
              </div>
            </div>

            <div className="comment">
              <div className="comment-icon">

              </div>

              {
                additionalIcons ? <div className="delete">
                  <div className="delete-icon">
                  </div>
                </div> : null
              }
            </div>
          </div>
      </div>

      </li>
    );
  }
  }
}


export default SongIndexItem;
