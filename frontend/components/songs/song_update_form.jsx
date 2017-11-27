import React from 'react';
import merge from 'lodash/merge';

class SongUpdateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { title: this.props.title, id: this.props.id};
    this.update = this.update.bind(this);
  }

  componentDidMount(){
    document.addEventListener("onclick", this.handleSubmit);
  }

  update(e){
    this.setState({ title: e.target.value });
  }

  handleSubmit(e){
    document.removeEventListener("onclick", this.handleSubmit);
    this.props.updateSong(this.state);
  }

  render(){
    return (<input className="edit-form"
        onChange={this.update}
        value={this.state.title}></input>
    );
  }
}

export default SongUpdateForm;
