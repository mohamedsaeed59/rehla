import { memo } from "react";
import { Link, NavLink } from "react-router-dom";
import location from "../../assets/location.webp";
import drop_down from "../../assets/ic_baseline-arrow-drop-down.webp";

function TopHeader() {
  return (
    <div className="container">
    <div className="py-2">
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-center md:items-start w-[100vw] md:w-auto">
          <div className="flex items-center gap-1 text-mainBlack">
            <img src={location} alt="location" className="w-3" />
            <p className="text-base font-normal line-clamp-1">
              15 Street, 41266 ,Zackary Route, Emirates
            </p>
            <img
              src={drop_down}
              alt="drop_down"
              className="w-4 cursor-pointer"
            />
          </div>
          <div className="pl-3 text-center sm:text-start">
            <Link
              to={"/"}
              className="text-primary text-base font-normal leading-4 border-b border-b-primary"
            >
              Change location
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex items-end justify-end gap-4 xl:justify-start text-mainBlack">
            <div className="text-mainBlack">
              <NavLink to={"/"} className="active-btn rounded-3xl border py-1 px-3 bg-ryBackground">English</NavLink>
            </div>
            <div className="text-mainBlack">
              <NavLink to={"/dd"} className="active-btn rounded-3xl border py-1 px-3 bg-ryBackground">العربية</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default memo(TopHeader);
