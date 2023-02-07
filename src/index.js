import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ********** Amplify **********
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

import awsconfig from "./aws-exports";

import "@aws-amplify/ui-react/styles.css";
import "@fontsource/inter/variable.css";
import { studioTheme } from "./ui-components";

Amplify.configure(awsconfig);
// ********** Amplify **********

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={studioTheme}>
    <App />
  </ThemeProvider>
);
