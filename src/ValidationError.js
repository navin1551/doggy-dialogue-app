import React from "react";

export default class ValidationError extends React.Component {
  render() {
    if (this.props.hasError) {
      return <div>{this.props.message}</div>;
    }
    return null;
  }
}
