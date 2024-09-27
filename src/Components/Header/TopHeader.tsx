import { memo } from "react";
import { Link } from "react-router-dom";
import location from "../../assets/location.webp";
import drop_down from "../../assets/ic_baseline-arrow-drop-down.webp";
import Language from "../Global/Language";

function TopHeader() {
  return (
    <div className="container">
      <div className="py-2">
        <div className="grid grid-cols-2 place-content-center">
          <div className="flex flex-col justify-center items-center md:items-start w-[100vw] md:w-auto">
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
                to={"/location"}
                className="text-primary text-base font-normal leading-4 border-b border-b-primary"
              >
                Change location
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Language />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(TopHeader);
