import React from 'react';
import CommentIndexItem from './comment_index_item';


class CommentIndex extends React.Component {
  constructor(props){
    super(props);
  }


  render(){

    return (
      <ul className="comment-index">
        {
          this.props.comments.map((comment,idx) => (
            <CommentIndexItem key={idx}
              comment={comment}
              user={this.props.users[comment.user_id]} />
          ))

        }
      </ul>
      );
  }
}

export default CommentIndex;
