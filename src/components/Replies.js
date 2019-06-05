import React from "react";
import "./Replies.css";

export default class Replies extends React.Component {
  render() {
    return <div className="post-reply-area">{this.props.reply}</div>;
  }
}
