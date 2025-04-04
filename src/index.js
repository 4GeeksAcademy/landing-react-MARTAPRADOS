import React from "react";
import ReactDOM from "react-dom/client";

import { Home } from "./views/Home.jsx";


import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";

const rootElement = document.getElementById("root");


const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
