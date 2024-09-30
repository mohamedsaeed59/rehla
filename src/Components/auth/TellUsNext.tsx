import { memo, useState } from "react";
import imageLogo from "../../assets/logolight.jpg";
import MenuCity from "../Global/MenuCity";
import Location from "../../Pages/Location";

const TellUsNext = () => {
  const [openMenuCity, setOpenMenuCity] = useState<boolean>(false);

  const [openLocation, setOpenLocation] = useState<boolean>(false);

  const handleOpenLocation = () => {
    setOpenLocation(!openLocation);
  };

  const handleOpenMenuCity = () => {
    setOpenMenuCity(!openMenuCity);
  };
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        <div className="flex flex-col gap-4 order-2 md:order-1">
          <div className="flex flex-col items-center transform md:translate-x-1/2">
            <h2 className="font-bold text-lg sm:text-2xl text-mainBlack py-4">
              Tell Us more about you
            </h2>

            <div className="w-[280px] md:w-[300px] mx-auto my-3 flex justify-between items-center">
              <ol className="flex w-full text-xs text-gray-900 font-medium sm:text-base">
                <li className="flex w-full relative text-mainBlack  after:content-[''] after:w-full after:h-[1px]  after:bg-mainBlack after:inline-block after:absolute after:top-[12px] after:left-[24px]">
                  <div className="block whitespace-nowrap z-10">
                    <span className="w-6 h-6 border-2 border-mainBlack rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white">
                     x
                    </span>{" "}
                  </div>
                </li>
                <li className="flex text-gray-900">
                  <div className="block whitespace-nowrap z-10">
                    <span className="w-6 h-6 bg-body border-2 border-borderColor rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-indigo-600"></span>{" "}
                    Location
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div className="w-full mt-0 md:mt-20">
            <form className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-lg font-normal">
                  City <span className="text-red">*</span>
                </label>
                <input
                  type="text"
                  value={"Masul"}
                  onClick={handleOpenMenuCity}
                  className="rounded-lg p-2 focus:outline-none focus:border-primary border border-borderColor"
                />
                {openMenuCity && <MenuCity />}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-lg font-normal">
                  Address <span className="text-ry3Text">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={"22str, Iraq"}
                  className="rounded-lg p-2 focus:outline-none focus:border-primary border border-borderColor"
                />
              </div>
              <div className="flex justify-end mt-4 py-2">
                <div
                  //   type="submit"
                  onClick={() => handleOpenLocation()}
                  className="w-[280px] rounded-3xl p-2 text-center focus:outline-none text-lg font-bold bg-mainBlack text-white"
                >
                  Save
                </div>
              </div>
              {openLocation && <Location />}
            </form>
          </div>
        </div>
        <div className="flex justify-center items-center order-1 md:order-2">
          <img
            src={imageLogo}
            alt="imageLogo"
            className="object-contain w-[230px] h-[230px] md:w-[300px] md:h-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(TellUsNext);
