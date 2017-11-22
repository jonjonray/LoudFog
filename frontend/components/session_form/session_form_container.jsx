import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.match.path === "/login" ? "login" : "signup";
  const action = (formType === 'login') ? login : signup;
  return {
    action: user => dispatch(action(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
