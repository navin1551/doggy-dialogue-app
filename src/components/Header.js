import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import TokenService from "../services/token-service";
import LoginForm from "./LoginForm";

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
        <div className="doggy-dialogue-link-area">
          <Link id="doggy-dialogue-link" to={"/"}>
            <p id="doggy-dialogue">Doggy Dialogue</p>
          </Link>
          <LoginForm />
        </div>
      </header>
    );
  }
}
