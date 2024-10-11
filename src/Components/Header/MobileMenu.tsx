import { memo } from "react";
import close from "../../assets/icons/close.svg";
import UpdateProfile from "../Profile/UpdateProfile";
import { Link } from "react-router-dom";
import save from "../../assets/icons/save.svg";
import lock from "../../assets/icons/lock.svg";
import Language from "../Global/Language";
import { motion } from "framer-motion";

type mobileMenu = {
  setOpen: (open: boolean) => void;
};

function MobileMenu({ setOpen }: mobileMenu) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      exit={{ y: "-100vh" }}
      className="w-screen h-full absolute top-0 rtl:left-0 ltr:right-0 backdrop-blur-[8px] bg-black/5 z-50 duration-700"
      transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <div className="mt-20 mx-1 duration-500 w-full px-4 bg-white shadow-shadow rounded-bl-3xl rounded-br-3xl">
        <div className="p-2">
          <div className="text-end">
            <button onClick={handleClose}>
              <img src={close} alt="close" className="w-14 h-14 object-cover" />
            </button>
          </div>
          <div>
            <UpdateProfile />

            <div className="flex flex-col gap-4 py-4">
              <div className="flex justify-center items-center cursor-pointer rounded-xl bg-ryBackground shadow-lg py-2 hover:bg-ry4Text duration-700">
                <Link
                  to={"/bookings"}
                  className="flex justify-center items-center flex-col gap-1"
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_10109_1788)">
                      <path
                        d="M14.0538 11.9513C14.271 11.6041 14.363 11.3196 14.3305 11.2051C14.3073 11.1241 13.9207 11.1861 13.4312 11.3091C13.1252 10.8916 12.8362 10.5996 12.7262 10.6318C12.6152 10.6641 12.53 11.0656 12.4975 11.5831C12.0188 11.7433 11.66 11.9001 11.6845 11.9801C11.6935 12.0106 11.7182 12.0468 11.754 12.0863C10.4948 12.2641 9.294 12.5528 8.393 12.6653C8.15793 12.6954 7.92123 12.7109 7.68425 12.7118C6.698 12.7118 6.14925 12.4158 5.34025 12.3071L8.5095 7.15456C8.83971 7.06356 9.18476 7.03934 9.52445 7.08334C9.86413 7.12735 10.1916 7.23867 10.4878 7.41081C10.8312 7.6075 11.1247 7.88072 11.3454 8.20924C11.5662 8.53776 11.7082 8.91274 11.7605 9.30506C12.1264 9.15415 12.5222 9.08964 12.9171 9.11652C13.312 9.1434 13.6954 9.26096 14.0375 9.46006C14.3378 9.63243 14.6004 9.86343 14.8097 10.1393C15.0189 10.4152 15.1705 10.7304 15.2555 11.0661C16.3305 7.62656 14.9222 3.75381 11.6772 1.75106L12.1805 0.880062C12.2117 0.822737 12.2192 0.755512 12.2015 0.692714C12.1838 0.629916 12.1423 0.57651 12.0858 0.543878C12.0293 0.511245 11.9623 0.501966 11.899 0.518019C11.8358 0.534071 11.7813 0.574185 11.7472 0.629812L11.2443 1.50106C7.8875 -0.308188 3.8295 0.408312 1.3885 3.05881C1.72171 2.96465 2.07046 2.93845 2.414 2.98179C2.75754 3.02512 3.08886 3.1371 3.38825 3.31106C3.73174 3.50778 4.02525 3.78103 4.24598 4.1096C4.46672 4.43817 4.60874 4.8132 4.661 5.20556C5.02692 5.05466 5.42271 4.99014 5.81761 5.01702C6.21251 5.0439 6.5959 5.16146 6.938 5.36056C7.50382 5.68627 7.92479 6.21475 8.11575 6.83906L4.777 12.2678L4.747 12.2671C4.539 12.2671 4.3115 12.2808 4.057 12.3136C2.9205 12.4593 1 13.4998 1 13.4998V15.4998H16V12.2496C16 12.2496 15.0828 12.0093 14.0538 11.9513ZM15.5 14.9998H1.5V13.8026C2.152 13.4711 3.38275 12.9041 4.1205 12.8093C4.23975 12.7938 4.35325 12.7836 4.464 12.7768L3.86575 13.7496L4.299 13.9998L5.0485 12.7813C5.4265 12.8103 5.7435 12.8881 6.0725 12.9718C6.53525 13.0898 7.01375 13.2116 7.68425 13.2116C7.93125 13.2116 8.1835 13.1953 8.455 13.1613C8.916 13.1038 9.44875 13.0023 10.0122 12.8951C10.7717 12.7503 11.6 12.5946 12.429 12.5076C12.4493 12.5163 12.4678 12.5251 12.4888 12.5338C12.5103 13.0113 12.5415 13.3723 12.6453 13.3871C12.827 13.4133 13.039 13.1628 13.3667 12.8196C13.8278 12.9318 14.1418 13.0281 14.2805 12.9083C14.3348 12.8608 14.2708 12.6926 14.1482 12.4583C14.6023 12.4931 15.0537 12.5567 15.4998 12.6488L15.5 14.9998Z"
                        fill="#B0B0B0"
                      />
                      <path
                        d="M2.76123 14.1392L2.51123 13.8892L2.76123 13.6392L3.01123 13.8892L2.76123 14.1392ZM3.43323 14.6392L3.18323 14.3892L3.43323 14.1392L3.68323 14.3892L3.43323 14.6392ZM3.43323 13.5137L3.55823 13.6387L3.43323 13.7637L3.30823 13.6387L3.43323 13.5137ZM4.24548 14.2642L4.12048 14.1392L4.24548 14.0142L4.37048 14.1392L4.24548 14.2642ZM2.63623 14.7642L2.51123 14.6392L2.63623 14.5142L2.76123 14.6392L2.63623 14.7642ZM1.97998 14.2642L1.85498 14.1392L1.97998 14.0142L2.10498 14.1392L1.97998 14.2642ZM9.62048 13.8892L9.49548 13.7642L9.62048 13.6392L9.74548 13.7642L9.62048 13.8892ZM10.855 14.3894L10.73 14.2644L10.855 14.1394L10.98 14.2644L10.855 14.3894ZM11.2142 13.8892L11.0892 13.7642L11.2142 13.6392L11.3392 13.7642L11.2142 13.8892ZM11.7927 14.1394L11.6677 14.0144L11.7927 13.8894L11.9175 14.0144L11.7927 14.1394ZM12.2877 13.2637L12.4127 13.3887L12.2877 13.5137L12.1627 13.3887L12.2877 13.2637ZM15.0577 13.7189L14.9327 13.8439L14.8075 13.7189L14.9325 13.5939L15.0577 13.7189ZM14.2367 14.2642L14.1117 14.1392L14.2367 14.0142L14.3617 14.1392L14.2367 14.2642ZM14.4325 13.6392L14.3075 13.7642L14.1825 13.6394L14.3075 13.5144L14.4325 13.6392ZM10.4637 14.1392L10.2137 13.8892L10.4637 13.6392L10.7137 13.8892L10.4637 14.1392ZM14.5572 13.0137L14.8072 13.2637L14.5572 13.5137L14.3072 13.2637L14.5572 13.0137ZM12.5377 14.5142L12.288 14.2642L12.538 14.0142L12.788 14.2642L12.5377 14.5142Z"
                        fill="#B0B0B0"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_10109_1788">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <p className="font-medium text-mainBlack text-[18px]">
                    My Bookings
                  </p>
                </Link>
              </div>

              <div className="flex justify-center items-center cursor-pointer rounded-xl bg-ryBackground shadow-lg py-2 hover:bg-ry4Text duration-700">
                <Link
                  to={"/savedchalets"}
                  className="flex justify-center items-center flex-col gap-1"
                >
                  <img src={save} alt="save" className="w-5 h-5 object-cover" />

                  <p className="font-medium text-mainBlack text-[18px]">
                    Saved Chalets
                  </p>
                </Link>
              </div>

              <div className="flex justify-center items-center cursor-pointer rounded-xl bg-ryBackground shadow-lg py-2 hover:bg-ry4Text duration-700">
                <Link
                  to={"/terms-conditions"}
                  className="flex justify-center items-center flex-col gap-1"
                >
                  <img src={lock} alt="lock" className="w-5 h-5 object-cover" />

                  <p className="font-medium text-mainBlack text-[18px]">
                    Terms & Conditions
                  </p>
                </Link>
              </div>

              <div className="flex justify-center items-center cursor-pointer rounded-xl bg-ryBackground shadow-lg py-2 hover:bg-ry4Text duration-700">
                <Link
                  to={"/privacy-policy"}
                  className="flex justify-center items-center flex-col gap-1"
                >
                  <svg
                    width="17"
                    height="20"
                    viewBox="0 0 21 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.81349 18.315H11.1885V10.5422H9.81349V18.315ZM10.501 8.37387C10.7411 8.37387 10.9424 8.29273 11.1046 8.13049C11.2659 7.96824 11.3466 7.76749 11.3466 7.52824C11.3466 7.28806 11.2655 7.08687 11.1032 6.92461C10.941 6.76235 10.7402 6.68169 10.501 6.68262C10.2617 6.68353 10.061 6.76466 9.89873 6.92599C9.73648 7.08732 9.65536 7.28854 9.65536 7.5296C9.65536 7.77069 9.73648 7.97145 9.89873 8.13188C10.061 8.29228 10.2617 8.37294 10.501 8.37387ZM10.501 24.8216C7.73816 24.0011 5.44328 22.3278 3.61636 19.8015C1.78944 17.2751 0.875977 14.4284 0.875977 11.2614V3.82535L10.501 0.229736L20.1259 3.82535V11.2614C20.1259 14.4275 19.2125 17.2739 17.3857 19.8C15.5588 22.3264 13.2638 23.9993 10.501 24.8216ZM10.501 23.3628C12.8843 22.6065 14.8552 21.094 16.4134 18.8253C17.9719 16.5565 18.7511 14.0357 18.7511 11.2627V4.76449L10.501 1.69824L2.25098 4.76449V11.2614C2.25098 14.0343 3.03015 16.5551 4.58848 18.8238C6.14682 21.0926 8.11766 22.6065 10.501 23.3628Z"
                      fill="#1E1E1E"
                    />
                  </svg>

                  <p className="font-medium text-mainBlack text-[18px]">
                    Privacy & Policy
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center flex-col sm:flex-row justify-center sm:justify-between sm:w-[60%] py-3">
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
              <div className="flex flex-col items-center mb-3">
                <div className="flex justify-center items-center gap-1">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 13.2805L9.5 5.78052L13 13.2805M7 11.2805H12M1 3.02753C2.327 2.86353 3.663 2.78152 5 2.78052M5 2.78052C5.747 2.78052 6.488 2.80551 7.223 2.85651M5 2.78052V1.28052M7.223 2.85651C6.451 6.38551 4.127 9.33352 1 10.9485M7.223 2.85651C7.82 2.89751 8.412 2.95453 9 3.02753M5.941 8.69153C4.847 7.57953 3.98 6.26652 3.389 4.82352"
                      stroke="#1E1E1E"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <h2 className="font-semibold text-sm text-mainBlack text-center my-4">
                    Language
                  </h2>
                </div>
                <Language />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default memo(MobileMenu);
