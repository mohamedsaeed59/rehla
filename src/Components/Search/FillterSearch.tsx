import { useState } from "react";
import filter from "../../assets/icons/filter.svg";
import FilterByCity from "./_components/FilterByCity";
import FilterByRate from "./_components/FilterByRate";
import FilterByCapacity from "./_components/FilterByCapacity";

export default function FillterSearch() {
  const [openMenuCity, setOpenMenuCity] = useState<boolean>(false);
  const [openFilterByRate, setOpenFilterByRate] = useState<boolean>(true);
  const [openFilterByCapacity, setOpenFilterByCapacity] =
    useState<boolean>(true);

  const handleOpenMenuCity = () => {
    setOpenMenuCity(!openMenuCity);
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-2 p-2 rounded-[8px] border-0 sm:border border-black50 cursor-pointer">
        <p className="text-sm font-normal hidden sm:block">Fillter</p>
        <img src={filter} alt="downDrop" className="w-6 h-6 object-cover cursor-pointer" />
      </div>
      <div className="hidden sm:block">
      <div className="flex items-center gap-2">
        <div className="w-fit bg-ryBackground rounded-3xl flex justify-center items-center px-[10px] py-[6px] cursor-pointer">
          <p className="font-normal text-[13px] text-mainBlack">Map</p>
        </div>
        <div
          onClick={() => setOpenFilterByCapacity(!openFilterByCapacity)}
          className="relative w-fit bg-ryBackground rounded-3xl flex justify-center items-center px-[10px] py-[6px] cursor-pointer"
        >
          <p className="font-normal text-[13px] text-mainBlack">Capacity</p>
          {!openFilterByCapacity && <FilterByCapacity />}
        </div>
        <div className=" w-fit bg-ryBackground rounded-3xl flex justify-center items-center px-[10px] py-[6px] cursor-pointer">
          <p
            onClick={handleOpenMenuCity}
            className="font-normal text-[13px] text-mainBlack"
          >
            City
          </p>
          {openMenuCity && <FilterByCity setOpenMenuCity={setOpenMenuCity} />}
        </div>
        <div
          onClick={() => setOpenFilterByRate(!openFilterByRate)}
          className="relative w-fit bg-ryBackground rounded-3xl flex justify-center items-center px-[10px] py-[6px] cursor-pointer"
        >
          <p className="font-normal text-[13px] text-mainBlack">Rate</p>
          {!openFilterByRate && <FilterByRate />}
        </div>
      </div>
    </div>
    </div>
  );
}
/*


*/
