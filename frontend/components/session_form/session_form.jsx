import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    if (props.match.path === "/login") {
      this.state = {user: {username: "", password: ""}, errors: []};
    } else {
      this.state = {user: {username: "", password: "", email: ""}, errors: []};
    }
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  update(field) {
    return e => this.setState({
      user: {[field]: e.currentTarget.value
    }});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state.user);
  }

  renderErrors() {
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  clearErrors() {
    this.props.errors = [];
  }

  componentDidMount(){
    this.clearErrors();
  }

  render(){
    let formName = this.props.match.path === "/login" ? "Log In" : "Sign Up";
    return (
      <div className="modal">
      <Link to={"/"} className="exit-button">
        <div className="modal-shade">
        </div>
      </Link>


        <div className="modal-form">
          <form onSubmit={this.handleSubmit}>

            {this.renderErrors()}

              <input type="text"
                className="auth-input"
                onChange={this.update("username")}
                value={this.state.username}
                placeholder="Username" />

              {
               (formName === "Sign Up") ?
                  <input type="text"
                    className="auth-input"
                    onChange={this.update("email")}
                    value={this.state.email}
                    placeholder="Email" />
              : null
            }

              <input type="password"
                onChange={this.update("password")}
                value={this.state.password}
                className="auth-input"
                placeholder="Password" />

            <input type="submit"
               value={formName}
               className="auth-submit" />
          </form>
        </div>
    </div>
    );
  }
}

export default SessionForm;
