// React
import React from "react";
import ReactDOM from "react-dom";

// Third Part
import { HashRouter as Router } from "react-router-dom";

// Components
import App from "./components/App";

// Styles
import "./index.css";
import "antd/dist/antd.css";
import "animate.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
