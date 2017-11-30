import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Player from './player';
import { playSong, pauseSong } from '../../actions/player_actions';

const mapStateToProps = (state) => {
  const song = state.songs[state.player.songId];
  const playing = state.player.playing;
  return { song, playing };
};


const mapDispatchToProps = dispatch => ({
  playSong: () => dispatch(playSong()),
  pauseSong: () => dispatch(pauseSong())
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Player));
