import React from "react";
import "./AddReplyInput.css";
import DoggyContext from "../DoggyContext";

export default class AddReplyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reply: ""
    };
  }

  static contextType = DoggyContext;

  addReply(reply) {
    this.setState({ reply });
  }

  addReplyHandle = e => {
    e.preventDefault();
    console.log("reply button tester");
    const { reply } = this.state;
    const newReply = { reply };
    console.log(newReply);
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
            onChange={e => this.addReply(e.target.value)}
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
