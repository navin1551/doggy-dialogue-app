import React from "react";
import "./AddReplyInput.css";
import DoggyContext from "../DoggyContext";

export default class AddReplyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      replies: ""
    };
  }

  static contextType = DoggyContext;

  addReplyHandle = e => {
    e.preventDefault();
    console.log("reply button tester");
    const { replies } = this.state;
    const newReply = { replies };
    this.context.addReply(newReply);
  };

  render() {
    return (
      <div className="add-reply">
        <div>
          <textarea
            id="add-reply-input"
            name="add-reply-input"
            placeholder="Reply Here"
          />
        </div>
        <div>
          <button id="reply-button" onClick={this.addReplyHandle}>
            Reply
          </button>
        </div>
      </div>
    );
  }
}
