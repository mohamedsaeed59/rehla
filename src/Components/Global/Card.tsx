import { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Star from "../../assets/icons/Star.svg";
import favorite from "../../assets/icons/carbon_favorite.svg";
import location from "../../assets/icons/carbon_location.svg";
import Group from "../../assets/icons/Group.svg";
import { Link } from "react-router-dom";
import { archiveAd, unarchiveAd } from "../../app/archive/archiveSlice";
import { AppDispatch } from "../../app/store";

interface CardProps {
  id: number;
  name: string;
  image: string;
  rate: number;
  favorites: number;
  city: string;
  adults: string;
}

const Card = ({ id, name, image, rate, favorites, city, adults }: CardProps) => {
  // const [save, setSave] = useState<boolean>(true);
  const dispatch: AppDispatch = useDispatch();
  const accessToken = localStorage.getItem("access_token");

  const [save, setSave] = useState<boolean>(() => {
    return localStorage.getItem(`save_${id}`) === "true";
  });

  useEffect(() => {
    localStorage.setItem(`save_${id}`, save.toString());
  }, [id, save]);

  const handleSave = () => {
    if(accessToken){
      setSave((prevSave) => !prevSave);
      if (save) {
        dispatch(unarchiveAd({ ad_id: id }));
      } else {
        dispatch(archiveAd({ ad_id: id }));
      }
    }  
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[14px] cursor-pointer group">
        <div className="relative w-full">
          <Link to={`/chalet/${id}`} className="">
            <img
              src={image}
              alt="card"
              className="w-full h-full max-h-[250px] object-cover group-hover:scale-[1.02] duration-300"
            />
            <div className="absolute top-2 left-1/2 w-[64px] h-[24px] rounded-xl transform -translate-x-[50%] mainBlack text-sm backdrop-blur-[16px] bg-white/70">
              <div className="flex items-center justify-center p-1 h-full">
                <span>
                  <img src={Star} alt="Star" className="w-[14px] object-cover" />
                </span>
                <span className="text-[14px]">({rate})</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-6">
            <Link to={`/chalet/${id}`} className="">
              <h2 className="font-normal text-xl text-mainBlack">{name}</h2>
            </Link>
            <div className="flex items-center gap-1">
              <img src={favorite} alt="favorite" className="w-4 h-4" />
              <span className="text-sm text-ry4Text">{favorites}</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1 text-ry3Text">
                <img src={location} alt="location" className="w-4 h-4" />
                <span className="text-[16px]">{city}</span>
              </div>
              <div className="flex items-center gap-1 text-ry3Text">
                <img src={Group} alt="Group" className="w-4 h-4" />
                <span className="text-[16px]">{adults} Adults</span>
              </div>
            </div>
          </div>
          <Link to={""}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleSave}
            >
              <path
                d="M12.6078 25.9215L12 25.5829L11.3922 25.9215L1 31.701V3.96647C1 3.16117 1.31451 2.40017 1.85555 1.84801C2.39658 1.29743 3.11526 1 3.85185 1H20.1481C20.8847 1 21.6034 1.29743 22.1445 1.84801C22.6855 2.40017 23 3.16117 23 3.96647V31.701L12.6078 25.9215Z"
                fill={`${!save ? "#00000" : "#F3C800"}`}
                stroke="#1E1E1E"
                strokeWidth="1.5"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(Card);
