import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

// components
import TasksPending from "./components/pending-tasks";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TasksPending />
  </React.StrictMode>
);
