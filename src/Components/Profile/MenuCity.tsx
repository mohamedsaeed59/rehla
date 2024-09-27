import { memo } from "react";

const MenuCity = () => {
  return (
    <div className="bg-body border rounded-md rounded-tl-none rounded-tr-none w-full shadow-sm mt-[-8px]">
      <div className="p-2">
        <h3 className="font-medium text-lg text-mainBlack">Select Your city</h3>
        <form className="flex flex-col gap-3 p-2">
          <div className="flex items-center gap-1">
            <input type="radio" id="" value="" />
            <label className="text-lg">Baghdad</label>
          </div>
          <div className="flex items-center gap-1">
            <input type="radio" id="" value="" />
            <label className="text-lg">Masul</label>
          </div>
          <div className="flex items-center gap-1">
            <input type="radio" id="" value="" />
            <label className="text-lg">Baghdad</label>
          </div>
          <div className="flex items-center gap-1">
            <input type="radio" id="" value="" />
            <label className="text-lg">Masul</label>
          </div>
          <div className="flex items-center gap-1">
            <input type="radio" id="" value="" />
            <label className="text-lg">Baghdad</label>
          </div>
          <div className="flex items-center gap-1">
            <input type="radio" id="" value="" />
            <label className="text-lg">Masul</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default memo(MenuCity);
