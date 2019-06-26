import React from "react";
import ReactDOM from "react-dom";
import Replies from "../components/Replies";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Replies />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
