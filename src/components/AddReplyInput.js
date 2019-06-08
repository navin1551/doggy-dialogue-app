import React from "react";
import "./AddReplyInput.css";
import DoggyContext from "../DoggyContext";
import ValidationError from "../ValidationError";

export default class AddReplyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reply: "",
      modified: new Date(),
      postid: this.props.postid, //is this okay?
      formValid: false, //still able to add reply with no content?
      replyValid: false,
      validationMessages: {
        reply: ""
      }
    };
  }

  static contextType = DoggyContext;

  addReply(reply) {
    this.setState({ reply }, () => {
      this.validateReply(reply);
    });
  }

  addReplyHandle = e => {
    e.preventDefault();
    console.log("reply button tester");
    const { reply, modified, id, postid } = this.state;
    const newReply = { reply, modified, id, postid };
    fetch(`http://localhost:8000/api/replies`, {
      method: "POST",
      body: JSON.stringify(newReply),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong please try again later");
        }
        return res.json();
      })
      .then(() => {
        this.setState({
          reply: "",
          modified: new Date()
        });
        this.context.addReply(newReply);
        window.location = "/";
      })
      .catch(error => {
        console.error({ error });
      });
  };

  validateReply(fieldValue) {
    const fieldErrors = { ...this.state.validationMessages };
    let hasError = false;

    fieldValue = fieldValue.trim();
    if (fieldValue.length === 0) {
      fieldErrors.reply = "Reply is required";
      hasError = true;
    } else {
      fieldErrors.reply = "";
      hasError = false;
    }
    this.setState(
      {
        validationMessages: fieldErrors,
        replyValid: !hasError
      },
      this.formValid
    );
  }

  formValid() {
    this.setState({
      formValid: this.state.replyValid
    });
  }

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
        <ValidationError
          hasError={!this.state.replyValid}
          message={this.state.validationMessages.reply}
        />
        <div>
          <button id="reply-button" onClick={e => this.addReplyHandle(e)}>
            Reply
          </button>
        </div>
      </div>
    );
  }
}
