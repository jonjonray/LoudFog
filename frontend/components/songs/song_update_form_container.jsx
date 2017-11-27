import { connect } from 'react-redux';
import { fetchSongs, updateSong } from '../../actions/song_actions';
import SongUpdateForm from './song_update_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({});


const mapDispatchToProps = (dispatch) => {
  return {
    updateSong: (song) => dispatch(updateSong(song))
  };
};

export default
  withRouter(
    connect(mapStateToProps,mapDispatchToProps
    )(SongUpdateForm));
