import { memo } from "react";

import Card from "../Components/Global/Card";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

const Bookings = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="flex flex-col gap-8">
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default memo(Bookings);
