import React from 'react';
import merge from 'lodash/merge';

class SongUpdateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { title: this.props.song.title, id: this.props.song.id};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    console.log("mounted");

    document.addEventListener("keydown", this.handleSubmit);
  }

  update(e){
    e.preventDefault();
    this.setState({ title: e.target.value });
  }

  handleSubmit(e){
    switch (e.keyCode) {
      case 13:
      document.removeEventListener("keydown", this.handleSubmit);
      this.props.updateSong(this.state);
      break;
      default:
        return null;
    }
  }

  render(){
    return (<input className="edit-form"
        onChange={this.update}
        value={this.state.title}></input>
    );
  }
}

export default SongUpdateForm;
