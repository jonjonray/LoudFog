import { connect } from 'react-redux';
import { signin, signout, signup, receiveErrors }
  from '../../actions/session/session_actions';
import NavBar from './navbar';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  signout: () => dispatch(signout())
});

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps)(NavBar));
