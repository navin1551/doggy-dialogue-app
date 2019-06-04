import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

export default class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <div className="about-us-header-area">
          <h2 className="about-us-header">About Us</h2>
        </div>
        <div className="about-us-content">
          <p>
            Who are we at Doggy Dialogue? We are a group of people who love dogs
            and want to establish an active community of dog lovers in the
            spirit of exchanging information, fun facts and just general doggy
            information.
          </p>

          <p>
            We LOVE everything doggy related and encourage all with the same
            passion to register to our site to get fully doggy access to all the
            content of our site. We offer an active, well moderated community of
            dog lovers with various forums to post questions in and get answers
            to various common and not so common dog related issues. SIGN UP
            BELOW!!!
          </p>
        </div>

        <Link to={"/register"}>
          <h3 className="sign-up-span">Sign up HERE</h3>
        </Link>
      </div>
    );
  }
}
