import React from "react";
import "./RegisterForm.css";
import AuthApiService from "../services/auth-api-service";

export default class RegisterForm extends React.Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  state = { error: null };

  handleSubmit = ev => {
    ev.preventDefault();
    //const { user_name, password } = ev.target;
    const user_name = ev.target.children[1];
    const password = ev.target.children[4];
    this.setState({ error: null });
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value
    })
      .then(user => {
        user_name.value = "";
        password.value = "";
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="registration-form">
        <label className="register-label" htmlFor="user-name">
          User Name:
        </label>
        <input type="text" id="register-user-name" name="user-name" />
        <br />
        <br />
        <label className="register-label" htmlFor="password">
          Password:
        </label>
        <input type="password" id="register-password" name="password" />
        <br />
        <br />
        <button className="sign-up-button">Sign up</button>
      </form>
    );
  }
}
