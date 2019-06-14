import React from "react";
import RegisterForm from "./RegisterForm";
import "./Register.css";

export default class Register extends React.Component {
  render() {
    return (
      <div className="register-area">
        <div className="register-header-area">
          <h2 className="register-header">Register</h2>
        </div>
        <RegisterForm />
        <p className="register-terms">
          By hitting the sign up button you agree to all terms and agreements of
          the site including our rules below:
          <br />
          <br />
          - No harrassement or bullying of other forum members
          <br />
          <br />
          - No negative comments about any dogs or dogs in general.
          <br />
          <br />
          - No posting of false information
          <br />
          <br />
          - Administrator has the right to edit all posted content and remove
          any user who violates stated rules
          <br />
          <br />
          -Please use the forum responsibly
        </p>
      </div>
    );
  }
}
