import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { format } from "date-fns";
import "./Post.css";

export default class Post extends React.Component {
  render() {
    const { modified } = this.props;
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
