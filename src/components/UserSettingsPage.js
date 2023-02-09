import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserSettings } from "../ui-components";
import { styles } from "../utils/amplifyStyles";
import { Flex, Alert } from "@aws-amplify/ui-react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { AccountSettings } from "@aws-amplify/ui-react";

import { CircleContext } from "../contexts/CircleContext";
import axios from "axios";

export default function UserSettingsPage() {
  const { signOut } = useAuthenticator((context) => [context.user]);
  const navigate = useNavigate();
  const userInfo = useContext(CircleContext);
  const { profilePictureURL } = userInfo;
  const [error, setError] = useState(null);
  const [deleteCognito, setDeleteCognito] = useState(false);
  const [deleteCognitoMessage, setDeleteCognitoMessage] = useState(false);

  const deleteAccount = async () => {
    try {
      setError(null);
      const token = JSON.parse(localStorage.getItem("user")).token;
      await axios({
        method: "DELETE",
        url: `${process.env.REACT_APP_API_URL}/user`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setDeleteCognito(true);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const UserSettingsOverride = {
    image: { alt: "Profile image", src: profilePictureURL },
    Title: { onClick: () => navigate("/dashboard") },
    BackIcon: {
      className: "custom-btn",
      onClick: () => navigate("/dashboard"),
    },
    SignoutButton: {
      className: "custom-btn",
      onClick: signOut,
    },
    DeleteAccountButton: {
      className: "custom-btn",
      onClick: deleteAccount,
    },
    ProfileDetailsButton: {
      className: "custom-btn",
      onClick: () => navigate("/userdetails"),
    },
    AppSettingsButton: {
      className: "custom-btn",
      onClick: () => navigate("/userAppSettings"),
    },
  };
  return (
    <div>
      {error && (
        <Alert
          variation="error"
          isDismissible={true}
          onDismiss={() => setError(null)}
        >
          {error}
        </Alert>
      )}
      {deleteCognitoMessage && (
        <Alert
          variation="success"
          isDismissible={true}
          onDismiss={() => setDeleteCognitoMessage(false)}
        >
          User has been successfully deleted
        </Alert>
      )}
      {deleteCognito && (
        <AccountSettings.DeleteUser onSuccess={setDeleteCognitoMessage(true)} />
      )}
      <Flex justifyContent="center" alignItems="center" direction="column">
        <UserSettings style={styles.center} overrides={UserSettingsOverride} />
      </Flex>
    </div>
  );
}
