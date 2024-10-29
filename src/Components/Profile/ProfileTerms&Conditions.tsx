import { memo, useEffect } from "react";
import BreadCrumb from "../Global/BreadCrumb";
import lock from "../../assets/icons/lock.svg";
import loading from "../../assets/loading.gif";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { actSettings } from "../../app/SettingsSlice";

const ProfileTermsConditions = () => {
  const { t } = useTranslation();
  const { data } = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    const lang = localStorage.getItem("i18nextLng") || "en";

    dispatch(actSettings(lang));
  }, [dispatch]);

  return (
    <>
      <div className="block lg:hidden">
        <BreadCrumb title={t("TermsConditions")} subTitle={t("TermsConditions")} />
      </div>
      <div className="container my-16">
        <div className="flex flex-col items-center gap-4">
            <img src={lock} alt="lock" className="w-8 h-7 hidden lg:block" />
            <h3 className="font-bold text-lg sm:text-2xl hidden lg:block">
              {t("TermsConditions")}
            </h3>
          <img
            src={loading}
            alt="loading"
            className="w-[200px] h-[200px] object-cover"
          />
        </div>
        <div className="flex flex-col gap-8">
          <div className="w-full md:w-[80%]">
            <h3 className="font-semibold text-xl text-mainBlack my-5">
              {data.terms_title}
            </h3>
            <p className="font-normal text-[14px] leading-5 text-ry5Text">
              {data.terms_body}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ProfileTermsConditions);
