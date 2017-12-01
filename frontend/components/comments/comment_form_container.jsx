import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { withRouter } from 'react-router-dom';
import { fetchComments, createComment, deleteComment
} from '../../actions/comment_actions';



const mapStateToProps = (state, ownProps) => {
  let song = state.songs[ownProps.match.params.songId];
  let currentUser = state.session.currentUser;
  return {song, currentUser};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchComments: (songId) => dispatch(fetchComments(songId)),
  createComment: (comment) => dispatch(createComment(comment)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId))
});


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CommentForm));
