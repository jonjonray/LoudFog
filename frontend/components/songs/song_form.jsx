import React from 'react';

class SongForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      user_id: this.props.currentUser.id,
      audio: null
    };
  }

  updateTitle(e){

  }

  handleSubmit(e){
    e.preventDefault();
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title
              <input type="text"
                onChange={this.updateTitle}
                />
          </label>

          <input type="file"
            name="Upload Song"/>

          <input type="submit" />
        </form>
      </div>
      );
  }
}

export default SongForm;
