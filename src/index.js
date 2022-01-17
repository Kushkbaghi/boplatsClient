import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GetAdminProvider } from "./Context/LoginContext";

ReactDOM.render(
  <React.StrictMode>
    <GetAdminProvider>
      <App />
    </GetAdminProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
