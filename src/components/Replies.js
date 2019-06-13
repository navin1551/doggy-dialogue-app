import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import "./Replies.css";
import DoggyContext from "../DoggyContext";

export default class Replies extends React.Component {
  static contextType = DoggyContext;

  replyDeleteHandle = e => {
    e.preventDefault();
    const replyId = this.props.id;
    console.log(replyId);

    fetch(`https://peaceful-atoll-29792.herokuapp.com/api/replies/${replyId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        console.log(res);
        if (!res.ok) return res.json().then(error => Promise.reject(error));
        return null;
      })
      .then(() => {
        console.log(replyId);
        this.context.deleteReply(replyId);
      })
      .catch(error => {
        console.error({ error });
      });
  };

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
          <button onClick={this.replyDeleteHandle} id="post-delete-button">
            Delete
          </button>
        </div>
      </div>
    );
  }
}
