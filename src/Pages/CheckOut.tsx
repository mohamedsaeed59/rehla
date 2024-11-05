import { memo } from "react";
import CardCheckOut from "../Components/CheckOut/CardCheckOut";
import PaymentMethod from "../Components/CheckOut/PaymentMethod";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../app/hooks";

const CheckOut = () => {
  const { t } = useTranslation();
  const { directOrders } = useAppSelector((state: any) => state.order);  

  return (
    <>
      <div>
        <h2 className="font-bold text-2xl text-mainBlack text-center my-6">
          {t("Check out")}
        </h2>
        <div className="container py-9">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <CardCheckOut directOrders={directOrders} />
            <div>
              <PaymentMethod directOrders={directOrders} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(CheckOut);
