import React from "react";
import "./Header.css";
import LoginForm from "./LoginForm";
import NavBar from "./NavBar";

export default class Header extends React.Component {
  render() {
    return (
      <header className="doggy-dialogue-header">
        <h1 id="doggy-dialogue">Doggy Dialogue</h1>
        <LoginForm />
        <NavBar />
      </header>
    );
  }
}
