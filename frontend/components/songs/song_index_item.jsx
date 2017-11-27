import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import SongUpdateFormContainer from './song_update_form_container';
class SongIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = { editMode: false };
  }

  handleEdit(e){
    this.setState( { editMode: true } );
  }

  componentDidMount() {
    this.setState( { editMode: false });
  }
  render(){

    let _defaultURL =
    "http://wikiclipart.com/wp-content/uploads/2017/05/Music-notes-black-and-white-small-music-notes-clipart-2.jpeg";
    let imageSource = this.props.song.image_url ?
      this.props.song.image_url : _defaultURL;
    let that = this;
    let title;
    if (this.state.editMode) {
      title = <SongUpdateFormContainer song={this.props.song} />;
    } else {
      title = (
        <div className="song-title">
        {this.props.song.title}
      </div>
    );
    }


      if (!this.props.user || !this.props.song) {
        return (<div> LOADING </div>);
      } else {
    return (
      <li className="song-index-item">
        <div className="song-image-parent">
        <img src={imageSource}
           className="song-image" />
         </div>
         <div className="play-button">

        </div>
        <div className="credits">
          <div className="song-creator">
            {this.props.user.username}
          </div>


          <div className="like-comment-buttons">
            <div className="like">
              <div className="like-icon">
              </div>
            </div>

            <div className="comment">
              <div className="comment-icon">

              </div>
            </div>

              {
                this.props.user.id === this.props.currentUser.id ?
                <div className="delete"
                     onClick={(e) => {
                       return (that.props.deleteSong(that.props.song.id));
                     }} >
                  <div className="delete-icon">
                  </div>
                </div>
                    : <div className="empty"></div>
              }

              {
                this.props.user.id === this.props.currentUser.id ?
                <div className="edit"
                  onClick={this.handleEdit}>
                  <div className="edit-icon">
                  </div>
                </div>
                : <div className="empty"></div>
              }

            </div>
          </div>


      </li>
    );
  }
  }
}


export default SongIndexItem;
