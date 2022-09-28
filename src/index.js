import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Theme_provider } from "../src/components/context/Theme.Context";
ReactDOM.render(
  <React.StrictMode>
    <Theme_provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Theme_provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
