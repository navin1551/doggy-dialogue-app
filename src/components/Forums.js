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
          <div className="about-us-info">
            <p>
              Doggy Dialogue is a forum of dog lovers where you can discuss, get
              answers, help out and participate in all matters related to dogs
              and puppies
            </p>

            <div>
              {TokenService.hasAuthToken() ? (
                <p>
                  We invite you to share the joy of dog ownership in our Dog
                  forum below
                </p>
              ) : (
                <p>
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
                <button id="new-thread-button">+ New Post</button>
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
