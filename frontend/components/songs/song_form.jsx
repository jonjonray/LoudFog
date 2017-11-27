import React from 'react';
import merge from 'lodash/merge';

class SongForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      user_id: this.props.currentUser.id,
      audio: null,
      image: null,
      audioFileName: "Choose a song",
      imageFileName: "Choose your artwork"
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.fileName = "Choose a file";
    this.filePlaceholder = this.filePlaceholder.bind(this);
    this.escapeHandle = this.escapeHandle.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e){
    this.setState({title: e.target.value});
  }

  handleUpload(e){
    e.preventDefault();
    const type = e.target.name;
    this.filePlaceholder(e,type);
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    let that = this;
    if (type === "Upload Song") {
      fileReader.onloadend = () => {
        that.setState({ audio: file });
      };
    } else {
      fileReader.onloadend = () => {
        that.setState({ image: file });
    };
  }
    if (file) {
      fileReader.readAsDataURL(file);
    }

}


  handleSubmit(e){
    e.preventDefault();
    const requestData = new FormData();
    requestData.append("song[title]", this.state.title);
    requestData.append("song[user_id]", this.state.user_id);
    requestData.append("song[audio]", this.state.audio);
    requestData.append("song[image]", this.state.image);


    this.props.createSong(requestData);
    this.props.history.goBack();
  }

  filePlaceholder(e, type){
    if (type === "Upload Artwork") {
       this.setState({imageFileName: e.target.value.split( '\\' ).pop()});
    } else {
      this.setState({audioFileName: e.target.value.split( '\\' ).pop()});
    }
  }

  componentDidMount(){
    this.titleInput.focus();
    document.addEventListener("keydown", this.escapeHandle);
  }

  escapeHandle(event){
    switch ( event.keyCode ) {
      case 27:
        this.props.history.goBack();
        break;
      default:
        break;
    }
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.escapeHandle);
  }

  render(){
    return (
      <div className="song-modal">
        <div onClick={ e => this.props.history.goBack()}
            className="song-modal-shade">

        </div>
        <form onSubmit={this.handleSubmit}
          className="song-form-body song-modal-form">
          <div className="song-form-header">
            Upload to LoudFog
          </div>
          <input type="text"
                ref={(input) => {this.titleInput = input; }}
                onChange={this.updateTitle}
                value={this.state.title}
                className="title-input"
                placeholder="Title"
                />

              <label>{this.state.audioFileName}
          <input type="file"
            name="Upload Song"
            className="file-input"
            onChange={this.handleUpload}
            />
          </label>

          <label>{this.state.imageFileName}
          <input type="file"
            name="Upload Artwork"
            className="file-input"
            onChange={this.handleUpload}
            />
          </label>
          <input type="submit"
            className="song-form-submit"
            value="Upload" />
        </form>
      </div>
      );
  }
}

export default SongForm;
