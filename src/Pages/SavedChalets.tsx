import { memo, useEffect, useState } from "react";
import Card from "../Components/Global/Card";
import StorBy from "../Components/Global/StorBy/StorBy";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { userArchive } from "../app/archive/archiveSlice";

const SavedChalets = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { archive } = useAppSelector((state: any) => state.archive);
  const [sortOption, setSortOption] = useState<string>("");
  const lang = localStorage.getItem("i18nextLng") || "en";

  const sortedArchive = [...archive].sort((a, b) => {
    switch (sortOption) {
      case "AlphabetAZ":
        return a.name.localeCompare(b.name);
      case "AlphabetZA":
        return b.name.localeCompare(a.name);
      case "RateHighToLow":
        return b.rate - a.rate;
      case "RateLowToHigh":
        return a.rate - b.rate;
      default:
        return 0;
    }
  });

  useEffect(() => {
      dispatch(userArchive(lang));
  },[])

  return (
    <>
      <div className="container">
        <div className="flex flex-col gap-8 my-8">
          <div className="flex justify-between items-center">
            <h3 className="text-[18px] font-bold">
              {sortedArchive?.length} <span className="text-ry3Text font-medium">{t("SavedChalets")}</span>
            </h3>
            <StorBy setSortOption={setSortOption} />
          </div>
          {sortedArchive?.map((ad: any, index: number) => (
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