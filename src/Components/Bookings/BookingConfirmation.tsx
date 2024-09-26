import { memo } from "react";
import bookingConfirmation from "../../assets/BookingConfirmation.gif"

const BookingConfirmation = () => {
  return (
    <div className="container">
      <div className="flex flex-col gap-8">
        <img src={bookingConfirmation} alt="bookingConfirmation" className="w-[450px]"/>
      </div>
    </div>
  );
};

export default memo(BookingConfirmation);
