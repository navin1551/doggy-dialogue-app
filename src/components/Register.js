import React from "react";
import RegisterForm from "./RegisterForm";
import "./Register.css";

export default class Register extends React.Component {
  render() {
    return (
      <div className="register-area">
        <div className="register-header-area">
          <h2 className="register-header">Sign up for full doggy access!</h2>
        </div>
        <RegisterForm />
        <p>
          By hitting the sign up button you agree to all terms and agreements of
          the site including our rules below:
          <br />
          <br />
          - No harrassement or bullying of other Doggy Dialogue members
          <br />
          <br />
          - No negative comments about any dogs or dogs in general. Rule will
          strictly be enforced!
          <br />
          <br />
          - No posting of false information (especially in the doggy health
          forum!!!)
          <br />
          <br />
          - No posts about cats, birds, fishes or anything other weirdos
          <br />
          <br />
          - Administrator has the right to edit all posted content and remove
          any user who violates stated rules
          <br />
        </p>
      </div>
    );
  }
}
