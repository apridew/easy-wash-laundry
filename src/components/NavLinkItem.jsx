import { Button, Divider } from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const NavLinkItem = ({ title, icon, href }) => {
  const isLogout = title === "Sign Out";
  const path = useLocation().pathname;
  const isActive = path === href;
  const handleLogout = () => {
    isLogout && localStorage.clear();
  };

  return (
    <Link to={href} onClick={handleLogout} className="hover:opacity-70">
      <i
        className={`${icon} active:opacity-80 text-xl
        ${
          isActive
            ? "text-blue-500 text-2xl md:border-2 rounded-lg md:p-2 border-blue-500"
            : ""
        }
        ${isLogout ? "text-red-500" : isActive || "text-slate-500"}`}
      ></i>

      <Button
        color={isLogout ? "danger" : "primary"}
        variant="light"
        className={`w-full mb-2 uppercase text-xs sm:left-36 p-0 group-hover:left-0 font-semibold disabled:opacity-80
          ${isActive ? "text-slate-500" : ""}`}
        radius="none"
        onClick={handleLogout}
        isDisabled={true}
      >
        {title}
      </Button>
      <Divider className="mb-0 sm:mb-4" />
    </Link>
  );
};

NavLinkItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  href: PropTypes.string,
};

export default NavLinkItem;
