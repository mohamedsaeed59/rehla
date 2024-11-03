import { memo } from "react";
// import Card from "../Components/Global/Card";
import StorBy from "../Components/Global/StorBy/StorBy";
import { useTranslation } from "react-i18next";

const SavedChalets = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container">
        <div className="flex flex-col gap-8 my-8">
          <div className="flex justify-between items-center">
            <h3 className="text-[18px] font-bold">
              15 <span className="text-ry3Text font-medium">{t("SavedChalets")}</span>
            </h3>

            <StorBy />
          </div>
          {/* <Card /> */}
          {/* <Card /> */}
          {/* <Card /> */}
        </div>
      </div>
    </>
  );
};

export default memo(SavedChalets);