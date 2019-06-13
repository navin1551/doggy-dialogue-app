import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import LoginForm from "./LoginForm";
import NavBar from "./NavBar";
import TokenService from "../services/token-service";

export default class Header extends React.Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    window.location = "/forums";
  };
  renderLogoutLink() {
    return (
      <div>
        <Link onClick={this.handleLogoutClick} id="log-out-link" to="/">
          Log Out
        </Link>
      </div>
    );
  }

  render() {
    return (
      <header className="doggy-dialogue-header">
        <Link id="doggy-dialogue-link" to={"/forums"}>
          <h1 id="doggy-dialogue">Doggy Dialogue</h1>
        </Link>
        {TokenService.hasAuthToken() ? this.renderLogoutLink() : <LoginForm />}
        <NavBar />
      </header>
    );
  }
}
