import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import PorfolioProvider, { PorfolioContext } from "./context/PorfolioContext";

ReactDOM.render(
  <PorfolioProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PorfolioProvider>,
  document.getElementById("root")
);
