import React from "react";
import { Link } from "react-router-dom";
import "./Replies.css";
import DoggyContext from "../DoggyContext";

export default class Replies extends React.Component {
  static contextType = DoggyContext;

  replyDeleteHandle = e => {
    e.preventDefault();
    const replyId = this.props.id;

    fetch(`http://localhost:8000/api/replies/${replyId}`, {
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
        this.context.deleteReply(replyId);
      })
      .catch(error => {
        console.error({ error });
      });
  };

  render() {
    return (
      <div className="post-reply-area">
        <div>{this.props.reply}</div>
        <div className="post-button-area">
          <Link to={`/edit-reply/${this.props.id}`}>
            <button id="post-edit-button">Edit</button>
          </Link>
          <button onClick={this.replyDeleteHandle} id="post-delete-button">
            Delete
          </button>
        </div>
      </div>
    );
  }
}
