import React from "react";
import "./LoginForm.css";

export default class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <form className="login-form">
          <label htmlFor="user-name">User Name</label>
          <input type="text" id="user-name" name="user-name" />
          <br />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <br />
          <button className="login-button">Log In</button>
        </form>
      </div>
    );
  }
}
