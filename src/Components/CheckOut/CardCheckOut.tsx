import { memo } from "react";
import card from "../../assets/card.jfif";
import Star from "../../assets/icons/Star.svg";
import favorite from "../../assets/icons/carbon_favorite.svg";
import location from "../../assets/icons/carbon_location.svg";
import Group from "../../assets/icons/Group.svg";
import date from "../../assets/date.png";

const CardCheckOut = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* card */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap md:flex-nowrap gap-2 cursor-pointer group">
          <div className="relative">
            <div className="w-full max-w-[270px] h-full  max-h-[250px]">
              <img
                src={card}
                alt="card"
                className="w-full h-full object-cover group-hover:scale-[1.02] duration-300"
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
          <div className="flex flex-col gap-6 px-2">
            <h2 className="font-normal text-xl text-primary">Chalet name</h2>
            <div className="flex items-center gap-1">
              <img src={favorite} alt="favorite" className="w-4 h-4" />
              <span className="text-[16px] text-ry4Text">17,200</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1 text-ry3Text">
                <img src={Group} alt="Group" className="w-4 h-4" />
                <span className="text-[16px]">20 Adults </span>
              </div>
              <div className="flex items-center gap-1 text-mainBlack">
                <img src={location} alt="location" className="w-4 h-4" />
                <span className="text-[16px] font-medium">Bagdad, Iraq</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card two */}
      <div className="rounded-2xl bg-ryBackground p-5">
        <h3 className="font-normal text-xl text-mainBlack py-4">
          Resisted Shifts
        </h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <img src={date} alt="date" className="w-5 h-5" />
              <span className="text-base font-normal">15/09/2024</span>
            </div>
            <div className="fex flex-col gap-1 w-[90%] mx-auto">
              <div className="flex justify-between">
                <p className="text-primary text-[15px] font-normal">
                  Shift 1{" "}
                  <span className="text-ry3Text">(08:00am - 03:00pm)</span>
                </p>
                <p className="text-mainBlack text-[18px] font-normal">
                  350 |QD
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-primary text-[15px] font-normal">
                  Shift 2{" "}
                  <span className="text-ry3Text">(08:00am - 03:00pm)</span>
                </p>
                <p className="text-mainBlack text-[18px] font-normal">
                  200 |QD
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <img src={date} alt="date" className="w-5 h-5" />
              <span className="text-base font-normal">15/09/2024</span>
            </div>
            <div className="fex flex-col gap-1 w-[90%] mx-auto">
              <div className="flex justify-between">
                <p className="text-primary text-[15px] font-normal">
                  Shift 1{" "}
                  <span className="text-ry3Text">(08:00am - 03:00pm)</span>
                </p>
                <p className="text-mainBlack text-[18px] font-normal">
                  350 |QD
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-primary text-[15px] font-normal">
                  Shift 2{" "}
                  <span className="text-ry3Text">(08:00am - 03:00pm)</span>
                </p>
                <p className="text-mainBlack text-[18px] font-normal">
                  200 |QD
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card three */}
      <div className="rounded-2xl bg-ryBackground p-5">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="flex items-center justify-center gap-2">
              <img src={Group} alt="Group" className="w-5 h-5" />
              <span className="text-[16px] font-normal">Adults (4)</span>
            </div>
            <span className="text-base font-light text-mainBlack">-</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center justify-center gap-2">
              <img src={Group} alt="Group" className="w-5 h-5" />
              <span className="text-[16px] font-normal">Extra Adults (0)</span>
            </div>
            <span className="text-base font-light text-mainBlack">-</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center justify-center gap-2">
              <img src={Group} alt="Group" className="w-5 h-5" />
              <span className="text-[16px] font-normal">Children (2)</span>
            </div>
            <span className="text-[16px] font-normal">Children (2)</span>
            <span className="text-base font-light text-mainBlack">-</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center justify-center gap-2">
              <img src={Group} alt="Group" className="w-5 h-5" />
              <span className="text-[16px] font-normal">Extra amenity</span>
            </div>
            <span className="text-[16px] font-normal">Extra amenity</span>
            <span className="text-base font-light text-mainBlack">150 |QD</span>
          </div>
          <div className="flex flex-col gap-1 w-[90%] mx-auto">
            <div className="flex justify-between">
              <p className="text-[13px] font-light text-mainBlack">Grill</p>
              <span className="text-sm font-light text-ry5Text">50 |QD</span>
            </div>
            <div className="flex justify-between">
              <p className="text-[13px] font-light text-mainBlack">
                Sweet machine
              </p>
              <span className="text-sm font-light text-ry5Text">50 |QD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CardCheckOut);

/*

*/
