import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";

function SocialMediaIcon({ icon }) {
  const [hoverIcon, setHoverIcon] = useState(false);
  return (
    <>
      <a
        onMouseEnter={() => setHoverIcon(true)}
        onMouseLeave={() => setHoverIcon(false)}
        href=""
        className="ms-2"
      >
        <li>
          <FontAwesomeIcon
            bounce={hoverIcon}
            className="fs-2"
            icon={icon}
            size="xs"
            style={{ color: "#212529" }}
          />
        </li>
      </a>
    </>
  );
}

SocialMediaIcon.propTypes = {
  icon: PropTypes.object.isRequired,
};

export default SocialMediaIcon;
