import React from 'react';
import merge from 'lodash/merge';
import { Link } from 'react-router-dom';

class SongUpdateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { title: this.props.song.title,
      id: this.props.song.id,
      editMode: this.props.editMode
    };
    this.update = this.update.bind(this);
    this.handleEnterSubmit = this.handleEnterSubmit.bind(this);

    this.handleClickSubmit = this.handleClickSubmit.bind(this);
  }





  update(e){
    e.preventDefault();
    this.setState({ title: e.target.value });
  }

  handleEnterSubmit(e){
    let songIndexEl = document.getElementsByClassName("song-index")[0];
    if (this.state.title.length >= 5) {
    switch (e.keyCode) {
      case 13:
      document.removeEventListener("keydown", this.handleEventSubmit);
      songIndexEl.removeEventListener("click", this.handleClickSubmit);
      this.setState( { editMode: false, errorDisplay: false} );
      let song = { title: this.state.title, id: this.state.id};
      this.props.updateSong(song);
      break;
      default:
        return null;
      }
    }
  }

  componentWillReceiveProps(newProps){
    if (newProps.editMode !== this.state.editMode) {
      this.setState({ editMode: newProps.editMode });
    }


  }

  componentDidUpdate(){
    let editForm = document.getElementsByClassName("edit-form")[0];
    if (editForm) {
      editForm.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    }
  }

  handleClickSubmit(e){
    let songIndexEl = document.getElementsByClassName("song-index")[0];
    if (this.state.title.length >= 5) {
      document.removeEventListener("keydown", this.handleEventSubmit);
      let song = { title: this.state.title, id: this.state.id};
      songIndexEl.removeEventListener("click", this.handleClickSubmit);
      this.setState( { editMode: false} );
      this.props.updateSong(song);
    }
  }

  render(){
    if (!this.state.editMode) {
      return (
        <Link to={`/songs/${this.props.song.id}`}>
        <div className="song-title">
          {this.props.song.title}
        </div>
        </Link>
    );
  } else {
    document.addEventListener("keydown", this.handleEnterSubmit);
    let songIndexEl = document.getElementsByClassName("song-index")[0];
    songIndexEl.addEventListener("click", this.handleClickSubmit);
    return (
      <div className="edit-form-parent">
        <input className="edit-form"
          ref={(input) => {this.titleInput = input; }}
          onChange={this.update}
          value={this.state.title}>

        </input>
        { this.state.title.length < 5 ? "  Title too short" : null}
      </div>
    );
  }
  }
}

export default SongUpdateForm;
