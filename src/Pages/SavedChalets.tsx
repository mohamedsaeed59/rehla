import { memo, useEffect } from "react";
import Card from "../Components/Global/Card";
import StorBy from "../Components/Global/StorBy/StorBy";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { userArchive } from "../app/archive/archiveSlice";

const SavedChalets = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { archive } = useAppSelector((state: any) => state.archive);

  useEffect(() => {
      dispatch(userArchive());
  },[])
console.log('archive', archive);

  return (
    <>
      <div className="container">
        <div className="flex flex-col gap-8 my-8">
          <div className="flex justify-between items-center">
            <h3 className="text-[18px] font-bold">
              {archive?.length} <span className="text-ry3Text font-medium">{t("SavedChalets")}</span>
            </h3>

            <StorBy />
          </div>
          {/* <Card /> */}
          {archive?.map((ad: any, index: number) => (
              <div key={index}>
                <Card
                  id={ad.id}
                  name={ad.name}
                  image={ad.image}
                  rate={ad.rate}
                  favorites={ad.no_favorites}
                  city={ad.city}
                  adults={ad.no_adults}
              />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default memo(SavedChalets);