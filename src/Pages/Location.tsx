import { memo } from "react";
import location from "../assets/icons/Location2.svg";

const Location = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-locationBg">
      <div className="w-full md:w-[500px] rounded-3xl bg-body border border-borderColor2 shadow-sm mx-5">
        <div className="flex flex-col justify-center text-mainBlack">
          <div className="flex flex-col items-center gap-4 py-12 px-6">
            <img src={location} alt="location" className="w-4 h-5" />
            <h3 className="font-bold text-lg sm:text-2xl">Open device’s location?</h3>
          </div>
          <div className="flex flex-col gap-2 text-center">
            <div className="border-t border-borderColor py-1 cursor-pointer">
              <p className="font-normal text-base sm:text-xl">Allow Once</p>
            </div>
            <p className="font-normal text-base sm:text-xl border-t border-borderColor py-1 cursor-pointer">
              Allow only while using this app
            </p>
            <p className="font-normal text-base sm:text-xl border-t border-borderColor text-ry4Text py-1 cursor-pointer">Don’t Allow</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Location);
