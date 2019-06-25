import React from "react";
import "./AddReplyInput.css";
import DoggyContext from "../DoggyContext";
import config from "../config";
import ValidationError from "../ValidationError";
import TokenService from "../services/token-service";

export default class AddReplyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reply: "",
      modified: new Date(),
      postid: this.props.postid,
      formValid: false,
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
    const { id, reply, modified, postid } = this.state;
    const newReply = { id, reply, modified, postid };
    fetch(`${config.API_ENDPOINT}/replies`, {
      method: "POST",
      body: JSON.stringify(newReply),
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong please try again later");
        }
        return res.json();
      })
      .then(data => {
        data.user_name = data.username[0].user_name;
        this.context.addReply(data);
        this.setState({
          reply: "",
          modified: new Date()
        });
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
            value={this.state.reply}
            onChange={e => this.addReply(e.target.value)}
          />
        </div>
        <ValidationError
          hasError={!this.state.replyValid}
          message={this.state.validationMessages.reply}
        />
        <div>
          <button
            id="reply-button"
            onClick={e => this.addReplyHandle(e)}
            disabled={!this.state.formValid}
          >
            Reply
          </button>
        </div>
      </div>
    );
  }
}
