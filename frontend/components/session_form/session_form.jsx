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
    let formName = this.props.match.path === "/login" ? "Login" : "Sign Up";
    return (
      <div className="modal">
        <div className="modal-shade">
        </div>

        <div className="modal-form">
          <form onSubmit={this.handleSubmit}>
            <label>Username
              <input type="text"
                className="auth-input"
                onChange={this.update("username")}
                value={this.state.username} />
            </label>

              {
               (formName === "Sign Up") ?
                <label>Email
                  <input type="text"
                    className="auth-input"
                    onChange={this.update("email")}
                    value={this.state.email} />
                </label>
              : null
            }

            <label>Password
              <input type="password"
                className="auth-input"
                onChange={this.update("password")}
                value={this.state.password} />
            </label>

            <input type="submit" value={formName} />
          </form>
        </div>
    </div>
    );
  }
}

export default SessionForm;
