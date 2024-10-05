import { memo } from "react";

import Language from "../Global/Language";
import { Link } from "react-router-dom";
import lock from "../../assets/icons/lock.svg";
import g from "../../assets/icons/carbon_location.svg";
import lock2 from "../../assets/6438892.png";
import UpdateProfile from "./UpdateProfile";

const MainProfile = () => {

  return (
    <div className="border border-borderColor w-full rounded-2xl overflow-hidden md:w-[450px] mx-auto my-8">
      <div className="flex flex-col my-8 py-6">
        <div className="flex flex-col gap-3 justify-center items-center">
          <UpdateProfile />
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
                  <img src={lock2} alt="lock" className="w-6 h-6" />
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
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.443 1.24805C14.076 1.24805 12.973 1.24805 12.106 1.36505C11.206 1.48505 10.448 1.74505 9.84601 2.34605C9.32201 2.87105 9.05601 3.51605 8.91701 4.27405C8.78201 5.01105 8.75601 5.91205 8.75001 6.99405C8.74895 7.19296 8.82695 7.38415 8.96685 7.52555C9.10675 7.66695 9.2971 7.74699 9.49601 7.74805C9.69492 7.74911 9.88611 7.67111 10.0275 7.53121C10.1689 7.3913 10.2489 7.20096 10.25 7.00205C10.256 5.90905 10.284 5.13405 10.392 4.54505C10.497 3.97905 10.664 3.65005 10.907 3.40705C11.184 3.13005 11.573 2.95005 12.307 2.85105C13.062 2.75005 14.063 2.74805 15.498 2.74805H16.498C17.934 2.74805 18.935 2.75005 19.69 2.85105C20.424 2.95005 20.812 3.13105 21.09 3.40705C21.366 3.68405 21.546 4.07205 21.645 4.80705C21.747 5.56105 21.748 6.56305 21.748 7.99805V15.998C21.748 17.433 21.747 18.434 21.645 19.19C21.546 19.924 21.366 20.312 21.089 20.589C20.812 20.866 20.424 21.046 19.69 21.145C18.935 21.246 17.934 21.248 16.498 21.248H15.498C14.063 21.248 13.062 21.246 12.306 21.145C11.573 21.046 11.184 20.865 10.907 20.589C10.664 20.345 10.497 20.017 10.392 19.451C10.284 18.862 10.256 18.087 10.25 16.994C10.2495 16.8956 10.2296 16.7981 10.1914 16.7073C10.1532 16.6165 10.0975 16.5342 10.0275 16.4649C9.9575 16.3956 9.87452 16.3408 9.78333 16.3036C9.69213 16.2664 9.5945 16.2475 9.49601 16.248C9.39752 16.2486 9.3001 16.2685 9.2093 16.3067C9.11851 16.3448 9.03612 16.4005 8.96685 16.4705C8.89758 16.5406 8.84278 16.6235 8.80557 16.7147C8.76837 16.8059 8.74949 16.9036 8.75001 17.002C8.75601 18.084 8.78201 18.985 8.91701 19.722C9.05701 20.48 9.32201 21.125 9.84701 21.65C10.448 22.252 11.207 22.51 12.107 22.632C12.973 22.748 14.076 22.748 15.443 22.748H16.553C17.921 22.748 19.023 22.748 19.89 22.632C20.79 22.51 21.548 22.252 22.15 21.65C22.752 21.048 23.01 20.29 23.132 19.39C23.248 18.523 23.248 17.42 23.248 16.053V7.94305C23.248 6.57605 23.248 5.47305 23.132 4.60605C23.011 3.70605 22.752 2.94805 22.15 2.34605C21.548 1.74405 20.79 1.48605 19.89 1.36505C19.023 1.24805 17.92 1.24805 16.553 1.24805H15.443Z"
                fill="#FF3B30"
              />
              <path
                d="M15.4986 11.2504C15.6975 11.2504 15.8883 11.3294 16.0289 11.47C16.1696 11.6107 16.2486 11.8015 16.2486 12.0004C16.2486 12.1993 16.1696 12.39 16.0289 12.5307C15.8883 12.6713 15.6975 12.7504 15.4986 12.7504H4.5256L6.48661 14.4304C6.63778 14.5598 6.73135 14.744 6.74672 14.9424C6.7621 15.1408 6.69803 15.3372 6.5686 15.4884C6.43918 15.6395 6.255 15.7331 6.05659 15.7485C5.85817 15.7639 5.66178 15.6998 5.51061 15.5704L2.0106 12.5704C1.92827 12.5 1.86217 12.4125 1.81684 12.3141C1.77152 12.2157 1.74805 12.1087 1.74805 12.0004C1.74805 11.892 1.77152 11.785 1.81684 11.6866C1.86217 11.5882 1.92827 11.5008 2.0106 11.4304L5.51061 8.43036C5.58546 8.36628 5.6722 8.31756 5.76588 8.287C5.85956 8.25644 5.95834 8.24463 6.05659 8.25224C6.15483 8.25986 6.25062 8.28675 6.33847 8.33138C6.42632 8.37601 6.50452 8.43751 6.5686 8.51236C6.63269 8.58722 6.6814 8.67396 6.71197 8.76764C6.74253 8.86132 6.75434 8.9601 6.74672 9.05835C6.73911 9.15659 6.71222 9.25237 6.66759 9.34022C6.62296 9.42808 6.56146 9.50628 6.48661 9.57036L4.5266 11.2504H15.4986Z"
                fill="#FF3B30"
              />
            </svg>

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