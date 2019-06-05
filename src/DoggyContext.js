import React from "react";

const DoggyContext = React.createContext({
  posts: [],
  replies: [],
  addPost: () => {},
  addReply: () => {}
});

export default DoggyContext;
