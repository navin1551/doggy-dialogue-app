import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import config from "../config";
import "./Content.css";
import DoggyContext from "../DoggyContext";
import TokenService from "../services/token-service";
var jwtDecode = require("jwt-decode");

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    let token = TokenService.getAuthToken();
    let decoded = jwtDecode(token);
    console.log(token);
    console.log(decoded);
    console.log(decoded.sub);
    console.log(this.props.userName);
    this.state = {
      userName: decoded.sub
    };
  }
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

  userNameTrue() {
    if (this.state.userName === this.props.userName) {
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
        <div className="post-button-area">
          {/*<Link
            to={{
              pathname: `/edit-post/${this.props.id}`,
              state: { forumId: this.props.forumId }
            }}
          >
            <button id="post-edit-button">Edit</button>
          </Link>*/}
          {this.userNameTrue}
        </div>
        <div>
          <span id="content-author">By:{this.props.userName}</span>
        </div>
      </div>
    );
  }
}
