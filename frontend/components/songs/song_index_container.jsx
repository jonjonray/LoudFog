import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import SongIndex from './song_index';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => {
  let songs = Object.keys(state.songs).map((key) => state.songs[key]);
  return { songs };
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchSongs
  };
};

export default
  withRouter(connect(mapStateToProps,mapDispatchToProps)(SongIndex));
