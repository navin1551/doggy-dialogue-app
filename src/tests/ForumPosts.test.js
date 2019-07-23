import React from "react";
import ReactDOM from "react-dom";
import ForumPosts from "../components/ForumPosts";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <ForumPosts />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
