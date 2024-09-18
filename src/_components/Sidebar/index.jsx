import PropTypes from "prop-types";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faBell,
  faBookmark,
  faEllipsisH,
  faEnvelope,
  faFeatherAlt,
  faHashtag,
  faHome,
  faUser,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItem = ({ icon, text }) => (
  <div className="flex items-center p-3 rounded-full cursor-pointer hover:bg-gray-600 transition duration-200">
    <FontAwesomeIcon icon={icon} className="text-1xl mr-4" />
    <span className="text-sm hidden xl:inline">{text}</span>
  </div>
);

export function Sidebar() {
  return (
    <div className="w-20 xl:w-64 sticky top-0 px-4 h-screen">
      <FontAwesomeIcon
        icon={faTwitter}
        className="text-twitter-blue text-3xl m-4"
      />
      <nav className="mt-4">
        <NavItem icon={faHome} text="Home" />
        <NavItem icon={faHashtag} text="Explore" />
        <NavItem icon={faBell} text="Notifications" />
        <NavItem icon={faEnvelope} text="Messages" />
        <NavItem icon={faBookmark} text="Bookmarks" />
        <NavItem icon={faUserFriends} text="Communities" />
        <NavItem icon={faTwitter} text="Premium" />
        <NavItem icon={faUser} text="Profile" />
        <NavItem icon={faEllipsisH} text="More" />
      </nav>
      <button className="bg-twitter-blue rounded-full text-white font-bold px-4 py-3 mt-4 w-full cursor-pointer">
        <FontAwesomeIcon
          icon={faFeatherAlt}
          className="text-white inline xl:hidden"
        />
        <span className="hidden xl:inline">Twitter</span>
      </button>
    </div>
  );
}

NavItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
};
