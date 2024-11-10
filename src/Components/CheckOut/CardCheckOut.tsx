import { memo, useEffect } from "react";
import Star from "../../assets/icons/Star.svg";
import favorite from "../../assets/icons/carbon_favorite.svg";
import location from "../../assets/icons/carbon_location.svg";
import Group from "../../assets/icons/Group.svg";
import date from "../../assets/date.png";
import DetailsCheckOut from "../Global/DetailsCheckOut";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addShifts, fetchChaletDetails } from "../../app/chalet/chaletSlice";
import { useTranslation } from "react-i18next";

const CardCheckOut = ({directOrders}: any) => {
  const dispatch = useAppDispatch();
  const lang = localStorage.getItem("i18nextLng") || "en";
  const { chaletDetails, shifts } = useAppSelector((state: any) => state.chalet);
  const { t } = useTranslation();

  const selectedShiftIds = directOrders?.shifts;
  const filteredShifts = shifts?.filter((shift: any) => selectedShiftIds?.includes(shift?.id));

  useEffect(() => {
    dispatch(fetchChaletDetails({id: directOrders?.ad_id, lang}));
}, [dispatch, directOrders?.ad_id])

useEffect(() => {
  if (chaletDetails?.have_shifts) {
    dispatch(addShifts({ id: directOrders?.ad_id, selectedDate: directOrders?.days}));
  }
}, []);

  return (
    <div className="flex flex-col gap-4">
      {/* card */}
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 cursor-pointer group">
          <div className="relative">
            <div className="w-[170px] md:w-[270px] h-full max-h-[240px]">
            <Link to={""} className="">
              <img
                src={chaletDetails?.image}
                alt={chaletDetails?.name}
                className="w-full h-full object-cover group-hover:scale-[1.02] duration-300"
              />
              </Link>
              <div className="absolute top-2 left-1/2 w-[64px] h-[24px] rounded-xl transform -translate-x-[50%] mainBlack text-sm backdrop-blur-[16px] bg-white/70">
                <div className="flex items-center justify-center p-1 h-full">
                  <span>
                    <img
                      src={Star}
                      alt="Star"
                      className="w-[14px] object-cover"
                    />
                  </span>
                  <span className="text-[14px]">({chaletDetails?.rate})</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:gap-6 px-0 md:px-2">
          <Link to={``} className="">
            <h2 className="font-normal text-base md:text-xl text-primary">
              {chaletDetails?.name}
            </h2>
            </Link>
            <div className="flex items-center gap-1">
              <img src={favorite} alt="favorite" className="w-4 h-4" />
              <span className="text-[16px] text-ry4Text">{chaletDetails?.no_favorites}</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1 text-ry3Text">
                <img src={Group} alt="Group" className="w-4 h-4" />
                <span className="text-[14px] md:text-[16px]">{chaletDetails?.no_adults} {t("Adults")} </span>
              </div>
              <div className="flex items-center gap-1 text-mainBlack">
                <img src={location} alt="location" className="w-4 h-4" />
                <span className="text-[14px] md:text-[16px] font-medium">
                {chaletDetails?.city}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card two */}
      {directOrders?.booking_type == "shift" &&
      <div className="rounded-2xl bg-ryBackground p-5">
        <h3 className="font-normal text-xl text-mainBlack py-4">
          {t("Register Shifts")}
        </h3>
          <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <img src={date} alt="date" className="w-5 h-5" />
              <span className="text-base font-normal">{directOrders?.days[0]}</span>
            </div>
            {filteredShifts?.map((filterShift: any) => (
            <div key={filterShift?.id} className="fex flex-col gap-1 w-[90%] mx-auto">
              <div className="flex justify-between">
                <p className="text-primary text-[15px] font-normal">
                  {filterShift?.name}
                  <span className="text-ry3Text">({filterShift?.time_from} - {filterShift?.time_from})</span>
                </p>
                <p className="text-mainBlack text-[18px] font-normal">
                {filterShift?.price} |{t("QD")}
                </p>
              </div>
            </div>
           ))}
          </div>
        </div>
      </div>}
      {/* card three */}
      <DetailsCheckOut directOrders={directOrders} />
    </div>
  );
};

export default memo(CardCheckOut);

/*

*/
