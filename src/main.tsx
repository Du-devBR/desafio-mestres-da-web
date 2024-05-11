import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalFonts } from "./fonts/fonts.ts";
import { GlobalStyle } from "./styles/global.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalFonts />
    <App />
  </React.StrictMode>
);
