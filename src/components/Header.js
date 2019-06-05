import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import LoginForm from "./LoginForm";
import NavBar from "./NavBar";

export default class Header extends React.Component {
  render() {
    return (
      <header className="doggy-dialogue-header">
        <Link to={"/forums"}>
          <h1 id="doggy-dialogue">Doggy Dialogue</h1>
        </Link>
        <LoginForm />
        <NavBar />
      </header>
    );
  }
}
