import React from "react";
import { Link } from "react-router-dom";
import "./ForumPosts.css";
import DoggyContext from "../DoggyContext";
import Post from "./Post";

export default class ForumPosts extends React.Component {
  static contextType = DoggyContext;

  render() {
    let forumId = parseInt(this.props.match.params.folderId);

    let forumPosts = this.context.store.posts.map(post => {
      if (post.forumId === forumId) {
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
        <div>
          <h2>Forum Posts</h2>
          <Link to="/new-post">
            <button id="new-thread-button">+ New Post</button>
          </Link>
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
