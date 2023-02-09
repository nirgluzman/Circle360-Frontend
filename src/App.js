import "./App.css";

import { Route, Routes, Navigate } from "react-router-dom";

import HomePage from "./components/HomePage";
import AuthPage from "./components/AuthPage";
import DashboardPage from "./components/DashboardPage";
import CreateGroupPage from "./components/CreateGroupPage";
import CircleSettingsPage from "./components/CircleSettingsPage";
import UserSettingsPage from "./components/UserSettingsPage";

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
        <Route
          path="/creategroup"
          element={
            authStatus === "authenticated" ? (
              <CreateGroupPage />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/circlesettings"
          element={
            authStatus === "authenticated" ? (
              <CircleSettingsPage />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/usersettings"
          element={
            authStatus === "authenticated" ? (
              <UserSettingsPage />
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
