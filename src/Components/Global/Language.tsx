import { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const Language = () => {
  const { i18n } = useTranslation();

  const [lng, setLng] = useState(Cookies.get("i18next") || "en");

  useEffect(() => {
    const handleLanguageChange = (newLang: string) => {
      setLng(newLang);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  const changeLanguage = (newLng: string) => {
    i18n.changeLanguage(newLng);
    Cookies.set("i18next", newLng);
  };

  return (
    <div className="flex items-center h-full">
      <div className="flex justify-end  gap-4 xl:justify-start text-mainBlack">
        <div className="text-mainBlack">
          <div
            onClick={() => changeLanguage("en")}
            className={`${
              lng === "en" ? "active-btn" : ""
            } rounded-3xl border py-1 px-3 bg-ryBackground hover:bg-slate-200 cursor-pointer`}
          >
            English
          </div>
        </div>
        <div className="text-mainBlack">
          <div
            onClick={() => changeLanguage("ar")}
            className={`${
              lng === "ar" ? "active-btn" : ""
            } rounded-3xl border py-1 px-3 bg-ryBackground hover:bg-slate-200 cursor-pointer`}
          >
            العربية
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Language);
