import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { AppRoutes } from "./Routes";
const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes history={history} />
  </React.StrictMode>,
  document.getElementById("root")
);
