import React from "react";
import DoggyContext from "../DoggyContext";
import Replies from "./Replies";
import Content from "./Content";
import AddReplyInput from "./AddReplyInput";
import "./UserPost.css";

export default class UserPost extends React.Component {
  static contextType = DoggyContext;
  render() {
    const { replies = [] } = this.context.store;

    let postId = parseInt(this.props.match.params.postId);

    let postReplies = this.props.match.params.hasOwnProperty("postId")
      ? replies.map(reply => {
          if (reply.id === postId) {
            return <Replies key={reply.id} id={reply.id} reply={reply.reply} />;
          }
          return null;
        })
      : null;

    let content = this.context.store.posts.map(post => {
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
        </div>
        <div>{content}</div>
        <div>{postReplies}</div>
        <div>
          <AddReplyInput />
        </div>
      </div>
    );
  }
}
