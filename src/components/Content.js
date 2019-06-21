import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import "./Content.css";
import DoggyContext from "../DoggyContext";
import TokenService from "../services/token-service";

export default class Content extends React.Component {
  static contextType = DoggyContext;

  userNameTrue() {
    if (TokenService.getUserName() === this.props.userName) {
      return (
        <Link
          to={{
            pathname: `/edit-post/${this.props.id}`,
            state: { forumId: this.props.forumId }
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
      <div className="post-content-area">
        <div className="content-border">
          <span className="date">{format(modified, "MM/DD/YYYY")}</span>
          <span>#</span>
        </div>
        <div className="post-title-area">
          <span className="post-title">{this.props.title}</span>
        </div>
        <div className="post-content">{this.props.content}</div>
        <div className="post-button-area">{this.userNameTrue()}</div>
        <div>
          <span id="content-author">By:{this.props.userName}</span>
        </div>
      </div>
    );
  }
}
