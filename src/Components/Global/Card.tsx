import { memo } from "react";
import card from "../../assets/card.jfif";
import save from "../../assets/icons/save.svg";
import Star from "../../assets/icons/Star.svg";
import favorite from "../../assets/icons/carbon_favorite.svg";
import location from "../../assets/icons/carbon_location.svg";
import Group from "../../assets/icons/Group.svg";

import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div>
      <div className="flex flex-wrap md:flex-nowrap gap-2 cursor-pointer group">
        <div className="relative">
          <div className="w-full md:w-[600px] h-full  max-h-[250px]">
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

        <div className="flex justify-between w-full px-2">
          <div className="flex flex-col gap-6">
            <h2 className="font-normal text-2xl text-mainBlack">Chalet name</h2>
            <div className="flex items-center gap-1">
              <img src={favorite} alt="favorite" className="w-4 h-4" />
              <span className="text-sm text-ry4Text">17,200</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1 text-ry3Text">
                <img src={location} alt="location" className="w-4 h-4" />
                <span className="text-[16px]">Bagdad, Iraq</span>
              </div>
              <div className="flex items-center gap-1 text-ry3Text">
                <img src={Group} alt="Group" className="w-4 h-4" />
                <span className="text-[16px]">20 Adults </span>
              </div>
            </div>
          </div>
          <Link to={""}>
            <img src={save} alt="save" className="object-cover" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(Card);
