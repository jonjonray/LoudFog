import { connect } from 'react-redux';
import { signin, logout, signup, receiveErrors } from '../../actions/session/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state) => {
  let errors = state.errors.session.responseJSON ? state.errors.session.responseJSON : [] ;
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.match.path === "/login" ? "login" : "signup";
  const action = (formType === 'login') ? signin : signup;
  return {
    action: user => dispatch(action(user)),
    formType,
    receiveErrors: (errors) => dispatch(receiveErrors(errors))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
