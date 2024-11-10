import { memo } from "react";
import loading from "../../../assets/loading.gif";
import { useTranslation } from "react-i18next";

const NotificationsEmpty = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-[480px]">
        <img src={loading} alt="loading" className="w-[200px] h-[200px]" />
        <p>{t("No notifications yet")}</p>
      </div>
    </>
  );
};

export default memo(NotificationsEmpty);
