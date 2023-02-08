import logo from "../images/logo.png";
import { styles } from "../utils/amplifyStyles";

import { useNavigate } from "react-router-dom";

import { Home } from "../ui-components";

export default function HomePage() {
  const navigate = useNavigate();

  const HomeOverrides = {
    Logo: {
      alt: "Circle360 logo",
      src: logo,
    },
    GetStartedButton: {
      className: "GetStartedButton",
      onClick: () => navigate("/auth"),
    },
  };

  return (
    <>
      <Home style={styles.center} overrides={HomeOverrides} />
    </>
  );
}
