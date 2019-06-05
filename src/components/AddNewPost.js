import React from "react";
import ValidationError from "../ValidationError";
import "./AddNewPost.css";
import DoggyContext from "../DoggyContext";

export default class AddNewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      forumId: "",
      formValid: false,
      titleValid: false,
      contentValid: false,
      validationMessages: {
        title: "",
        content: ""
      }
    };
  }

  static contextType = DoggyContext;

  addPostContent(content) {
    this.setState({ content }, () => {
      this.validateContent(content);
    });
  }

  addPostTitle(title) {
    this.setState({ title }, () => {
      this.validateTitle(title);
    });
  }

  addFolderId(forumId) {
    this.setState({ forumId });
  }

  postSubmitHandle = e => {
    e.preventDefault();
    let { title, content, forumId } = this.state;
    forumId = parseInt(forumId);
    const newPost = { title, content, forumId };
    console.log(newPost);
    this.context.addPost(newPost);
  };

  validateTitle(fieldValue) {
    const fieldErrors = { ...this.state.validationMessages };
    let hasError = false;

    fieldValue = fieldValue.trim();
    if (fieldValue.length === 0) {
      fieldErrors.title = "Post title is required";
      hasError = true;
    } else {
      if (fieldValue.length < 3) {
        fieldErrors.title = "Post title must be longer than 3 characters";
        hasError = true;
      } else {
        fieldErrors.title = "";
        hasError = false;
      }
    }
    this.setState(
      {
        validationMessages: fieldErrors,
        titleValid: !hasError
      },
      this.formValid
    );
  }

  formValid() {
    this.setState({
      formValid: this.state.titleValid && this.state.contentValid
    });
  }

  validateContent(fieldValue) {
    const fieldErrors = { ...this.state.validationMessages };
    let hasError = false;

    fieldValue = fieldValue.trim();
    if (fieldValue.length === 0) {
      fieldErrors.content = "Must have content to create post!";
      hasError = true;
    } else {
      if (fieldValue.length < 20 || fieldValue.length > 700) {
        fieldErrors.content = "Content must be at least 20 characters long";
        hasError = true;
      } else {
        fieldErrors.content = "";
        hasError = false;
      }
    }
    this.setState(
      {
        validationMessages: fieldErrors,
        contentValid: !hasError
      },
      this.formValid
    );
  }

  render() {
    const { forums = [] } = this.context.store;

    return (
      <div>
        <div className="new-post-header-area">
          <h2>Doggie Pics!!!</h2>
        </div>
        <div>
          <form className="new-post-form" onSubmit={this.postSubmitHandle}>
            <div>
              <h3>New Post</h3>
            </div>
            <div>
              <label className="new-post-labels" htmlFor="title">
                Title:
              </label>
              <input
                type="text"
                id="new-post-title"
                name="new-post-title"
                onChange={e => this.addPostTitle(e.target.value)}
              />
            </div>
            <ValidationError
              hasError={!this.state.titleValid}
              message={this.state.validationMessages.title}
            />
            <br />
            <div>
              <label className="new-post-labels" htmlFor="content">
                Content:
              </label>
              <textarea
                id="new-post-content"
                name="new-post-content"
                onChange={e => this.addPostContent(e.target.value)}
              />
            </div>
            <ValidationError
              hasError={!this.state.contentValid}
              message={this.state.validationMessages.content}
            />
            <br />
            <label className="new-post-labels" htmlFor="forum">
              Forum:
            </label>
            <select
              type="select"
              id="forum-input"
              onChange={e => this.addFolderId(e.target.value)}
            >
              <option value="">Choose Forum...</option>
              {forums.map(forum => (
                <option id="forum-selecter" key={forum.id} value={forum.id}>
                  {forum.name}
                </option>
              ))}
            </select>
            <div>
              <button id="new-post-button">Post</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
