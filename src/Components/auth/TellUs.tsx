import { memo } from "react";
import imageLogo from "../../assets/logolight.jpg";

const TellUs = () => {
  return (
    <div className="container p-8">
      <div className="flex flex-col-reverse md:flex-row h-full">
        <div className="flex-1">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="font-bold text-lg sm:text-2xl text-mainBlack">
              Tell Us more about you
            </h2>
            <div className="flex items-center justify-between py-8">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-white border-2 border-gray-400 rounded-full"></div>
                <span className="ml-2 text-sm text-gray-500">User data</span>
              </div>

              <div className="flex-1 mx-4 border-t border-gray-300"></div>

              <div className="flex items-center">
                <div className="w-4 h-4 bg-white border-2 border-gray-400 rounded-full"></div>
                <span className="ml-2 text-sm text-gray-500">Location</span>
              </div>
            </div>
            <div className="w-full">
              <form className="flex flex-col gap-3">
                <label className="text-lg font-bold">
                  Gender <span className="text-red">*</span>
                </label>
                <div className="flex items-center gap-8 p-2 w-full md:w-1/2">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="male"
                      name="fav_language"
                      value="male"
                    />
                    <label className="text-xl font-normal">Male</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="female"
                      name="fav_language"
                      value="female"
                    />
                    <label className="text-xl font-normal">Female</label>
                  </div>
                </div>
                <div className="flex flex-col gap-3 w-full md:w-1/2">
                  <label className="text-lg font-bold">
                    Age <span className="text-red">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder=""
                    className="rounded-lg p-2 focus:outline-none border border-borderColor"
                  />
                </div>
                <div className="w-full md:w-[80%] flex justify-end mx-auto mt-4 p-2">
                  <button
                    type="submit"
                    className="w-[280px] rounded-3xl p-2 focus:outline-none text-lg font-bold bg-mainBlack text-white"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[230px] h-[230px] md:w-[300px] md:h-[300px] mt-0 md:mt-52">
            <img
              src={imageLogo}
              alt="imageLogo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(TellUs);
