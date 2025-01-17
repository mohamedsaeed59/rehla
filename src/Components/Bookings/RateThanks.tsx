import { memo } from "react";
import image from "../../assets/rate/Vector.svg";
import close from "../../assets/rate/close.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Rate = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col justify-center items-center px-4 py-8 gap-6">
        <div className="flex justify-center items-center gap-2">
          <h3 className="font-bold text-xl text-center text-mainBlack">
            {t('Thank you')}
          </h3>
          <img src={image} alt="logo" className="w-10 h-10" />
        </div>
        <p className="text-ry3Text text-center font-normal text-sm">
        {t('experienceMessage2')}
        </p>
        <div className="border rounded-3xl px-7 py-1">
          <Link
            to={"/bookings"}
            className="rounded-3xl text-ry3Text py-1 px-3 flex justify-center items-center gap-1"
          >
            <img src={close} alt="logo" className="w-4 h-4" />
            
            {t('Close')}
          </Link>
        </div>
      </div>
    </>
  );
};

export default memo(Rate);
