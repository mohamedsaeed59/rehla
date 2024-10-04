import { memo, useState } from "react";
import Card from "../Components/Global/Card";
import downDrop from "../assets/icons/arrow-down-drop.svg";
import filter from "../assets/icons/filter.svg";
import BreadCrumb from "../Components/Global/BreadCrumb";

const Search = () => {
  const [downDropStore, setDownDropStore] = useState<boolean>(true);

  return (
    <>

     <div className="block lg:hidden">
     <BreadCrumb title={"Search Results"} subTitle={"search results"}/>
     </div>
      <div className="container">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <h3 className="text-[18px] font-bold">
              1,755 <span className="text-ry3Text font-medium">Results</span>
            </h3>
            <div className="flex gap-4">
              <div className="flex gap-2 p-2 rounded-[8px] border border-black50 cursor-pointer">
                <p className="text-sm font-normal">Fillter</p>
                <img
                  src={filter}
                  alt="downDrop"
                  className="w-6 h-6 object-cover"
                />
              </div>
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
                  <div className="absolute top-2 md:top-4 w-[300px] z-20 rtl:left-0 ltr:right-0 rounded-md bg-white shadow-lg p-3">
                    <ul className="w-full">
                      <li>
                        <div className="flex items-center gap-1">
                          <input type="radio" id="html" value="HTML" />
                          {/* for */}
                          <label>Come and book your favorite</label>
                        </div>
                        <div className="flex items-center gap-1">
                          <input type="radio" id="html" value="HTML" />
                          <label>Come and book your favorite</label>
                        </div>
                        <div className="flex items-center gap-1">
                          <input type="radio" id="html" value="HTML" />
                          <label>Come and book your favorite</label>
                        </div>
                      </li>
                    </ul>
                  </div>
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
