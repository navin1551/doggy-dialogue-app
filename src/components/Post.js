import React from "react";
import { Link } from "react-router-dom";

export default class Post extends React.Component {
  render() {
    return (
      <div>
        <Link to={`/post/${this.props.id}`}>{this.props.title}</Link>
      </div>
    );
  }
}
