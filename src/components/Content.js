import React from "react";
import { Link } from "react-router-dom";
import "./Content.css";
import DoggyContext from "../DoggyContext";

export default class Content extends React.Component {
  static contextType = DoggyContext;

  postDeleteHandle = e => {
    e.preventDefault();
    const postId = this.props.id;
    console.log(this.props.id);
    this.context.deletePost(postId);
    console.log("delete 1");
  };
  render() {
    return (
      <div className="post-content-area">
        <div>{this.props.content}</div>
        <div className="post-button-area">
          <Link to={`/edit-post/${this.props.id}`}>
            <button id="post-edit-button">Edit</button>
          </Link>
          <button onClick={this.postDeleteHandle} id="post-delete-button">
            Delete
          </button>
        </div>
      </div>
    );
  }
}
