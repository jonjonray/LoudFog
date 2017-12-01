import { connect } from 'react-redux';
import { fetchSongs, deleteSong, fetchSong } from '../../actions/song_actions';
import SongIndex from './song_index';
import { withRouter } from 'react-router-dom';
import { fetchUsers } from '../../actions/user_actions';
import { playSong, pauseSong, playNewSong } from '../../actions/player_actions';
import { deleteLike, createLike } from '../../actions/like_actions';

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
    playNewSong: (id) => dispatch(playNewSong(id)),
    fetchSong: (id) => dispatch(fetchSong(id)),
    deleteLike: (like) => dispatch(deleteLike(like)),
    createLike: (like) => dispatch(createLike(like))
  };
};

export default
  withRouter(connect(mapStateToProps,mapDispatchToProps)(SongIndex));
