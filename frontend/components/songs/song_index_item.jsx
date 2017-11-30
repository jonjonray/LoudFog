import React from 'react';
import { Link } from 'react-router-dom';
import SongUpdateFormContainer from './song_update_form_container';
import SongDeletePrompt from './song_delete_prompt';
class SongIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = { editMode: false, deleteMode: false };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);

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

  handleEdit(e){
    this.setState( { deleteMode: false });
    this.setState( { editMode: true });
  }

  handleDelete(e){
    this.setState( { deleteMode: true});
  }

  componentWillReceiveProps(newProps){
    this.setState( { editMode: false});
    this.setState( { deleteMode: false });
  }


  render(){

    let imageSource = this.props.song.image_url;
    let that = this;
    let button;
    if ((this.props.player.songId !== this.props.song.id ) ||
    (this.props.player.songId === this.props.song.id && !this.props.player.playing) ) {
      button =  (
        <div className="play-button"
              onClick={this.handlePlay}>
        </div>
      );
    } else {
      button = (
        <div className="pause-button"
            onClick={this.handlePause}>
        </div>
      );
    }



      if (!this.props.user || !this.props.song) {
        return (<div> LOADING </div>);
      } else {
    return (
      <li className={"song-index-item" + (this.props.selectedId === `${this.props.song.id}` ?
                    " selected" : "")}>


      <SongDeletePrompt song={this.props.song}
        deleteSong={this.props.deleteSong}
        deleteMode={this.state.deleteMode} />

        <div className="song-image-parent">
        <img src={imageSource}
           className="song-image" />
         </div>
         { button }
        <div className="credits">
          <div className="song-creator">
            {this.props.user.username}
          </div>

          <SongUpdateFormContainer editMode={this.state.editMode}
            song={this.props.song} />


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
                     onClick={this.handleDelete}>
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
