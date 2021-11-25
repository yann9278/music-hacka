import React from "react";
import ReactDOM from "react-dom";

import Vocal from "./components/Vocal";

import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Vocal />
  </React.StrictMode>,
  rootElement
);