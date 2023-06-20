import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PlanContextProvider } from "./context/PlanContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PlanContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PlanContextProvider>
);
