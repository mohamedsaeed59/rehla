import { memo } from "react";

import Card from "../Components/Global/Card";

const Bookings = () => {
  return (
    <div className="container">
      <div className="flex flex-col gap-8">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default memo(Bookings);
