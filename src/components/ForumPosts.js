import React from "react";
import "./ForumPosts.css";
import DoggyContext from "../DoggyContext";
import Post from "./Post";

export default class ForumPosts extends React.Component {
  static contextType = DoggyContext;
  render() {
    const { posts } = this.context.posts;
    return (
      <div className="forum-posts-doggy-picture-area">
        <div>
          <h2>Doggy Pics!!!</h2>
        </div>
        <div className="forum-posts-headers">
          <p id="thread">Thread</p>
          <p id="last-post">Last post</p>
          <p id="posts">Replies</p>
        </div>
        <div>
          <ul>
            {posts.map(post => (
              <li id={post.id} key={post.id}>
                <Post id={post.id} title={post.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
