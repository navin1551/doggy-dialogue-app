import React from "react";
import "./ForumPosts.css";

export default class ForumPosts extends React.Component {
  render() {
    return (
      <div className="forum-posts-doggy-picture-area">
        <div>
          <p>Doggy Pics!!!</p>
        </div>
        <div className="forum-posts-headers">
          <p id="thread">Thread</p>
          <p id="last-post">Last post</p>
          <p id="posts">Replies</p>
        </div>
      </div>
    );
  }
}
