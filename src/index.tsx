import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UsersDataProvider } from "./contexts/UsersData";
import { UiProvider } from "./contexts/UiContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UsersDataProvider>
      <UiProvider>
        <App />
      </UiProvider>
    </UsersDataProvider>
  </React.StrictMode>
);
