import { memo } from "react";
import CardTwo from "../Global/CardTwo";
import { useTranslation } from "react-i18next";

const RecentlyAdd = ({recently_ads} : any) => {
  const { t } = useTranslation();
  return (
    <div className="container py-8">
        <div className="flex flex-col gap-8">
          <h3 className="text-mainBlack font-bold text-2xl">{t("Recently Added")}</h3>
          <div className="flex flex-col gap-8">
          {recently_ads?.map((ad: any, index: number) => (
              <div key={index}>
                <CardTwo
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
    </div>
  );
};

export default memo(RecentlyAdd);
