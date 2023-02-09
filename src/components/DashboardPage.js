/* global google */
import uuid from "react-uuid";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CircleContext } from "../contexts/CircleContext";
import { Flex } from "@aws-amplify/ui-react";

import { DashboardHeader, DashboardCircle } from "../ui-components";
import Map from "./Map";

// Google Maps
import { useLoadScript } from "@react-google-maps/api";

export default function DashboardPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const userInfo = useContext(CircleContext);
  const {
    setActiveGroupCode,
    setSelectedGroupLocations,
    myGroups,
    setSelectedGroupName,
    profilePictureURL,
  } = userInfo;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const DashboardPageOverrides = {
    ProfileImage: {
      alt: "Profile image",
      src: profilePictureURL,
      onClick: () => navigate("/usersettings"),
    },

    JoinButton: {
      className: "custom-btn",
      //isDisabled: myGroups.length > 4,
      onClick: () => navigate("/joincircle"),
    },
    CreateNewButton: {
      className: "custom-btn",
      //isDisabled: myGroups.length > 4,
      onClick: () => navigate("/creategroup"),
    },
  };

  const getMembersLocations = async (code) => {
    try {
      const token = JSON.parse(localStorage.getItem("user")).token;
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/group/${code}/locations`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      setSelectedGroupLocations(data.message.group);
      setActiveGroupCode(code);
    } catch (error) {
      console.log(error);
    }
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // alert(calcDistance(p1, p2));

  // //calculates distance between two points in km's
  // function calcDistance(p1, p2) {
  //   return (
  //     google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000
  //   ).toFixed(2);
  // }

  return (
    <Flex justifyContent="center" alignItems="center" direction="column">
      <DashboardHeader overrides={DashboardPageOverrides} />

      {myGroups?.map((g) => (
        <div key={uuid()}>
          <DashboardCircle
            key={uuid()}
            overrides={{
              CircleName: {
                children: g.name,
                onClick: () => getMembersLocations(g.groupID.groupCode),
              },
              // DeleteIcon: {
              //   className: "custom-btn",
              //   onClick: () => navigate("/"),
              // },
              ConfigIcon: {
                className: "custom-btn",
                onClick: () => {
                  setSelectedGroupName(g.name);
                  setActiveGroupCode(g.groupID.groupCode);
                  navigate("/circlesettings");
                },
              },
            }}
          />
        </div>
      ))}

      <Map />
    </Flex>
  );
}
