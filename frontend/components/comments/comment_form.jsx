import React from 'react';


class CommentForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {body: "",
      user_id: this.props.currentUser.id,
      song_id: this.props.song.id};

      this.handleEnterSubmit = this.handleEnterSubmit.bind(this);
      this.update = this.update.bind(this);
  }

  update(e){
    e.preventDefault();
    this.setState({ body: e.target.value });

  }

  handleEnterSubmit(e){
    switch (e.keyCode) {
      case 13:
      if (this.state.body.length >= 1) {
        document.removeEventListener("keydown", this.handleEnterSubmit);
        this.props.createComment(this.state);
        this.setState({body: ""});
      }
      break;
      case 27:
        document.removeEventListener("keydown", this.handleEnterSubmit);
        this.setState({body: ""});
        break;
      }
    }



  componentDidUpdate(){
    if (this.state.body !== "") {
      document.addEventListener("keydown", this.handleEnterSubmit);
    }
  }

  componentWillReceiveProps(newProps){
    if (this.props.match.params.songId !== newProps.match.params.songId) {
      this.setState({song_id: newProps.match.params.songId});
    }
  }



  render(){
    return (
      <input className="comment-form"
          onChange={this.update}
          value={this.state.body}
          placeholder="Write a comment">

      </input>
    );
  }
}

export default CommentForm;
