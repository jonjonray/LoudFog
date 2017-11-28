import { connect } from 'react-redux';
import { fetchSongs, createSong } from '../../actions/song_actions';
import SongForm from './song_form';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => {
let errors = state.errors.songs.responseJSON ?
  state.errors.songs.responseJSON : [] ;

  if (state.errors.songs.responseText && !state.errors.songs.responseJSON ) {
    errors.push("File(s) Missing/Incorrect Format");
  }

  return {
    songs: Object.keys(state.songs).map((key) => state.songs[key]),
    currentUser: state.session.currentUser,
    errors
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    createSong: (song) => dispatch(createSong(song))
  };
};

export default
  withRouter(
    connect(mapStateToProps,mapDispatchToProps
    )(SongForm));
