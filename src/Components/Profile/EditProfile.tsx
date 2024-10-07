import { memo, useRef } from "react";
import MainProfile from "./MainProfile";
import BreadCrumb from "../Global/BreadCrumb";

import ProfileForm from "./ProfileForm";
import { Link } from "react-router-dom";
import rightArrow from "../../assets/icons/right-arrow.svg";
import avter from "../../assets/avter.webp";
import camera from "../../assets/icons/camera.svg";

const EditProfile = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  return (
    <>
      <div className="block lg:hidden">
        <BreadCrumb title={"Edit Profile"} subTitle={"Edit Profile"} />
      </div>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 my-10">
          <div className="hidden lg:block">
            <MainProfile />
          </div>
          <div className="p-1">
            <div className="w-full pb-8">
              <Link
                to={"/profile"}
                className="font-normal text-sm flex gap-1 items-center "
              >
                <div className="hover:bg-ryBackground duration-300 rounded-full p-3">
                  <img
                    src={rightArrow}
                    alt="rightArrow"
                    className="w-3 h-3 rotate-180"
                  />
                </div>
                Back
              </Link>
            </div>
            <div className="flex justify-center items-center pb-4 overflow-hidden">
              <div className="w-20 h-20 relative">
                <img
                  src={avter}
                  alt="avter"
                  className="w-20 h-20 object-cover rounded-full"
                />
                <div className="absolute top-0 left-0 ">
                  <div className="relative">
                    <input
                      type="file"
                      name="image"
                      ref={inputRef}
                      className="opacity-0"
                    />
                    <div className="flex justify-center items-center backdrop-blur-[1px] bg-white/10 w-20 h-20 absolute top-0 left-0 rounded-full">
                      <img
                        src={camera}
                        alt="camera"
                        className="cursor-pointer  w-8 h-8"
                        onClick={handleClick}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ProfileForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(EditProfile);
