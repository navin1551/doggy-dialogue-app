import React from "react";
import ReactDOM from "react-dom";
import Forums from "../components/Forums";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Forums />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
