import { memo } from "react";

import CardMyBookings from "../Components/Bookings/CardMyBookings";
import DetailsCheckOut from "../Components/Global/DetailsCheckOut";

const Bookings = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 py-6">
          <div className="flex flex-col gap-7">
          <CardMyBookings />
          <CardMyBookings />
          </div>
          <DetailsCheckOut/>
        </div>
      </div>
    </>
  );
};

export default memo(Bookings);
