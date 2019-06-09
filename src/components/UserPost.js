import React from "react";
import { Link } from "react-router-dom";
import DoggyContext from "../DoggyContext";
import Replies from "./Replies";
import Content from "./Content";
import AddReplyInput from "./AddReplyInput";
import "./UserPost.css";

export default class UserPost extends React.Component {
  static contextType = DoggyContext;

  render() {
    const { replies = [] } = this.context;

    let postId = parseInt(this.props.match.params.postId);
    console.log(postId);
    console.log(replies);
    console.log(this.context.posts);
    let postReplies = this.props.match.params.hasOwnProperty("postId")
      ? replies.map(reply => {
          if (reply.postid === postId) {
            return <Replies key={reply.id} id={reply.id} reply={reply.reply} />;
          }
          return null;
        })
      : null;
    console.log(postReplies);
    let content = this.context.posts.map(post => {
      if (post.id === postId) {
        return <Content key={post.id} id={post.id} content={post.content} />;
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
          <AddReplyInput postid={postId} />
        </div>
      </div>
    );
  }
}
