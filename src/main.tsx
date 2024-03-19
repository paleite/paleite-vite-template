import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";

const rootElement = document.querySelector("#root");


ReactDOM.createRoot(rootElement!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
