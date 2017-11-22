import { connect } from 'react-redux';
import { signin, logout, signup } from '../../actions/session/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.match.path === "/login" ? "login" : "signup";
  const action = (formType === 'login') ? signin : signup;
  return {
    action: user => dispatch(action(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
