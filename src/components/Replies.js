import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import "./Replies.css";
import DoggyContext from "../DoggyContext";

export default class Replies extends React.Component {
  static contextType = DoggyContext;

  render() {
    const { modified } = this.props;
    return (
      <div className="post-reply-area">
        <div className="reply-border">
          <span>{format(modified, "MM/DD/YYYY")}</span>
          <span>#</span>
        </div>
        <div className="reply-content">{this.props.reply}</div>

        <div className="post-button-area">
          <Link
            to={{
              pathname: `/edit-reply/${this.props.id}`,
              state: { postId: this.props.postId }
            }}
          >
            <button id="post-edit-button">Edit</button>
          </Link>
        </div>
        <div>
          <span id="reply-author">Author</span>
        </div>
      </div>
    );
  }
}
