import React from "react";
import ReactDOM from "react-dom";
import MyNavbar from "./MyNavbar";
import "./index.css";
import Content from "./Content";

ReactDOM.render(
  <React.StrictMode>
    <MyNavbar />
    <Content />
  </React.StrictMode>,
  document.getElementById("root")
);
