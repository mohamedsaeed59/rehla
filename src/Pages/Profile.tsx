import { memo } from "react";
import BreadCrumb from "../Components/Global/BreadCrumb";
import { MainProfile } from "../Components/Profile/index";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="block lg:hidden">
        <BreadCrumb title={t("My profile")} subTitle={t("My profile")} />
      </div>
      <div className="container overflow-hidden">
        <MainProfile />
      </div>
    </>
  );
};

export default memo(Profile);
