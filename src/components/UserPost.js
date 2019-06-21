import React from "react";
import DoggyContext from "../DoggyContext";
import Replies from "./Replies";
import Content from "./Content";
import AddReplyInput from "./AddReplyInput";
import TokenService from "../services/token-service";
import "./UserPost.css";

export default class UserPost extends React.Component {
  static contextType = DoggyContext;

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    console.log(this.props);
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
                postId={postId}
                userName={reply.user_name}
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
            title={post.title}
            forumId={this.props.location.state.forumId}
            userName={post.user_name}
          />
        );
      } else {
        return null;
      }
    });

    return (
      <div>
        <div className="user-post-header-area">
          <button onClick={this.goBack} id="back-button">
            Go Back
          </button>
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
