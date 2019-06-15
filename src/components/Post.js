import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import "./Post.css";

export default class Post extends React.Component {
  render() {
    const { modified } = this.props;
    return (
      <div className="post-titles">
        <Link id="post-title-links" to={`/post/${this.props.id}`}>
          {this.props.title}
          <br />
          <span id="post-title-dates">{format(modified, "MM/DD/YYYY")}</span>
        </Link>
      </div>
    );
  }
}
