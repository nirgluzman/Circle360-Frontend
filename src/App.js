import "./App.css";

import { Route, Routes, Navigate } from "react-router-dom";

import HomePage from "./components/HomePage";
import AuthPage from "./components/AuthPage";
import DashboardPage from "./components/DashboardPage";

// Amplify components & hooks ********************

// hook to access, modify, and update Authenticator's auth state
import { useAuthenticator } from "@aws-amplify/ui-react";

// ***********************************************

function App() {
  const { authStatus } = useAuthenticator((context) => [context.route]);

  console.log(authStatus);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route
          path="/dashboard"
          element={
            authStatus === "authenticated" ? (
              <DashboardPage />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
