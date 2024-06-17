import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { IntercomProvider } from "react-use-intercom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <IntercomProvider appId={"d7aozhso"} autoBoot>
        <App />
      </IntercomProvider>
    </React.StrictMode>
  </BrowserRouter>
);
