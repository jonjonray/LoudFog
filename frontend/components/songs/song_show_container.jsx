import { connect } from 'react-redux';
import { fetchSongs, deleteSong } from '../../actions/song_actions';
import SongShow from './song_show';
import { withRouter } from 'react-router-dom';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  let song = state.songs[ownProps.match.params.songId];
  let user = state.user;
  let currentUser = state.session.currentUser;
  return { song, user, currentUser};
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchSongs: () => dispatch(fetchSongs()),
    fetchUsers: () => dispatch(fetchUsers()),
    deleteSong: (id) => dispatch(deleteSong(id))
  };
};

export default
  withRouter(connect(mapStateToProps,mapDispatchToProps)(SongShow));
