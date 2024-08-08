import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center justify-center space-x-2 hover:scale-105 cursor-pointer active:scale-95 transition-all duration-300">
      <Link to={"/"} className="text-sm font-bold text-slate-600 flex">
        <Image
          src="/src/assets/logo.svg"
          alt="logo"
          width={35}
          className="rounded-none"
        />
        <span className="text-blue-500 ms-4">
          Easy Wash <br /> <span className="text-slate-600">Laundry</span>
        </span>
      </Link>
    </div>
  );
};

export default Logo;
