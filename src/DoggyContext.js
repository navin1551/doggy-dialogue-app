import React from "react";

const DoggyContext = React.createContext({
  posts: [],
  replies: [],
  addPost: () => {}
});

export default DoggyContext;
