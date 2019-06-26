import React from "react";
import ReactDOM from "react-dom";
import UserPost from "../components/UserPost";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <UserPost />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
