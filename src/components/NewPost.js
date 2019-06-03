import React from "react";
import "./NewPost.css";
import DoggyContext from "../DoggyContext";

export default class NewPost extends React.Component {
  static contextType = DoggyContext;
  render() {
    return (
      <div>
        <div className="new-post-header-area">
          <h2>Doggie Pics!!!</h2>
        </div>
        <div>
          <form className="new-post-form">
            <div>
              <h3>New Post</h3>
            </div>
            <label htmlFor="title">Title:</label>
            <input type="text" id="new-post-title" name="new-post-title" />
            <br />
            <br />
            <label htmlFor="content">Content:</label>
            <input type="text" id="new-post-content" name="new-post-content" />
            <br />
            <br />
            <label htmlFor="forum">Forum:</label>
            <select type="select" id="forum-input">
              <option value="">Choose Forum...</option>
              {this.context.store.forums.map(forum => (
                <option key={forum.id} value={forum.id}>
                  {forum.name}
                </option>
              ))}
            </select>
            <div>
              <button id="new-post-button">Post</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
