import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import Home from "./Pages/App";
import { GlobalStyles } from "./styles/GlobalStyles";

const theme = {
  colors: {
    backgroundColor: "#E8EAEF",
    containerColor: "#FFFFFF",
    containerBorderColor: "#ECE8E2",
    elementBorderColor: "#2f2f2f9c",
    primaryButtonColor: "#2F2F2F",
    primaryButtonHoverColor: "#1F1F1F",
    titleColor: "#111827",
    descriptionColor: "#6B7280",
    highlightColor: "#c6ccc1",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);