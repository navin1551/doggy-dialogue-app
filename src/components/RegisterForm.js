import React from "react";
import "./RegisterForm.css";

export default class RegisterForm extends React.Component {
  render() {
    return (
      <form className="registration-form">
        <label htmlFor="full-name">Full Name:</label>
        <input type="text" id="full-name" name="full-name" />
        <br />
        <br />
        <label htmlFor="user-name">User Name:</label>
        <input type="text" id="register-user-name" name="user-name" />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="register-password" name="password" />
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <br />
        <button className="sign-up-button">Sign up</button>
      </form>
    );
  }
}
