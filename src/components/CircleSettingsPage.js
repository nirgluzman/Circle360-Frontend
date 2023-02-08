// import { useNavigate, useParams } from "react-router-dom";
// import { useState, useEffect, useContext } from "react";

// import { CircleSettingsHeader, CircleSettingsMember } from "../ui-components";

// import { styles } from "../utils/amplifyStyles";
// import { Flex } from "@aws-amplify/ui-react";
// import { CircleContext } from "../contexts/CircleContext";
// export default function CircleSettingsPage() {
//   const userInfo = useContext(CircleContext);
//   const { activeGroupCode, selectedGroup, profilePictureURL } = userInfo;
//   const [status, setStatus] = useState("");

//   const navigate = useNavigate();

//  // DELETE GROUPMEMBER FROM GROUP
//  useEffect(() => {
//   const deleteGroup = async () => {
//     try {
//       const token = JSON.parse(localStorage.getItem("user")).token;
//       const res= await fetch(`${process.env.REACT_APP_API_URL}/group/user/${groupCode}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({  email }),
//       });
//        console.log(res)
//     } catch (error) {
//
//       console.log(error);

//     }
//   };
//
//     updateLocationInDB();
//
// }, []);
//---------------------------------------------

//   return (
//     <div>
//       <Flex justifyContent="center" alignItems="center" direction="column">
//         <CircleSettingsHeader
//           style={styles.center}
//           overrides={{
//             Group: {
//               children: user.message.myGroups.map((group) => <>{group.name}</>),
//             },
//             ProfileImage: {
//               alt: "Circle360 logo",
//               src: profilePictureURL,
//               onClick: () => navigate("/userSettings"),
//             },
//            Text:{onClick:()=> navigate("/userSettings")}
//             BackIcon: {
//               className: "custom-btn",
//               onClick: () => navigate("/dashboard"),
//             },
//             InviteNewMemberButton: {
//               className: "custom-btn",
//               onClick: () => navigate("/sendinvite"),
//             },
//           }}
//         />

//         {user.message.myGroups.map((item, key) => (
//           <div key={item._id}>
//             {item.groupID.members?.map((data, key) => (
//               <>
//                 <CircleSettingsMember
//                   key={data._id}
//                   overrides={{
//                     MemberName: { children: data.email },
//                     DeleteIcon: {
//                       className: "custom-btn",
//                       onClick: () => status,
//                     },
//                   }}
//                 />
//               </>
//             ))}
//           </div>
//         ))}
//       </Flex>
//     </div>
//   );
// }
