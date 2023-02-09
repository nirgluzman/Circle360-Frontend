import uuid from "react-uuid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { CircleSettingsHeader, CircleSettingsMember } from "../ui-components";

import { styles } from "../utils/amplifyStyles";
import { Flex, Alert } from "@aws-amplify/ui-react";
import { CircleContext } from "../contexts/CircleContext";

export default function CreateGroupPage() {
  const navigate = useNavigate();
  const userInfo = useContext(CircleContext);
  const {
    profilePictureURL,
    selectedGroupName,
    setSelectedGroupName,
    selectedGroupMembers,
    activeGroupCode,
    setActiveGroupCode,
  } = userInfo;

  const [deleteMessage, setDeleteMessage] = useState(null);

  // delete a member from a group
  const deleteMember = async (memberEmail) => {
    try {
      setDeleteMessage(null);
      const token = JSON.parse(localStorage.getItem("user")).token;
      const res = await axios({
        method: "DELETE",
        url: `${process.env.REACT_APP_API_URL}/group/user/${activeGroupCode}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: {
          email: memberEmail,
        },
      });
      setDeleteMessage(res.response.data.message);
    } catch (err) {
      setDeleteMessage(err.response.data.message);
      console.log(err);
    }
  };

  // create new group in DB
  useEffect(() => {
    const createGroup = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("user")).token;
        let res = await axios({
          method: "POST",
          url: `${process.env.REACT_APP_API_URL}/group`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setActiveGroupCode(res.data.message.groupID);

        res = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_API_URL}/user`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setSelectedGroupName(res.data.message.myGroups.at(-1).name);
      } catch (err) {
        console.log(err);
      }
    };
    createGroup();
  }, []);

  return (
    <div>
      <Flex justifyContent="center" alignItems="center" direction="column">
        <CircleSettingsHeader
          style={styles.center}
          overrides={{
            Group: { children: selectedGroupName },
            ProfileImage: {
              alt: "Profile image",
              src: profilePictureURL,
              onClick: () => navigate("/usersettings"),
            },
            Text: { onClick: () => navigate("/dashboard") },
            BackIcon: {
              className: "custom-btn",
              onClick: () => navigate("/dashboard"),
            },
            InviteNewMemberButton: {
              className: "custom-btn",
              onClick: () => navigate("/sendinvite"),
            },
            InvitationCode: {
              children: activeGroupCode,
            },

            // PushSwitchField: {
            //   onChange: () => setPublic((prev) => !prev),
            // },
          }}
        />

        {selectedGroupMembers?.map((m) => (
          <CircleSettingsMember
            key={uuid()}
            overrides={{
              MemberName: {
                children: m.userID.nickname,
              },
              DeleteIcon: {
                className: "custom-btn",
                onClick: () => deleteMember(m.userID.email),
              },
            }}
          />
        ))}
      </Flex>
    </div>
  );
}
