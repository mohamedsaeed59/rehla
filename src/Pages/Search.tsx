import { memo, useState } from "react";
import Card from "../Components/Global/Card";
import downDrop from "../assets/icons/arrow-down-drop.svg";
import BreadCrumb from "../Components/Global/BreadCrumb";
import FillterSearch from "../Components/Search/FillterSearch";
import DownDropStorBy from "../Components/Search/DownDropStorBy";

const Search = () => {
  const [downDropStore, setDownDropStore] = useState<boolean>(true);

  return (
    <>
      <div className="block lg:hidden">
        <BreadCrumb title={"Search Results"} subTitle={"search results"} />
      </div>
      <div className="container">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center flex-wrap gap-3">
            <h3 className="text-[18px] font-bold">
              1,755 <span className="text-ry3Text font-medium">Results</span>
            </h3>
            <div className="flex items-center justify-between md:justify-center gap-3 w-full md:w-fit">
              <FillterSearch />
              <div className="relative rounded-[8px] border border-black50 cursor-pointer">
                <div
                  className="flex gap-2 p-2"
                  onClick={() => setDownDropStore(!downDropStore)}
                >
                  <p className="text-sm font-normal">Stor By</p>
                  <img
                    src={downDrop}
                    alt="downDrop"
                    className="w-6 h-6 object-cover"
                  />
                </div>
                {!downDropStore && (
                 <DownDropStorBy/>
                )}
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
