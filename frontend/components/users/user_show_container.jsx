import { connect } from 'react-redux';
import { fetchSongs, deleteSong, fetchSong } from '../../actions/song_actions';
import UserShow from './user_show';
import { withRouter } from 'react-router-dom';
import { fetchUsers } from '../../actions/user_actions';
import { playSong, pauseSong, playNewSong } from '../../actions/player_actions';


const mapStateToProps = (state, ownProps) => {
  let currentUser = state.session.currentUser;
  let user = state.users[ownProps.match.params.userId] ?
   state.users[ownProps.match.params.userId] : { username: "", id: ""};
  let songs = Object.keys(state.songs).map((key) =>
   state.songs[key]).filter(song => song.user_id === user.id);
  let liked = [];
  if (user.username !== "") {
    user.likes.forEach((like) => liked.push(state.songs[like]));
  }
  let player = state.player;
  return { songs, user, currentUser, player, liked};
};


const mapDispatchToProps = (dispatch) => {
  return {
    deleteSong: (id) => dispatch(deleteSong(id)),
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong()),
    playNewSong: (id) => dispatch(playNewSong(id)),
    fetchSongs: () => dispatch(fetchSongs())
  };
};

export default
  withRouter(connect(mapStateToProps,mapDispatchToProps)(UserShow));
