import { connect } from 'react-redux';
import { fetchSongs, deleteSong } from '../../actions/song_actions';
import SongShow from './song_show';
import { withRouter } from 'react-router-dom';
import { fetchUsers } from '../../actions/user_actions';
import { playSong, pauseSong, playNewSong } from '../../actions/player_actions';


const mapStateToProps = (state, ownProps) => {
  let song = state.songs[ownProps.match.params.songId];
  let users = state.users;
  let currentUser = state.session.currentUser;
  let player = state.player;
  return { song, users, currentUser, player};
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
  withRouter(connect(mapStateToProps,mapDispatchToProps)(SongShow));
