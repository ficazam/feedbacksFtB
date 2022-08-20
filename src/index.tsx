import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { FeedbackContextProvider } from "./store/feedbackContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <FeedbackContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FeedbackContextProvider>
);
