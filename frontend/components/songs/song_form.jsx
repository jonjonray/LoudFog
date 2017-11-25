import React from 'react';
import merge from 'lodash/merge';

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
    this.escapeHandle = this.escapeHandle.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e){
    this.setState({title: e.target.value});
  }

  handleUpload(e){
    e.preventDefault();
    this.filePlaceholder(e);
    const audio = e.currentTarget.files[0];
    const fileReader = new FileReader();
    let that = this;
    fileReader.onloadend = () => {
      that.setState({ audio });
    };
 
    if (audio) {
      fileReader.readAsDataURL(audio);
    }
  }


  handleSubmit(e){
    e.preventDefault();
    debugger;
  }

  filePlaceholder(e){
     this.setState({fileName: e.target.value.split( '\\' ).pop()});
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

              <label>{this.state.fileName}
          <input type="file"
            name="Upload Song"
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
