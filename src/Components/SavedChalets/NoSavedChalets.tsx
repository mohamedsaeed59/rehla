import { memo } from "react";
import loadingImage from "../../assets/loading.gif";
import { useTranslation } from "react-i18next";

const NoSavedChalets = () => {
  const { t } = useTranslation();
  return (
    <div className="container my-10">
      <div className="flex justify-center items-center flex-col gap-8">
        <img
          src={loadingImage}
          alt="loadingImage"
          className="w-[300px] h-[300px]"
        />
        <p className="font-normal text-2xl text-ry3Text">
        {t('NoSavedChaletsYet')}
        </p>
      </div>
    </div>
  );
};

export default memo(NoSavedChalets);
