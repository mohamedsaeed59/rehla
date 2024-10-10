import { memo } from "react";
import CardTwo from "../Global/CardTwo";

const RecentlyAdd = () => {
  return (
    <div className="container py-8">
        <div className="flex flex-col gap-8">
          <h3 className="text-mainBlack font-bold text-2xl">Recently Add</h3>
          <div className="flex flex-col gap-8">
          <CardTwo/>
          <CardTwo/>
          <CardTwo/>
          <CardTwo/>
        </div>
      </div>
    </div>
  );
};

export default memo(RecentlyAdd);
