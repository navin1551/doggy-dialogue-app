import React from "react";
import { Link } from "react-router-dom";
import DoggyContext from "../DoggyContext";
import Replies from "./Replies";
import Content from "./Content";
import AddReplyInput from "./AddReplyInput";
import TokenService from "../services/token-service";
import "./UserPost.css";

export default class UserPost extends React.Component {
  static contextType = DoggyContext;

  render() {
    const { replies = [] } = this.context;

    let postId = parseInt(this.props.match.params.postId);
    let postReplies = this.props.match.params.hasOwnProperty("postId")
      ? replies.map(reply => {
          if (reply.postid === postId) {
            return (
              <Replies
                key={reply.id}
                id={reply.id}
                reply={reply.reply}
                modified={reply.date_commented}
              />
            );
          }
          return null;
        })
      : null;
    let content = this.context.posts.map(post => {
      if (post.id === postId) {
        return (
          <Content
            key={post.id}
            id={post.id}
            content={post.content}
            modified={post.date_created}
          />
        );
      } else {
        return null;
      }
    });

    return (
      <div>
        <div className="user-post-header-area">
          <h2>Post Title</h2>
          <Link to={`/forums/${postId}`}>
            <button id="back-button">Go Back</button>
          </Link>
        </div>
        <div>{content}</div>
        <div>{postReplies}</div>
        <div>
          {TokenService.hasAuthToken() ? (
            <AddReplyInput postid={postId} />
          ) : (
            <p id="want-to-reply">Want to reply? Login in or register!</p>
          )}
        </div>
      </div>
    );
  }
}
