import React from "react";
import { Link } from "react-router-dom";
import DoggyContext from "../DoggyContext";
import "./EditPost.css";

export default class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }

  static contextType = DoggyContext;

  componentDidMount() {
    const postId = this.props.match.params.postId;
    fetch(`http://localhost:8000/api/posts/${postId}`, {
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
          title: responseData.title,
          content: responseData.content
        });
      })
      .catch(error => {
        this.setState(error);
      });
  }

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleContentChange = e => {
    this.setState({ content: e.target.value });
  };

  handleEditSubmit = e => {
    e.preventDefault();
    const { postId } = this.props.match.params;
    const { title, content } = this.state;
    const newPost = { title, content };
    fetch(`http://localhost:8000/api/posts/${postId}`, {
      method: "PATCH",
      body: JSON.stringify(newPost),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) return res.json().then(error => Promise.reject(error));
      })
      .then(() => {
        this.context.updatePost(newPost);
        window.location = "/";
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    const { title, content } = this.state;
    const { postId } = this.props.match.params;
    return (
      <section>
        <div>
          <h2>Edit Post</h2>
        </div>
        <div>
          <form onSubmit={e => this.handleEditSubmit(e)}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="edit-title-input"
              name="edit-title"
              onChange={this.handleTitleChange}
              value={title}
            />
            <br />
            <label htmlFor="content">Content:</label>
            <textarea
              id="edit-content-input"
              name="edit-content"
              onChange={this.handleContentChange}
              value={content}
            />
            <button id="post-edit-save-button">Save</button>
          </form>
        </div>
        <button id="post-edit-delete-button">Delete</button>
        <Link to={`/post/${postId}`}>
          <button id="edit-post-cancel-button">Cancel</button>
        </Link>
      </section>
    );
  }
}
