import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { withRouter } from 'react-router-dom';
import { fetchComments, createComment, deleteComment
} from '../../actions/comment_actions';


const mapStateToProps = (state, ownProps) => {
  let song = state.songs[ownProps.match.params.songId];
  let users = state.users;
  let currentUser = state.session.currentUser;
  let comments = Object.keys(state.comments).map((key) => state.comments[key]);
  let filteredComments = comments.filter((comment) => song ? comment.song_id === song.id : false);
  return { song, users, currentUser, comments: filteredComments};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchComments: (songId) => dispatch(fetchComments(songId)),
  createComment: (comment) => dispatch(createComment(comment)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId))
});


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CommentIndex));
