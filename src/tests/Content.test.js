import React from "react";
import ReactDOM from "react-dom";
import Content from "../components/Content";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Content />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
