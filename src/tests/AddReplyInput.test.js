import React from "react";
import ReactDOM from "react-dom";
import AddReplyInput from "../components/AddReplyInput";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <AddReplyInput />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
