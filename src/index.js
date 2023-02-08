import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

// ********** Context Providers **
import { Authenticator } from "@aws-amplify/ui-react";
import CircleContextProvider from "./contexts/CircleContext";

// ********** Amplify ************
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

import awsconfig from "./aws-exports";

import "@aws-amplify/ui-react/styles.css";
import "@fontsource/inter/variable.css";
import { studioTheme } from "./ui-components";

Amplify.configure(awsconfig);
// ********** Amplify ************

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Authenticator.Provider>
    <ThemeProvider theme={studioTheme}>
      <BrowserRouter>
        <CircleContextProvider>
          <App />
        </CircleContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </Authenticator.Provider>
);
