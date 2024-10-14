import { memo } from "react";
import Card from "../Components/Global/Card";
import BreadCrumb from "../Components/Global/BreadCrumb";
import FillterSearch from "../Components/Search/FillterSearch";
import StorBy from "../Components/Global/StorBy/StorBy";

const Search = () => {
  return (
    <>
      <div className="block lg:hidden">
        <BreadCrumb title={"Search Results"} subTitle={"search results"} />
      </div>
      <div className="container">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center gap-3">
            <h3 className="text-[18px] font-bold">
              1,755 <span className="text-ry3Text font-medium">Results</span>
            </h3>
            <div className="w-fit flex items-center justify-between md:justify-center gap-3 md:w-fit">
              <FillterSearch />
              <div className="hidden sm:block">
                <StorBy />
              </div>
            </div>
          </div>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default memo(Search);
