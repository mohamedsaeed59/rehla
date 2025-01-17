import { memo, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import rightArrow from "../../assets/icons/right-arrow.svg";
// import save from "../../assets/icons/save.svg";
import favorite from "../../assets/icons/carbon_favorite.svg";
// import favorite from "../../assets/heart.png";
import Group from "../../assets/icons/Group.svg";
import location from "../../assets/icons/carbon_location.svg";
import date from "../../assets/date.png";
import Calendar from "./Calendar";
import NumberOfAdults from "./NumberOfAdults";
import SliderChaletDetails from "./SliderChaletDetails";
import Comments from "../Global/Comments";
import Thumbnails from "./_components/Thumbnails";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchChaletDetails, getComments } from "../../app/chalet/chaletSlice";
import { useParams } from 'react-router-dom';
import { addOrder, setDirectOrder } from "../../app/order/orderSlice";
import { actSettings } from "../../app/SettingsSlice";
import { archiveAd, unarchiveAd } from "../../app/archive/archiveSlice";
import { toast } from "react-toastify";

const ChaletDetails = () => {
  const [showComments, setShowComments] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const { chaletDetails, comment } = useAppSelector((state: any) => state.chalet);
  const { data } = useAppSelector((state: any) => state.settings);
  const { id } = useParams();
  const lang = localStorage.getItem("i18nextLng") || "en";
  const navigate = useNavigate();
  const [isSelectedDate, setIsSelectedDate] = useState<string | null>(null); 
  const [selectedDaysWithoutShifts, setSelectedDaysWithoutShifts] = useState<any[]>([]);
  const [selectedShifts, setSelectedShifts] = useState<any[]>([]);
  const [totalShiftPrice, setTotalShiftPrice] = useState<number>(0);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [totalPriceOfServices, setTotalPriceOfServices] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<any>("");
  const [countAdults, setCountAdults] = useState(0);
  const [countChildren, setCountChildren] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [save, setSave] = useState<boolean>(() => {
    return localStorage.getItem(`save_${id}`) === "true";
  });
  const accessToken = localStorage.getItem("access_token");

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
    }else{
      toast.error(t("You need to log in to save this ad"));
    }
  };

  // Set a limit for the short description length
  const maxDescriptionLength = 60;

  // Check if the description is large
  const isLargeDescription = chaletDetails?.description?.length > maxDescriptionLength;

  // Toggle function to switch between expanded and collapsed states
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    dispatch(fetchChaletDetails({id, lang}));
    dispatch(getComments({id, lang}));
}, [dispatch, id])

useEffect(() => {
  dispatch(actSettings(lang));
}, [])

  const { t } = useTranslation();

  const handelShowComments = () => {
    setShowComments(!showComments);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Check if the number of adults exceeds the limit
  const calc = countAdults > chaletDetails?.no_adults;

  // Calculate additional charges if `calc` is true
  const extraAdults = calc ? (countAdults - chaletDetails?.no_adults) : 0;
  const extraCost = extraAdults * chaletDetails?.price_extra_adults;

  // Tax
  // const Tax = Number(data?.tax);

  // base price with or without shift
  // const bsaePrice = chaletDetails?.have_shifts ? totalShiftPrice : chaletDetails?.price;
  const basePrice = chaletDetails?.have_shifts
  ? totalShiftPrice
  : (selectedDaysWithoutShifts?.length > 1 ? selectedDaysWithoutShifts?.length * chaletDetails?.price : chaletDetails?.price);


  // subtotal price
  const subTotal = basePrice + totalPriceOfServices + extraCost;

  const Tax = calculateTotalPrice(subTotal, Number(data?.tax));  
  
  function calculateTotalPrice(price: any, taxRate: any) {
    const totalPrice = price * (taxRate / 100);
    return totalPrice;
  }
  
  const handleCheckOut = async () => {
    if(chaletDetails.rent_type == "direct"){
      dispatch(
        setDirectOrder({
          ad_id: Number(id),
          subtotal: subTotal,
          total: subTotal,
          tax: Tax,
          booking_type: chaletDetails.have_shifts ? 'shift' : 'day',
          coupon_id: null,
          extra_no_adults: extraAdults,
          no_adults: countAdults,
          no_children: countChildren,
          days: isSelectedDate || selectedDaysWithoutShifts,
          services: selectedIds,
          ...(chaletDetails.have_shifts && { shifts: selectedShifts }),
        })
      )
      const days = isSelectedDate || selectedDaysWithoutShifts;
      if(days && days?.length > 0 && selectedShifts && selectedShifts?.length > 0 && countAdults > 0){
       navigate('/check-out');
      }else{
        setErrorMessage(t("PleaseEnterAllDataCorrectly"));
        setTimeout(() => {
          setErrorMessage(null);
        }, 20000);
      }
    }else{
      try {
        const resultAction = await dispatch(addOrder({ 
          ad_id : Number(id),
          subtotal: subTotal, 
          total: subTotal + Tax,
          tax: Tax, 
          booking_type: chaletDetails.have_shifts ? "shift" : "day", 
          coupon_id: null, 
          extra_no_adults: extraAdults,
          no_adults: countAdults, 
          no_children: countChildren, 
          days: isSelectedDate || selectedDaysWithoutShifts, 
          services: selectedIds, 
          ...(chaletDetails.have_shifts && { shifts: selectedShifts }),
        })).unwrap();
        if (resultAction.status === 200) {
          navigate('/thanks-requeste');
        }
      } catch (error: any) {
        // setErrorMessage(error.response.data.message);
        // setTimeout(() => {
        //   setErrorMessage(null);
        // }, 20000);
        if(error.status === 401){
          toast.error(t("You need to log in to complete the payment process"));
        }  
      }
    }
  }

  return (
    <div className="container my-9">
      <div className="flex flex-wrap lg:flex-nowrap gap-3">
        <div className="flex items-center justify-center gap-3 flex-wrap-reverse lg:flex-nowrap">
          <Thumbnails gallery={chaletDetails?.gallery} />
          <SliderChaletDetails gallery={chaletDetails?.gallery} rate={chaletDetails?.rate} />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <Link
            to={"/"}
            className="font-medium text-sm flex gap-1 items-center "
          >
            <div className="hover:bg-ryBackground duration-300 rounded-full p-3">
              <img
                src={rightArrow}
                alt="rightArrow"
                className="w-3 h-3 rotate-180"
              />
            </div>
            {t("BackToHome")}
          </Link>
          <div className="flex flex-col gap-2 bg-ryBackground rounded-md py-6 px-3">
            <div className="">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-2xl text-primary">{chaletDetails?.name}</h2>
                <div className="bg-white rounded-full p-2 cursor-pointer">
                  {/* <img src={save} alt="save" className="object-cover" /> */}

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
                stroke-width="1.5"
              />
            </svg>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <img src={favorite} alt="favorite" className="w-5 h-5" />
                  <span className="text-base font-light text-ry4Text">
                    {chaletDetails?.no_favorites}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <img src={Group} alt="Group" className="w-5 h-5" />
                  <span className="text-[12px] font-semibold text-ry3Text">
                    {chaletDetails?.no_adults} {t("Adults")}{" "}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-ry3Text">
                  <img src={location} alt="location" className="w-4 h-5" />
                  <span className="text-[12px] font-semibold text-mainBlack">
                    {chaletDetails?.city}
                  </span>
                </div>
              </div>
            </div>
            <div>
            <div className="flex gap-2 flex-wrap my-3">
                {chaletDetails?.main_services.map((service: any, index: number) => (
                  <div
                    key={index}
                    className="flex justify-center items-center gap-2 border-[3px] border-ry4Text border-dashed py-2 px-4 rounded-3xl"
                  >
                    <img
                      src={service.image}
                      alt={`${service.name} icon`}
                      width="19"
                      height="13"
                      className="object-contain"
                    />
                    <p className="font-normal text-[13px] text-mainBlack">
                      {service.number} {service.name.trim()}
                    </p>
                  </div>
                  ))}
              </div>
            </div>
            <div>
              <p className="font-normal text-base text-ry3Text leading-5">
                {isExpanded || !isLargeDescription
                  ? chaletDetails?.description
                  : chaletDetails?.description.slice(0, maxDescriptionLength) + "..."}
              </p>
              {isLargeDescription && (
                <button
                  onClick={toggleDescription}
                  className="font-medium text-lg text-primary flex gap-1 items-center"
                >
                  {isExpanded ? t("Show less") : t("Show more")}
                  <img
                    src={rightArrow}
                    alt="rightArrow"
                    className={`w-3 h-3 ${isExpanded ? "rotate-[270deg]" : "rotate-[90deg]"}`}
                  />
                </button>
              )}
            </div>
            <div className="flex flex-col gap-2 bg-white rounded-md my-2 p-3 duration-700">
              <div className="flex justify-between p-2">
                <div className="flex items-center gap-2">
                  <svg
                    width="21"
                    height="19"
                    viewBox="0 0 21 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2394 14.6931C14.9765 14.6931 18.8358 11.7642 18.8358 8.16258C18.8358 4.56476 14.9765 1.63587 10.2394 1.63587C5.49718 1.63587 1.64173 4.56476 1.64173 8.16258C1.64173 10.562 3.37688 12.7631 6.17153 13.913C6.38779 14.0025 6.55797 14.1764 6.63475 14.4002C6.71281 14.6189 6.69234 14.8632 6.57461 15.0666C6.26879 15.6191 5.95272 16.1461 5.65969 16.618C6.50551 16.2522 7.54967 15.6869 8.67444 14.8185C8.83695 14.688 9.04425 14.6279 9.2477 14.6484C9.58424 14.6765 9.91822 14.6931 10.2394 14.6931ZM10.2394 0C15.8786 0 20.4737 3.66307 20.4737 8.16258C20.4737 12.6659 15.8786 16.329 10.2394 16.329C9.97068 16.329 9.70324 16.3213 9.42685 16.3008C6.40698 18.5544 3.93734 18.8588 3.8273 18.8716C3.79914 18.8754 3.76588 18.8793 3.73389 18.8793C3.44981 18.8793 3.18109 18.7258 3.03138 18.4777C2.86503 18.2014 2.88039 17.8522 3.06337 17.5875C3.07617 17.576 3.87209 16.4428 4.70511 15.0372C1.77993 13.5472 0 10.9764 0 8.16258C0 3.66307 4.59122 0 10.2394 0Z"
                      fill="#7D7D7D"
                    />
                  </svg>

                  <span className="font-normal text-base text-ry5Text">
                    {comment?.length ?? 0} {t("Comment")}
                  </span>
                </div>
                <p
                  onClick={() => handelShowComments()}
                  className="font-medium text-base border-b border-primary text-primary cursor-pointer"
                >
                  {t("Show")}
                </p>
              </div>
              {!showComments && (
                <div className="flex flex-col gap-1 border-t p-3">
                  {comment?.map((com: any, index: number) => (
                    <div key={index}>
                       <Comments com={com} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="py-9">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img src={date} alt="date" className="w-[22px] h-[22px]" />
            <p className="text-2xl font-bold text-mainBlack">
              {t("SelectYourStayDate")} <span className="text-red">*</span>
            </p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="flex items-center gap-2">
              <svg
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_39_3718"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="23"
                  height="24"
                >
                  <path
                    d="M0 6.36843C0 3.21626 2.55571 0.660828 5.70833 0.660828H17.125C20.2776 0.660828 22.8333 3.21626 22.8333 6.36843V17.7836C22.8333 20.9358 20.2776 23.4912 17.125 23.4912H5.70833C2.55571 23.4912 0 20.9358 0 17.7836V6.36843Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_39_3718)">
                  <path
                    d="M5.70835 2.08772H17.125V-0.766083H5.70835V2.08772ZM21.4063 6.36842V17.7836H24.2604V6.36842H21.4063ZM17.125 22.0643H5.70835V24.9181H17.125V22.0643ZM1.4271 17.7836V6.36842H-1.42706V17.7836H1.4271ZM5.70835 22.0643C3.34389 22.0643 1.4271 20.1479 1.4271 17.7836H-1.42706C-1.42706 21.7239 1.76758 24.9181 5.70835 24.9181V22.0643ZM21.4063 17.7836C21.4063 20.1479 19.4896 22.0643 17.125 22.0643V24.9181C21.0658 24.9181 24.2604 21.7239 24.2604 17.7836H21.4063ZM17.125 2.08772C19.4896 2.08772 21.4063 4.00419 21.4063 6.36842H24.2604C24.2604 2.42818 21.0658 -0.766083 17.125 -0.766083V2.08772ZM5.70835 -0.766083C1.76758 -0.766083 -1.42706 2.42818 -1.42706 6.36842H1.4271C1.4271 4.00419 3.34389 2.08772 5.70835 2.08772V-0.766083Z"
                    fill="#DBDBDB"
                  />
                </g>
              </svg>
              <p className="text-lg font-normal text-mainBlack">{t("Available")}</p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_39_3722"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="23"
                  height="24"
                >
                  <path
                    d="M22.8333 0.906433H0V23.7368H22.8333V0.906433Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_39_3722)">
                  <path
                    d="M0 6.61404C0 3.46187 2.55571 0.906433 5.70833 0.906433H17.125C20.2776 0.906433 22.8333 3.46187 22.8333 6.61404V18.0292C22.8333 21.1814 20.2776 23.7368 17.125 23.7368H5.70833C2.55571 23.7368 0 21.1814 0 18.0292V6.61404Z"
                    fill="white"
                  />
                  <mask
                    id="mask1_39_3722"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="23"
                    height="24"
                  >
                    <path
                      d="M0 6.61404C0 3.46187 2.55571 0.906433 5.70833 0.906433H17.125C20.2776 0.906433 22.8333 3.46187 22.8333 6.61404V18.0292C22.8333 21.1814 20.2776 23.7368 17.125 23.7368H5.70833C2.55571 23.7368 0 21.1814 0 18.0292V6.61404Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask1_39_3722)">
                    <path
                      d="M5.70835 2.33335H17.125V-0.520447H5.70835V2.33335ZM21.4063 6.61406V18.0293H24.2604V6.61406H21.4063ZM17.125 22.31H5.70835V25.1638H17.125V22.31ZM1.4271 18.0293V6.61406H-1.42706V18.0293H1.4271ZM5.70835 22.31C3.34389 22.31 1.4271 20.3935 1.4271 18.0293H-1.42706C-1.42706 21.9695 1.76758 25.1638 5.70835 25.1638V22.31ZM21.4063 18.0293C21.4063 20.3935 19.4896 22.31 17.125 22.31V25.1638C21.0658 25.1638 24.2604 21.9695 24.2604 18.0293H21.4063ZM17.125 2.33335C19.4896 2.33335 21.4063 4.24982 21.4063 6.61406H24.2604C24.2604 2.67381 21.0658 -0.520447 17.125 -0.520447V2.33335ZM5.70835 -0.520447C1.76758 -0.520447 -1.42706 2.67381 -1.42706 6.61406H1.4271C1.4271 4.24982 3.34389 2.33335 5.70835 2.33335V-0.520447Z"
                      fill="#DBDBDB"
                    />
                  </g>
                  <path
                    d="M1.42706 6.61401C1.42706 4.24978 3.34385 2.33331 5.70831 2.33331H17.125C19.4895 2.33331 21.4062 4.24978 21.4062 6.61401H1.42706Z"
                    fill="#F3C800"
                  />
                </g>
              </svg>

              <p className="text-lg font-normal text-mainBlack">{t("NotFilled")}</p>
            </div>

            <div className="flex items-center gap-2">
            <svg
              width="23"
              height="24"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="38"
                height="38"
                rx="8"
                fill="#F8F8F8"
                stroke="#DBDBDB"
                strokeWidth="2"
              />
              
              <path
                d="M12 12 L28 28 M28 12 L12 28"
                stroke="#9E9E9E"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
              <p className="text-lg font-normal text-mainBlack">
               {t("NotAvailable")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Calendar
          chaletDetails={chaletDetails} 
          calendar={chaletDetails?.calendar} 
          setIsSelectedDate={setIsSelectedDate} 
          setSelectedDaysWithoutShifts={setSelectedDaysWithoutShifts}
          setSelectedShifts={setSelectedShifts}
          totalShiftPrice={totalShiftPrice}
          setTotalShiftPrice={setTotalShiftPrice}
      />
      <NumberOfAdults
          services={chaletDetails?.services} 
          selectedIds={selectedIds} 
          setSelectedIds={setSelectedIds} 
          setTotalPriceOfServices={setTotalPriceOfServices} 
          totalPriceOfServices={totalPriceOfServices} 
          countAdults={countAdults}
          setCountAdults={setCountAdults}
          countChildren={countChildren}
          setCountChildren={setCountChildren}
       />
      <div className="flex flex-col justify-center items-center">
        <Link
          to={""}
          onClick={handleCheckOut}
          className="rounded-[33px] text-center w-full md:w-[500px] py-4  text-2xl font-bold bg-mainBlack text-white"
        >
          {t("Check out")}
        </Link>
        <p className="w-[300px] py-3 font-bold text-red">{errorMessage}</p>
      </div>
    </div>
  );
};

export default memo(ChaletDetails);
