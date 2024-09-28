import { memo } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import TopHeader from "../Components/Header/TopHeader";
import CardMyBookings from "../Components/Bookings/CardMyBookings";

const Bookings = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <div className="container">
        <div className="flex flex-col gap-4 py-6">
          <h3 className="text-[18px] font-bold text-ry3Text">Today</h3>
          <CardMyBookings />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default memo(Bookings);
