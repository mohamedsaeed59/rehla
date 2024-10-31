import { memo, useEffect, useState } from "react";
import location from "../../assets/location.webp";
import drop_down from "../../assets/ic_baseline-arrow-drop-down.webp";
import Language from "../Global/Language";
import Location from "../../Pages/Location";
import { useTranslation } from "react-i18next";
// @ts-ignore
import Cookies from "js-cookie";
import { useAppDispatch } from "../../app/hooks";
import { actFetchHomeScreen } from "../../app/home/homeSlice";

function TopHeader() {
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const [openLocation, setOpenLocation] = useState(true);
  const [address, setAddress] = useState("");
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "en");

  const handleOpenLocation = () => {
    setOpenLocation(!openLocation);
  };

  const getLocationFromIP = async () => {
    const response = await fetch(`https://ipapi.co/json/`);
    const data = await response.json();
    return {
      address: `${data.city}, ${data.region}, ${data.country_name}`,
      coordinates: { lat: data.latitude, lon: data.longitude },
    };
  };

  const handleAllowLocation = async () => {
    const result = await getLocationFromIP();
    setAddress(result.address);
    Cookies.set("user_location", result.address, { expires: 7 });
    setOpenLocation(false);

    dispatch(
      actFetchHomeScreen({
        lat: result.coordinates.lat,
        lon: result.coordinates.lon,
        lang: lang,
      })
    );
  };

  useEffect(() => {
    const savedAddress = Cookies.get("user_location");
    if (savedAddress) {
      setAddress(savedAddress);
    }
    
    const handleLanguageChange = async (newLang: string) => {
      setLang(newLang);
      const locationData = await getLocationFromIP();

      dispatch(
        actFetchHomeScreen({
          lat: locationData.coordinates.lat,
          lon: locationData.coordinates.lon,
          lang: newLang,
        })
      );
    };

    i18n.on("languageChanged", handleLanguageChange);
    return () => i18n.off("languageChanged", handleLanguageChange);
  }, [i18n, dispatch]);

  return (
    <div className="container">
      <div className="py-2">
        <div className="grid grid-cols-2 place-content-center">
          <div className="flex flex-col justify-center items-center md:items-start w-[100vw] md:w-auto">
            <div className="flex items-center gap-1 text-mainBlack">
              <img src={location} alt="location" className="w-3" />
              <p className="text-base font-normal line-clamp-1">
                {address || "Unknown location"}
              </p>
              <img
                src={drop_down}
                alt="drop_down"
                className="w-4 cursor-pointer"
              />
            </div>
            <div className="pl-3 text-center sm:text-start">
              <div
                onClick={handleOpenLocation}
                className="text-primary text-base font-normal leading-4 border-b border-b-primary cursor-pointer"
              >
                {t("Change location")}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Language />
          </div>
        </div>
        {openLocation && (
          <Location
            setOpenLocation={setOpenLocation}
            updateAddress={setAddress}
            handleAllowLocation={handleAllowLocation}
          />
        )}
      </div>
    </div>
  );
}

export default memo(TopHeader);
