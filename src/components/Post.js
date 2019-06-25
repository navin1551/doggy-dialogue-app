import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { format } from "date-fns";
import "./Post.css";
import DoggyContext from "../DoggyContext";

export default class Post extends React.Component {
  static contextType = DoggyContext;
  render() {
    const { modified } = this.props;
    let replyTotal = this.context.replies.filter(
      reply => reply.postid === this.props.id
    ).length;
    return (
      <div className="post-titles">
        <Link
          id="post-title-links"
          to={{
            pathname: `/post/${this.props.id}`,
            state: { forumId: this.props.forumId }
          }}
        >
          {this.props.title}
          <br />
          <span id="post-title-dates">{format(modified, "MM/DD/YYYY")}</span>
          <span id="post-title-author">- {this.props.userName}</span>
          <span id="reply-total">{replyTotal}</span>
        </Link>
      </div>
    );
  }
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  forumId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};
