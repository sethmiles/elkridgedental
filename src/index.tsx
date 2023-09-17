import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UiContextProvider } from "./context/UiContextProvider";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const GreenColor = {
  "900": "#2b4527",
  "800": "#3b603c",
  "700": "#447047",
  "600": "#4d8053",
  "500": "#548c5d",
  "400": "#629d6e",
  "300": "#76ae84",
  "200": "#98c5a4",
  "100": "#bedbc7",
  "50": "#e4f1e9",
};

const theme = createTheme({
  palette: {
    primary: GreenColor,
  },
  typography: {
    // Tell MUI what the font-size on the html element is.
    htmlFontSize: 10,
    button: {
      fontSize: "16px",
      fontWeight: 300,
      fontFamily: '"Open Sans", Arial, sans-serif',
    },

    h1: {
      fontWeight: 400,
      fontSize: "84px",
      lineHeight: "110px",
      color: "rgb(43, 69, 39)",
      fontFamily: '"Open Sans", Arial, sans-serif',
    },
    h2: {
      fontWeight: 300,
      fontSize: "32px",
      lineHeight: "64px",
      color: "rgb(43, 69, 39)",
      fontFamily: '"Open Sans", Arial, sans-serif',
    },
    h3: {
      fontWeight: 700,
      fontSize: "18px",
      color: "rgb(43, 69, 39)",
      fontFamily: '"Open Sans", Arial, sans-serif',
    },
    h4: {
      color: "rgb(43, 69, 39)",
      fontFamily: "Rubik",
    },
    body1: {
      fontWeight: 400,
      fontSize: "15px",
      color: "rgba(43, 69, 39, 0.8)",
      lineHeight: "24px",
      fontFamily: '"Open Sans", Arial, sans-serif',
    },
    caption: {
      fontWeight: 200,
      fontSize: "16px",
      color: "rgb(43, 69, 39)",
      fontFamily: '"Open Sans", Arial, sans-serif',
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UiContextProvider>
        <App />
      </UiContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
