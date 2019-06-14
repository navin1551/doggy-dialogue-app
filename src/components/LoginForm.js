import React from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import TokenService from "../services/token-service";
import AuthApiService from "../services/auth-api-service";

export default class LoginForm extends React.Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = { error: null };

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

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    const user_name = ev.target.children[1];
    const password = ev.target.children[4];

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
        window.location = "/forums";
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <div className="login-form-area">
        <form className="login-form" onSubmit={this.handleSubmitJwtAuth}>
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
