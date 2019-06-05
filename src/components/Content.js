import React from "react";
import "./Content.css";

export default class Content extends React.Component {
  render() {
    return <div className="post-content-area">{this.props.content}</div>;
  }
}
