import { memo } from "react";
import CardCheckOut from "../Components/CheckOut/CardCheckOut";
import PaymentMethod from "../Components/CheckOut/PaymentMethod";

const CheckOut = () => {
  return (
    <>
      <div>
        <h2 className="font-bold text-2xl text-mainBlack text-center my-6">
          Check-out
        </h2>
        <div className="container py-9">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <CardCheckOut />
            <div>
              <PaymentMethod />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(CheckOut);
