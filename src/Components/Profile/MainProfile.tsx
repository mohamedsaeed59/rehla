import { memo } from "react";
import avter from "../../assets/avter.webp";
import Language from "../Global/Language";
import { Link } from "react-router-dom";
import lock from "../../assets/icons/lock.svg";
import logout from "../../assets/icons/logout.svg";
import g from "../../assets/icons/carbon_location.svg";

const MainProfile = () => {
  // md:w-[40%]
  return (
    <div className="border border-borderColor w-full rounded-2xl overflow-hidden md:w-[450px] mx-auto m-0">
      <div className="flex flex-col my-8 py-6">
        <div className="flex flex-col gap-3 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <img
              src={avter}
              alt="avter"
              className="w-14 object-cover rounded-full"
            />
            <h2 className="font-medium text-xl text-mainBlack">Yomna Asharf</h2>
            <Link
              to={"/editprofile"}
              className="text-primary border-b border-primary"
            >
              Update Profile
            </Link>
          </div>
          <div className="flex flex-col items-center gap-4 mt-6 mb-3">
            <div className="flex justify-center items-center rounded-xl bg-ryBackground shadow-lg w-[170px] h-[100px] hover:bg-ry4Text duration-700">
              <Link
                to={"/chate"}
                className="flex justify-center items-center flex-col gap-1"
              >
                <img src={g} alt="location" className="w-5 h-5" />
                <p className="font-medium text-mainBlack text-[16px]">
                  Chat Us
                </p>
              </Link>
            </div>
            <div className="flex gap-4 flex-wrap justify-center items-center border-b border-borderColor pb-8">
              <div className="flex justify-center items-center rounded-xl bg-ryBackground shadow-lg w-[170px] h-[100px] hover:bg-ry4Text duration-700">
                <Link
                  to={"/terms-conditions"}
                  className="flex justify-center items-center flex-col gap-1"
                >
                  <img src={lock} alt="lock" className="w-5 h-5" />
                  <p className="font-medium text-mainBlack text-[16px]">
                    Terms & Conditions
                  </p>
                </Link>
              </div>
              <div className="flex justify-center items-center  rounded-xl bg-ryBackground shadow-lg w-[170px] h-[100px] hover:bg-ry4Text duration-700">
                <Link
                  to={"/privacy-policy"}
                  className="flex justify-center items-center flex-col gap-1"
                >
                  <img src={lock} alt="lock" className="w-5 h-5" />
                  <p className="font-medium text-mainBlack text-[16px]">
                    Privacy & Policy
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-lg text-mainBlack text-center my-4">
              Language
            </h2>
            <Language />
          </div>
          <div className="flex flex-col justify-center items-center my-4 cursor-pointer p-2 hover:bg-ry4Text duration-700 rounded-lg">
            <img src={logout} alt="logout" className="w-5 h-5" />
            <Link to={"/"} className="text-red">
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(MainProfile);
