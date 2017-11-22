import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state) => {
  return {
    loggedIn: false,
    errors: []
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
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
