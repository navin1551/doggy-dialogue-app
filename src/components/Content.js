import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import config from "../config";
import "./Content.css";
import DoggyContext from "../DoggyContext";

export default class Content extends React.Component {
  static contextType = DoggyContext;

  postDeleteHandle = e => {
    e.preventDefault();
    const postId = this.props.id;

    fetch(`${config.API_ENDPOINT}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) return res.json().then(error => Promise.reject(error));
        return null;
      })
      .then(() => {
        this.context.deletePost(postId);
        window.location = "/";
      })
      .catch(error => {
        console.error({ error });
      });
  };

  render() {
    const { modified } = this.props;
    return (
      <div className="post-content-area">
        <div className="post-content">{this.props.content}</div>
        <span>{format(modified, "MM/DD/YYYY")}</span>
        <div className="post-button-area">
          <Link to={`/edit-post/${this.props.id}`}>
            <button id="post-edit-button">Edit</button>
          </Link>
        </div>
      </div>
    );
  }
}
