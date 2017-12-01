import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndexItem extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    if (!this.props.user || !this.props.comment) {
      return (<div> LOADING</div>);
    } else {
    return (
      <li className="comment-index-item">
      <Link to={`/songs/users/${this.props.user.id}`}>
        <div className="comment-index-item-username">
          {this.props.user.username}
        </div>
      </Link>
        <div className="comment-index-item-body">
          {this.props.comment.body}
        </div>
      </li>
    );
  }
}
}

export default CommentIndexItem;
