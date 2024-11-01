import { memo } from "react";
import Card from "../Components/Global/Card";
import BreadCrumb from "../Components/Global/BreadCrumb";
import FillterSearch from "../Components/Search/FillterSearch";
import StorBy from "../Components/Global/StorBy/StorBy";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../app/hooks";

const Search = () => {
  const { t } = useTranslation();
  const { searchResults } = useAppSelector((state: any) => state.chalet);  

  return (
    <>
      <div className="block lg:hidden">
        <BreadCrumb title={"Search Results"} subTitle={"search results"} />
      </div>
      <div className="container">
        <div className="flex flex-col gap-8 py-8">
          <div className="flex justify-between items-center gap-3">
            <h3 className="text-[18px] font-bold">
              {searchResults?.length} <span className="text-ry3Text font-medium">{t("Results")}</span>
            </h3>
            <div className="w-fit flex items-center justify-between md:justify-center gap-3 md:w-fit">
              <FillterSearch />
              <div className="hidden sm:block">
                <StorBy />
              </div>
            </div>
          </div>
          {searchResults?.map((ad: any) => (
                <Card
                  id={ad.id}
                  name={ad.name}
                  image={ad.image}
                  rate={ad.rate}
                  favorites={ad.no_favorites}
                  city={ad.city}
                  adults={ad.no_adults}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default memo(Search);
