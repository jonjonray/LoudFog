import { connect } from 'react-redux';
import { fetchSongs, deleteSong } from '../../actions/song_actions';
import SongIndex from './song_index';
import { withRouter } from 'react-router-dom';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  let songs = Object.keys(state.songs).map((key) => state.songs[key]);
  let users = state.users;
  let currentUser = state.session.currentUser;
  return { songs, users, currentUser};
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchSongs: () => dispatch(fetchSongs()),
    fetchUsers: () => dispatch(fetchUsers()),
    deleteSong: (id) => dispatch(deleteSong(id))
  };
};

export default
  withRouter(connect(mapStateToProps,mapDispatchToProps)(SongIndex));
