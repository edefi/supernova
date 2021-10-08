import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import reportWebVitals from './reportWebVitals';

import "normalize.css/normalize.css"
import "./assets/css/animate.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/index.css";
import "./assets/css/fontawesome-all.min.css";
import "tailwindcss/tailwind.css";
import "animate.css/animate.min.css";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
