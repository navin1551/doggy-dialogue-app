import React from "react";
import ValidationError from "../ValidationError";
import config from "../config";
import "./AddNewPost.css";
import DoggyContext from "../DoggyContext";
import TokenService from "../services/token-service";

export default class AddNewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      forumid: "",
      modified: new Date(),
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

  addFolderId(forumid) {
    this.setState({ forumid });
  }

  addModified(modified) {
    this.setState({
      modified
    });
  }

  postSubmitHandle = e => {
    e.preventDefault();
    let { title, content, forumid, modified, id } = this.state;
    forumid = parseInt(forumid);
    const newPost = { title, content, forumid, modified, id };
    fetch(`${config.API_ENDPOINT}/posts`, {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong please try again later");
        }
        res.json().then(data => (window.location = `/post/${data.id}`));
        return;
      })
      .then(() => {
        this.setState({
          title: "",
          content: "",
          forumid: "",
          modified: new Date()
        });
        this.context.addPost(newPost);
      })
      .catch(error => {
        console.log(error);
      });
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
      if (fieldValue.length < 10 || fieldValue.length > 700) {
        fieldErrors.content = "Content must be at least 10 characters long";
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
    const { forums = [] } = this.context;

    return (
      <div>
        <div className="new-post-header-area" />
        <div className="new-post-area">
          <form
            className="new-post-form"
            onSubmit={e => this.postSubmitHandle(e)}
          >
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
