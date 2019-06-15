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
        <div>{this.props.reply}</div>
        <span>{format(modified, "MM/DD/YYYY")}</span>
        <div className="post-button-area">
          <Link to={`/edit-reply/${this.props.id}`}>
            <button id="post-edit-button">Edit</button>
          </Link>
        </div>
      </div>
    );
  }
}
