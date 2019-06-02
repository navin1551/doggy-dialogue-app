import React from "react";
import "./NavBar.css";

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav-bar">
          <li>About Us</li>
          <li>Forums</li>
          <li>Register</li>
        </ul>
      </div>
    );
  }
}
