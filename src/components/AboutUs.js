import React from "react";
import "./AboutUs.css";

export default class AboutUs extends React.Component {
  render() {
    return (
      <div className="about-us-area">
        <h3 className="about-us-header">About Us</h3>
        <p>
          Who are we at Doggy Dialogue? We are a group of people who love our
          furry four legged friends and want to establish an active community of
          dog lovers in the spirit of exchanging information, fun facts and just
          general doggy information.
        </p>

        <p>
          We LOVE everything doggy related and encourage all with the same
          passion to register to our site to get fully doggy access to all the
          content of our site. We offer an active, well moderated community of
          dog lovers with various forums to post questions in and get answers to
          various common and not so common dog related issues a new or seasoned
          hooman might experience.
        </p>

        <h2 className="sign-up-span">Sign up ***HERE***</h2>
      </div>
    );
  }
}
