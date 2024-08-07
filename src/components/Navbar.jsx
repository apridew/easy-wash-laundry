import Logo from "./Logo";
import { Link } from "react-router-dom";
import { Avatar, Tooltip } from "@nextui-org/react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { getUsername } from "../lib/helpers";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5 border-b-1 border-slate-300 bg-slate-50 fixed z-50 w-full">
      <Logo />
      <Tooltip
        placement="left-start"
        className="capitalize mt-2"
        content={`User : ${getUsername()}`}
      >
        <Avatar
          name={getUsername().charAt(0).toUpperCase()}
          isBordered={true}
          className="hidden sm:block"
        />
      </Tooltip>

      {/* Mobile Button */}
      <div className="flex gap-6 items-center sm:hidden">
        <Popover placement="bottom">
          <PopoverTrigger>
            <Avatar
              name={getUsername().charAt(0).toUpperCase()}
              isBordered={true}
              size="sm"
            />
          </PopoverTrigger>
          <PopoverContent>
            <p>User : {getUsername()}</p>
          </PopoverContent>
        </Popover>

        <Link
          to={"/login"}
          onClick={() => localStorage.clear()}
          className="sm:hidden"
        >
          <i className="bi bi-box-arrow-left text-xl text-red-500 active:scale-95"></i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
