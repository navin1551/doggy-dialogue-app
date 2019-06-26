import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import "./Replies.css";
import DoggyContext from "../DoggyContext";
import TokenService from "../services/token-service";
import PropTypes from "prop-types";

export default class Replies extends React.Component {
  static contextType = DoggyContext;

  userNameTrue() {
    if (TokenService.getUserName() === this.props.userName) {
      return (
        <Link
          to={{
            pathname: `/edit-reply/${this.props.id}`,
            state: { postId: this.props.postId }
          }}
        >
          <button id="post-edit-button">Edit</button>
        </Link>
      );
    } else {
      return null;
    }
  }

  render() {
    const { modified } = this.props;

    return (
      <div className="post-reply-area">
        <div className="reply-border">
          <span>{format(modified, "MM/DD/YYYY")}</span>
          <span>#{this.props.count}</span>
        </div>
        <div className="reply-content">{this.props.reply}</div>

        <div className="post-button-area">{this.userNameTrue()}</div>
        <div>
          <span id="reply-author">By:{this.props.userName}</span>
        </div>
      </div>
    );
  }
}

Replies.propTypes = {
  id: PropTypes.number.isRequired,
  postId: PropTypes.number.isRequired,
  reply: PropTypes.string.isRequired
};
