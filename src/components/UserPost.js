import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import DoggyContext from "../DoggyContext";
import Replies from "./Replies";
import Content from "./Content";
import AddReplyInput from "./AddReplyInput";
import TokenService from "../services/token-service";
import "./UserPost.css";

class UserPost extends React.Component {
  static contextType = DoggyContext;
  render() {
    const { replies = [] } = this.context;

    let postId = parseInt(this.props.match.params.postId);
    let count = 1;
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
                count={(count += 1)}
              />
            );
          }
          return null;
        })
      : null;

    const post = this.context.posts.find(post => post.id === postId);

    if (!post) {
      return "url is invalid";
    }

    const content = (
      <Content
        key={post.id}
        id={post.id}
        content={post.content}
        modified={post.date_created}
        title={post.title}
        forumId={post.forumid}
        userName={post.user_name}
      />
    );

    return (
      <div>
        <div className="user-post-header-area">
          <p className="user-post-title">{post.title}</p>
          <Link to={`/forums/${post.forumid}`}>
            <button id="back-button">Back</button>
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

export default withRouter(UserPost);
