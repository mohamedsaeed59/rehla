import { memo } from "react";
import Card from "../Global/Card";

const RecentlyAdd = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="flex flex-col gap-8">
          <h3 className="text-mainBlack font-bold text-2xl">Recently Add</h3>
          <div className="flex flex-col gap-8">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(RecentlyAdd);
