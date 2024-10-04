import { memo } from "react";

import CardMyBookings from "../Components/Bookings/CardMyBookings";

const Bookings = () => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col gap-4 py-6">
          <h3 className="text-[18px] font-bold text-ry3Text">Today</h3>
          <CardMyBookings />
        </div>
      </div>
    </>
  );
};

export default memo(Bookings);
