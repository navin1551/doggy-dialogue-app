import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav-bar">
          <Link to={"/"}>
            <li id="about-us">About Us</li>
          </Link>
          <Link to={"/forums"}>
            <li id="forums">Forums</li>
          </Link>
          <Link to={"/adopt"}>
            <li id="adoption-and-rescue">Adoption & Rescue</li>
          </Link>
        </ul>
      </div>
    );
  }
}
