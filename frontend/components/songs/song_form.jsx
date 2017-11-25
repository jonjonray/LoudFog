import React from 'react';

class SongForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      user_id: this.props.currentUser.id,
      audio: null,
      fileName: "Choose a file"
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.fileName = "Choose a file";
    this.filePlaceholder = this.filePlaceholder.bind(this);
  }

  updateTitle(e){
    this.setState({title: e.target.value});
  }

  handleUpload(){

  }

  handleSubmit(e){
    e.preventDefault();
  }

  filePlaceholder(e){
     this.setState({fileName: e.target.value.split( '\\' ).pop()});
  }

  render(){
    return (
      <div className="modal">
        <div className="modal-shade">

        </div>
        <form onSubmit={this.handleSubmit}
          className="song-form-body modal-form">
          <div className="song-form-header">
            Upload to LoudFog
          </div>
          <input type="text"
                onChange={this.updateTitle}
                value={this.state.title}
                className="title-input"
                placeholder="Title"
                />

              <label>{this.state.fileName}
          <input type="file"
            name="Upload Song"
            className="file-input"
            onChange={this.filePlaceholder}
            />
          </label>
          <input type="submit"
            className="song-form-submit"
            value="Upload"/>
        </form>
      </div>
      );
  }
}

export default SongForm;
