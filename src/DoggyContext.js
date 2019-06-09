import React from "react";

const DoggyContext = React.createContext({
  posts: [],
  replies: [],
  addPost: () => {},
  addReply: () => {},
  deletePost: () => {},
  deleteReply: () => {},
  updatePost: () => {},
  updateReply: () => {}
});

export default DoggyContext;
