import React from "react";
import { Link } from "react-router-dom";
import "./Forums.css";
import ForumList from "./ForumList";
import TokenService from "../services/token-service";

export default class Forums extends React.Component {
  render() {
    return (
      <div>
        <div className="forums-header-area">
          <h2>Forums</h2>
          {TokenService.hasAuthToken() ? (
            <Link to="/new-post">
              <button id="new-thread-button">+ New Post</button>
            </Link>
          ) : (
            <p id="sign-up-to-post">Login or register to post!</p>
          )}
        </div>
        <div className="forum-headers">
          <p id="forum">Forum</p>
          <p id="last-post">Last post</p>
          <p id="posts">Posts</p>
        </div>
        <div>
          <ForumList />
        </div>
      </div>
    );
  }
}
