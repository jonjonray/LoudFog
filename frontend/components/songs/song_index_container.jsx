import { connect } from 'react-redux';
import {signin, signout, signup, receiveErrors}
  from '../../actions/session/session_actions';
import SongIndex from './song_index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({});


const mapDispatchToProps = (dispatch) => {
  return { signout: () => dispatch( signout()) };
};

export default
  withRouter(connect(mapStateToProps,mapDispatchToProps)(SongIndex));
