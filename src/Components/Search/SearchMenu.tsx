import { memo } from "react";
import location from "../../assets/icons/Location2.svg";
import arrow from "../../assets/icons/right-arrow.svg";
import { useNavigate } from "react-router-dom";

const SearchMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute top-12 z-20 rtl:left-0 ltr:right-0 rounded-lg bg-white border border-borderColor2 duration-300">
      <div className="w-[300px] md:w-[340px]">
        <div className="flex flex-col gap-2 p-2">
          <h4 className="font-medium text-lg sm:text-2xl">Location</h4>
          <div className="flex justify-between items-center p-1 my-1">
            <div className="flex items-center gap-1">
              <img src={location} alt="location" className="w-3 h-3" />
              <p className="font-medium">Location , Iraq</p>
            </div>
            <img src={arrow} alt="arrow" className="w-3 h-3" />
          </div>
          <div className="flex justify-between items-center p-1 my-1">
            <div className="flex items-center gap-1">
              <img src={location} alt="location" className="w-3 h-3" />
              <p className="font-medium">Location , Iraq</p>
            </div>
            <img src={arrow} alt="arrow" className="w-3 h-3" />
          </div>
          <div className="flex justify-between items-center p-1 my-1">
            <div className="flex items-center gap-1">
              <img src={location} alt="location" className="w-3 h-3" />
              <p className="font-medium">Location , Iraq</p>
            </div>
            <img src={arrow} alt="arrow" className="w-3 h-3" />
          </div>
          <h4 className="font-medium text-lg sm:text-2xl">Chalet name</h4>
          <div className="flex justify-between items-center p-1 my-1">
            <div>
              <div className="flex items-center gap-1 text-primary">
                <img src={location} alt="location" className="w-5 h-5" />
                <p className="text-lg">Balanda Chalet</p>
              </div>
              <div className="flex items-center gap-1 pl-3">
                <img src={location} alt="location" className="w-3 h-3" />
                <p className="text-ry3Text">Location , Iraq</p>
              </div>
            </div>
            <img src={arrow} alt="arrow" className="w-3 h-3" />
          </div>
          <div className="flex justify-between items-center p-1 my-1">
            <div>
              <div className="flex items-center gap-1 text-primary">
                <img src={location} alt="location" className="w-5 h-5" />
                <p className="text-lg">Balanda Chalet</p>
              </div>
              <div className="flex items-center gap-1 pl-3">
                <img src={location} alt="location" className="w-3 h-3" />
                <p className="text-ry3Text">Location , Iraq</p>
              </div>
            </div>
            <img src={arrow} alt="arrow" className="w-3 h-3" />
          </div>
          <div className="flex justify-between items-center p-1 my-1">
            <div>
              <div className="flex items-center gap-1 text-primary">
                <img src={location} alt="location" className="w-5 h-5" />
                <p className="text-lg">Balanda Chalet</p>
              </div>
              <div className="flex items-center gap-1 pl-3">
                <img src={location} alt="location" className="w-3 h-3" />
                <p className="text-ry3Text">Location , Iraq</p>
              </div>
            </div>
            <img src={arrow} alt="arrow" className="w-3 h-3" />
          </div>

          <div className="m-1">
            <button
              onClick={() => navigate("/search")}
              type="submit"
              className="w-full rounded-3xl p-2 focus:outline-none text-lg font-bold hover:bg-mainBlack border border-mainBlack hover:text-white text-mainBlack duration-300"
            >
              Show all search results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(SearchMenu);
