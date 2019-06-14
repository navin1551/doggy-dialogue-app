import React from "react";
import "./RegisterForm.css";
import AuthApiService from "../services/auth-api-service";

export default class RegisterForm extends React.Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  state = { error: null };

  handleSubmit = e => {
    e.preventDefault();
    //const { user_name, password } = e.target;
    console.log(e.target.children);
    const user_name = e.target.children[1];
    const password = e.target.children[5];
    this.setState({ error: null });
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value
    })
      .then(user => {
        user_name.value = "";
        password.value = "";
        this.props.onRegistrationSuccess();
        window.location = "/forums";
        alert("Account created, please login");
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
        <p className="password-rules">
          - Password must be between 8 and 72 characters login
          <br />
          - Password cannot begin or end with empty spaces
          <br />- Password must contain 1 upper case, 1 lower case, a number and
          a special character
        </p>
        <button className="sign-up-button">Sign up</button>
      </form>
    );
  }
}
