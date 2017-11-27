import { connect } from 'react-redux';
import { fetchSongs, createSong } from '../../actions/song_actions';
import SongForm from './song_form';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => ({
  songs: Object.keys(state.songs).map((key) => state.songs[key]),
  currentUser: state.session.currentUser
});


const mapDispatchToProps = (dispatch) => {
  return {
    createSong: (song) => dispatch(createSong(song))
  };
};

export default
  withRouter(
    connect(mapStateToProps,mapDispatchToProps
    )(SongForm));
