import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { IntercomProvider } from "react-use-intercom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <IntercomProvider appId={"d7aozhso"} autoBoot>
          <App />
        </IntercomProvider>
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
);
