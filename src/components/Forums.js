import React from "react";
import "./Forums.css";
import ForumList from "./ForumList";

export default class Forums extends React.Component {
  render() {
    return (
      <div>
        <div className="doggy-picture-area">
          <p>Doggy Pictures!!!</p>
        </div>
        <div className="forum-headers">
          <p id="forum">Forum</p>
          <p id="last-post">Last post</p>
          <p id="posts">Posts</p>
        </div>
        <div>
          <ForumList />
        </div>
      </div>
    );
  }
}
