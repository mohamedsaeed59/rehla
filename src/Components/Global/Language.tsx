import { memo } from "react";
import { useTranslation } from "react-i18next";




const Language = () => {
  const { i18n } = useTranslation();
 
console.log(i18n);

  const changeLanguage = (lng: string) => {
      //  i18n.changeLanguage(lng);
       console.log("lolo");
       
    localStorage.setItem("language", lng);
  };

  return (
    <div className="flex items-center h-full">
      <div className="flex justify-end  gap-4 xl:justify-start text-mainBlack">
        <div className="text-mainBlack">
          <div
            onClick={() => changeLanguage("en")}
            className="active-btn rounded-3xl border py-1 px-3 bg-ryBackground hover:bg-slate-200 cursor-pointer"
          >
            English
          </div>
        </div>
        <div className="text-mainBlack">
          <div
            onClick={() => changeLanguage("ar")}
            className="active-btn rounded-3xl border py-1 px-3 bg-ryBackground cursor-pointer"
          >
            العربية
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Language);
