import React from "react";
import { CiLogout } from "react-icons/ci";
import { CgLogOut } from "react-icons/cg";

const Logout = () => {
  return (
    <abbr title="Logout">
      <CgLogOut className="text-xl mr-1 text-white sm:text-themeColor font-bold cursor-pointer" />
    </abbr>
  );
};

export default Logout;
