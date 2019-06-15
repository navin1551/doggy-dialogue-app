import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar-area">
        <ul className="nav-bar">
          <Link id="forum-nav-bar-link" to={"/forums"}>
            <li id="forums">Forums</li>
          </Link>
          <Link id="forum-nav-bar-link" to={"/adopt"}>
            <li id="adoption-and-rescue">Adoption & Rescue</li>
          </Link>
        </ul>
      </div>
    );
  }
}
