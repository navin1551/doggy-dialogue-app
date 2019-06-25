import React from "react";
import { Link } from "react-router-dom";
import "./Forums.css";
import ForumList from "./ForumList";
import TokenService from "../services/token-service";

export default class Forums extends React.Component {
  render() {
    return (
      <div className="forum-header-container">
        <div className="forums-header-area">
          <div className="about-us-info">
            <p className="about-us-text">
              Welcome to Doggy Dialogue! This is forum for dog lovers where you
              can discuss, get answers, help out and participate in all matters
              related to dogs and puppies
            </p>

            <div>
              {TokenService.hasAuthToken() ? (
                <p className="about-us-text">
                  We invite you to join the discussion below in our Dog forums
                </p>
              ) : (
                <p className="about-us-text">
                  You are currently viewing the site as an unregistered guest.
                  <br />
                  <Link to="/register">Register</Link> to:
                  <br />
                  -Participate in dog discussions
                  <br />
                  -Get answers to your dog and puppy questions
                  <br />
                  -Become an active member of Doggy Dialogue
                </p>
              )}
            </div>
            {TokenService.hasAuthToken() ? (
              <Link to="/new-post">
                <button id="new-thread-button">+New Post</button>
              </Link>
            ) : null}
          </div>
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
