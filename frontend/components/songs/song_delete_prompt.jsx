import React from 'react';


class SongDeletePrompt extends React.Component {
  constructor(props){
    super(props);
    this.state = { deleteMode: false};
    this.handleEscape = this.handleEscape.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(){
    this.props.deleteSong(this.props.song.id);


  }

  handleEscape(){
    this.setState({ deleteMode: false });
  }

  componentWillReceiveProps(newProps){
    this.setState( { deleteMode: newProps.deleteMode });
  }

  render(){
    if (!this.state.deleteMode) {
      return null;
    }else {
    return (
      <div className="delete-modal">
        <div className="delete-modal-shade">

        </div>

        <div className="delete-modal-options">
          <div className="delete-modal-title">
            Are you sure you want to delete:
             <div className="delete-song-name">
            {this.props.song.title}?
            </div>
          </div>

          <div className="button-options">
            <button className="option-delete-button"
              onClick={this.handleDelete}>
              DELETE
            </button>

            <button className="option-cancel-button"
              onClick={this.handleEscape}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
  }
}

export default SongDeletePrompt;
