import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"; // Ensure this file exists in the src folder

// Render the React app inside the element with id "root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
