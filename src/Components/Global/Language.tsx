import {memo } from "react";
import { NavLink } from "react-router-dom";


const Language = () => {
  return (
    <div className="flex items-center h-full">
    <div className="flex justify-end  gap-4 xl:justify-start text-mainBlack">
      <div className="text-mainBlack">
        <NavLink
          to={"/home"}
          className="active-btn rounded-3xl border py-1 px-3 bg-ryBackground hover:bg-slate-200"
        >
          English
        </NavLink>
      </div>
      <div className="text-mainBlack">
        <NavLink
          to={"/dd"}
          className="active-btn rounded-3xl border py-1 px-3 bg-ryBackground"
        >
          العربية
        </NavLink>
      </div>
    </div>
  </div>
  );
}

export default memo(Language);