import React from 'react';
import { Link } from 'react-router-dom';
import SongUpdateFormContainer from './song_update_form_container';

class SongIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = { editMode: false };
    this.handleEdit = this.handleEdit.bind(this);

  }



  handleEdit(e){
    console.log(this.state.editMode);
    this.setState( { editMode: true }, () => console.log(this.state.editMode));
  }

  componentWillReceiveProps(newProps){
    this.setState( { editMode: false});
  }


  render(){
    let imageSource = this.props.song.image_url;
    let that = this;


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
