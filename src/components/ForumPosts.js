import React from "react";
import { Link } from "react-router-dom";
import "./ForumPosts.css";
import DoggyContext from "../DoggyContext";
import TokenService from "../services/token-service";
import Post from "./Post";

export default class ForumPosts extends React.Component {
  static contextType = DoggyContext;

  render() {
    let forumId = parseInt(this.props.match.params.folderId);

    let forumPosts = this.context.posts.map(post => {
      if (post.forumid === forumId) {
        return (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            question={post.question}
          />
        );
      }
      return null;
    });

    return (
      <div className="forum-posts-doggy-picture-area">
        <div className="forum-title-area">
          <h2>Forum Title</h2>
          {TokenService.hasAuthToken() ? (
            <Link to="/new-post">
              <button id="new-thread-button">+ New Post</button>
            </Link>
          ) : (
            <p id="sign-up-to-post">Login or register to post!</p>
          )}
        </div>
        <div className="forum-posts-headers">
          <p id="thread">Post</p>
          <p id="last-post">Last reply</p>
          <p id="posts">Replies</p>
        </div>
        <div className="forum-post-list">
          <span>{forumPosts}</span>
        </div>
      </div>
    );
  }
}
