import { memo, useState } from "react";
import card from "../../assets/card.jfif";
import dropDown from "../../assets/icons/ic_baseline-arrow-drop-down.svg";
import Star from "../../assets/icons/Star.svg";
import favorite from "../../assets/icons/carbon_favorite.svg";
import location from "../../assets/icons/carbon_location.svg";
import Group from "../../assets/icons/Group.svg";
import MoreDetails from "./_components/MoreDetails";

const CardMyBookings = () => {
  const [openMoreDetails, setOpenMoreDetails] = useState<boolean>(false);
  const handleOpenMoreDetails = () => {
    setOpenMoreDetails(!openMoreDetails);
  };
  return (
    <div
      className="rounded-[20px] bg-ryBackground p-3 md:py-[27px] md:px-5 h-full"
      data-accordion="default-accordion"
    >
      <div className="flex gap-4 flex-col transition duration-500">
        <div className="flex gap-2 flex-col">
          <div className="flex justify-between w-full px-2 py-1">
            <h3 className="text-[18px] font-bold text-ry3Text">Today</h3>
            <button
              aria-expanded={openMoreDetails}
              aria-controls="more-details"
              onClick={handleOpenMoreDetails}
            >
              <img
                src={dropDown}
                alt="dropDown"
                className={`w-6 h-6 cursor-pointer transition duration-500 ${
                  openMoreDetails ? "transform rotate-180" : ""
                }`}
              />
            </button>
          </div>

          <div className="flex gap-2 cursor-pointer group">
            <div className="relative">
              <div className="w-full max-w-[240px] h-full">
                <img
                  src={card}
                  alt="card"
                  className="w-full h-full rounded-md object-cover group-hover:scale-[1.01] duration-300"
                />
                <div className="absolute top-2 left-1/2 w-[64px] h-[24px] rounded-xl transform -translate-x-[50%] mainBlack text-sm backdrop-blur-[16px] bg-white/70">
                  <div className="flex items-center justify-center p-1 h-full">
                    <span>
                      <img
                        src={Star}
                        alt="Star"
                        className="w-[14px] object-cover"
                      />
                    </span>
                    <span className="text-[14px]">(4.5)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:gap-6">
              <h2 className="font-normal text-base md:text-xl text-mainBlack">
                Chalet name
              </h2>
              <div className="flex items-center gap-1">
                <img src={favorite} alt="favorite" className="w-4 h-4" />
                <span className="text-sm text-ry4Text">17,200</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1 text-ry3Text">
                  <img src={location} alt="location" className="w-4 h-4" />
                  <span className="text-xs md:text-[16px]">Bagdad, Iraq</span>
                </div>
                <div className="flex items-center gap-1 text-ry3Text">
                  <img src={Group} alt="Group" className="w-4 h-4" />
                  <span className="text-xs md:text-[16px]">20 Adults </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {openMoreDetails && <MoreDetails />}
      </div>
    </div>
  );
};

export default memo(CardMyBookings);
