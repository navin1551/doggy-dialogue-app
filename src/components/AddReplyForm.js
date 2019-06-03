import React from "react";
import "./AddReplyForm.css";

export default class AddReplyForm extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          id="add-reply-input"
          name="add-reply-input"
          placeholder="Reply Here"
        />
      </div>
    );
  }
}
