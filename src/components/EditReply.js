import React from "react";
import config from "../config";
import DoggyContext from "../DoggyContext";
import { withRouter } from "react-router";
import "./EditReply.css";

class EditReply extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reply: ""
    };
  }

  static contextType = DoggyContext;

  componentDidMount() {
    const { replyId } = this.props.match.params;
    fetch(`${config.API_ENDPOINT}/replies/${replyId}`, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) return res.json().then(error => Promise.reject(error));

        return res.json();
      })
      .then(responseData => {
        this.setState({
          reply: responseData.reply
        });
      })
      .catch(error => {
        this.setState(error);
      });
  }

  handleReplyChange = e => {
    this.setState({ reply: e.target.value });
  };

  replyDeleteHandle = e => {
    e.preventDefault();
    const { replyId } = this.props.match.params;
    console.log(replyId);

    fetch(`${config.API_ENDPOINT}/replies/${replyId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        console.log(res);
        if (!res.ok) return res.json().then(error => Promise.reject(error));
        return null;
      })
      .then(() => {
        console.log(replyId);
        this.context.deleteReply(replyId);
        window.location = `/post/${this.props.location.state.postId}`;
      })
      .catch(error => {
        console.error({ error });
      });
  };

  handleEditSubmit = e => {
    e.preventDefault();
    const { replyId } = this.props.match.params;
    const { reply } = this.state;
    const newReply = { reply };
    fetch(`${config.API_ENDPOINT}/replies/${replyId}`, {
      method: "PATCH",
      body: JSON.stringify(newReply),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) return res.json().then(error => Promise.reject(error));
      })
      .then(() => {
        this.context.updateReply(newReply);
        window.location = `/post/${this.props.location.state.postId}`;
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { reply } = this.state;
    return (
      <section className="edit-reply-area">
        <div className="edit-reply-header">
          <h2>Edit Reply</h2>
        </div>
        <form
          className="edit-reply-form"
          onSubmit={e => this.handleEditSubmit(e)}
        >
          <label htmlFor="reply">Reply:</label>
          <textarea
            id="edit-reply-input"
            name="edit-reply"
            value={reply}
            onChange={this.handleReplyChange}
          />
          <button id="reply-edit-save-button">Save</button>
        </form>
        <div className="edit-reply-buttons">
          <button
            onClick={this.replyDeleteHandle}
            id="reply-edit-delete-button"
          >
            Delete
          </button>
          <button onClick={this.goBack} id="edit-reply-cancel-button">
            Cancel
          </button>
        </div>
      </section>
    );
  }
}

export default withRouter(EditReply);
