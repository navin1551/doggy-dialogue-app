import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

export default class Post extends React.Component {
  render() {
    return (
      <div className="post-titles">
        <Link id="post-title-links" to={`/post/${this.props.id}`}>
          {this.props.title}
        </Link>
      </div>
    );
  }
}
