import React from "react";
import { Link } from "react-router-dom";
import "./Replies.css";

export default class Replies extends React.Component {
  render() {
    return (
      <div className="post-reply-area">
        <div>{this.props.reply}</div>
        <div className="post-button-area">
          <Link to={`/edit-reply/${this.props.id}`}>
            <button id="post-edit-button">Edit</button>
          </Link>
          <button id="post-delete-button">Delete</button>
        </div>
      </div>
    );
  }
}
