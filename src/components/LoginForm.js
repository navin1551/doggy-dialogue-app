import React from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import TokenService from "../services/token-service";

export default class LoginForm extends React.Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  handleSubmitBasicAuth = ev => {
    ev.preventDefault();
    const user_name = ev.target.children[1];
    const password = ev.target.children[4];

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value, password.value)
    );

    user_name.value = "";
    password.value = "";
    this.props.onLoginSuccess();
  };

  handleSubmitJwtAuth = ev => {};

  render() {
    return (
      <div>
        <form className="login-form" onSubmit={this.handleSubmitBasicAuth}>
          <label htmlFor="user-name">User Name</label>
          <input type="text" id="user-name" name="user-name" />
          <br />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <br />
          <Link id="link-register" to={"/register"}>
            <p id="register-link">Register Here</p>
          </Link>
          <button className="login-button">Log In</button>
        </form>
      </div>
    );
  }
}
