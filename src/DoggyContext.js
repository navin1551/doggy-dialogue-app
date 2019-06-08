import React from "react";

const DoggyContext = React.createContext({
  posts: [],
  replies: [],
  addPost: () => {},
  addReply: () => {},
  deletePost: () => {},
  updatePost: () => {},
  updateReply: () => {}
});

export default DoggyContext;
