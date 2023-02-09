import React, { useState, useEffect, createContext } from "react";

import { useAuthenticator } from "@aws-amplify/ui-react";

export const CircleContext = createContext();

export default function CircleContextProvider(props) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { user, authStatus } = useAuthenticator((context) => [context.route]);

  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [profilePictureURL, setProfilePictureURL] = useState("");
  const [updateFrequency, setUpdateFrequency] = useState(30000);
  const [incognito, setIncognito] = useState(false);
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [radius, setRadius] = useState("");
  const [myGroups, setMyGroups] = useState([]);
  const [selectedGroupLocations, setSelectedGroupLocations] = useState([]);
  const [selectedGroupName, setSelectedGroupName] = useState("");
  const [activeGroupCode, setActiveGroupCode] = useState("");
  const [geoStatus, setGeoStatus] = useState("");
  const [enableNotifications, setEnableNotifications] = useState("");
  const [selectedGroupMembers, setSelectedGroupMembers] = useState([]);

  const locationUpdateFreq = 1000;
  let intervalLocationId;
  let intervalGroupId;

  const toggleIncognito = () => {
    setIncognito(!incognito);
  };

  // Retrieve geolocation from browser
  useEffect(() => {
    const geoLocation = () => {
      console.log("LOCATION CAPTURED");
      if (!navigator.geolocation) {
        setGeoStatus("Geolocation is not supported by your browser");
      } else {
        setGeoStatus("Locating ...");
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setGeoStatus(null);
            setLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => {
            setGeoStatus("Unable to retrieve your location");
          }
        );
      }
    };

    clearInterval(intervalLocationId);

    if (authStatus === "authenticated") {
      intervalLocationId = setInterval(() => {
        geoLocation();
      }, locationUpdateFreq);
    }

    return () => {
      clearInterval(intervalLocationId);
    };
  }, [authStatus, incognito]);

  // update the user location in DB
  useEffect(() => {
    const updateLocationInDB = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("user")).token;
        await fetch(`${process.env.REACT_APP_API_URL}/user`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ location }),
        });
      } catch (error) {
        console.log(error);
      }
    };
    if (authStatus === "authenticated") {
      updateLocationInDB();
    }
  }, [authStatus, location]);

  // create JWT once authenticated by AWS Cognito
  useEffect(() => {
    const getToken = async () => {
      setIsLoading(true);
      setError(null);
      try {
        let res = await fetch(`${process.env.REACT_APP_API_URL}/user/token`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.attributes.email,
            nickname: user.attributes.nickname,
          }),
        });

        let data = await res.json();

        if (!res.ok) {
          setIsLoading(false);
          setError(data.error);
        }

        let token;
        if (res.ok) {
          token = JSON.stringify(data);
          localStorage.setItem("user", token);
          setIsLoading(false);
        }

        token = JSON.parse(token).token;
        res = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        data = await res.json();

        setEmail(user.attributes.email);
        setNickname(data.message.nickname);
        setProfilePictureURL(data.message.profilePictureURL);
        setEnableNotifications(data.message.enableNotifications);
        setIncognito(data.message.incognito);
        setRadius(data.message.radius);
        setMyGroups(data.message.myGroups);
      } catch (error) {
        console.log(error);
      }
    };

    if (authStatus === "authenticated") {
      getToken();
    }
  }, [authStatus]);

  return (
    <CircleContext.Provider
      value={{
        email,
        nickname,
        setNickname,
        profilePictureURL,
        setProfilePictureURL,
        updateFrequency,
        setUpdateFrequency,
        incognito,
        toggleIncognito,
        location,
        setMyGroups,
        myGroups,
        selectedGroupLocations,
        setSelectedGroupLocations,
        activeGroupCode,
        setActiveGroupCode,
        setSelectedGroupMembers,
        selectedGroupMembers,
        setSelectedGroupName,
        selectedGroupName,
      }}
    >
      {props.children}
    </CircleContext.Provider>
  );
}
