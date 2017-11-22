import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    if (props.match.path === "/login") {
      this.state = {username: "", password: ""};
    } else {
      this.state = {username: "", password: "", email: ""};
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action({user: this.state});
  }

  render(){
    let text = this.props.match.path === "/login" ? "Login" : "Signup";
    return (
      <div className="modal">
        <div className="modal-shade">
        </div>

        <div className="modal-form">

        </div>
    </div>
    );
  }
}

export default SessionForm;
