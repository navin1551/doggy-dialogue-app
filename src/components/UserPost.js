import React from "react";
import DoggyContext from "../DoggyContext";
import Replies from "./Replies";
import Question from "./Question";
import AddReplyForm from "./AddReplyForm";

export default class UserPost extends React.Component {
  static contextType = DoggyContext;
  render() {
    let postId = parseInt(this.props.match.params.postId);
    console.log(this.context.store);
    let postReplies = this.props.match.params.hasOwnProperty("postId")
      ? this.context.store.replies.map(reply => {
          if (reply.id === postId) {
            return <Replies key={reply.id} id={reply.id} reply={reply.reply} />;
          }
          return null;
        })
      : null;

    let question = this.context.store.posts.map(post => {
      if (post.id === postId) {
        return <Question key={post.id} id={post.id} question={post.question} />;
      } else {
        return null;
      }
    });

    return (
      <div>
        <div>{question}</div>
        <div>{postReplies}</div>
        <div>
          <AddReplyForm />
        </div>
      </div>
    );
  }
}
