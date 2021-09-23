import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
document.body.style.backgroundImage = 'url("/assets/background-stars.svg")';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
