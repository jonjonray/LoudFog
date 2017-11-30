import { connect } from 'react-redux';
import { fetchSongs, deleteSong } from '../../actions/song_actions';
import SongIndex from './song_index';
import { withRouter } from 'react-router-dom';
import { fetchUsers } from '../../actions/user_actions';
import { playSong, pauseSong, playNewSong } from '../../actions/player_actions';

const mapStateToProps = (state) => {
  let songs = Object.keys(state.songs).map((key) => state.songs[key]);
  let users = state.users;
  let currentUser = state.session.currentUser;
  let player = state.player;
  return { songs, users, currentUser, player};
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchSongs: () => dispatch(fetchSongs()),
    fetchUsers: () => dispatch(fetchUsers()),
    deleteSong: (id) => dispatch(deleteSong(id)),
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong()),
    playNewSong: (id) => dispatch(playNewSong(id))
  };
};

export default
  withRouter(connect(mapStateToProps,mapDispatchToProps)(SongIndex));
