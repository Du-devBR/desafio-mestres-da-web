import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalFonts } from "./fonts/fonts.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalFonts />
    <App />
  </React.StrictMode>
);
