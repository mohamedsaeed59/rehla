import { memo } from "react";
import date from "../../../assets/date.png";
import { useAppDispatch } from "../../../app/hooks";
import { setDirectOrder } from "../../../app/order/orderSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MoreDetails = ({ shifts, orderDate, booking }: any) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleCheckout = (e: any) => {
    e.preventDefault(); 
    dispatch(
      setDirectOrder({
        ad_id: Number(booking?.ad_id),
        order_id: booking?.order_id,
        subtotal: Number(booking?.subtotal),
        total: Number(booking?.total),
        tax: Number(booking?.tax),
        booking_type: booking?.shifts?.length > 0 ? 'shift' : 'day',
        coupon_id: null,
        extra_no_adults: booking?.extra_no_adults,
        no_adults: booking?.no_adults,
        no_children: booking?.no_children,
        days: booking?.day,
        services: booking.services.map((service: any) => service.id),
        ...(booking?.shifts?.length > 0 && { shifts: booking.shifts.map((shift: any) => shift.id)}),
      })
    )
    navigate('/check-out');
  }

  return (
    <div className="transition duration-700 p-1">
      <div className="flex flex-col gap-6">
        <h3 className="text-[19px] font-normal text-mainBlack">
          {t("Register Shifts")}
        </h3>
        {booking.status == "approved" &&
         <button
            className="rounded-[33px] w-[200px] py-3 font-bold bg-mainBlack text-white" 
            onClick={handleCheckout}
          >
            {t("Complete Your Order")}
          </button>}

          {booking.status == "rejected" &&
         <p className="w-[250px] py-3 font-bold text-red">
            {t("Your order has been rejected")}
          </p>}

        <div className="flex flex-col gap-4">
        <div className="flex gap-2 py-2">
           <img src={date} alt="date" className="w-5 h-5" />
           <span className="text-base font-normal">{orderDate}</span>
         </div>
         </div>
       <>
     {shifts?.map((shift: any, index: number) => (
      <div key={index} className="w-[98%] md:w-[90%] mx-auto py-1">
        <div className="flex justify-between py-2">
          <p className="text-primary text-[15px] font-normal">
            {shift?.name}{" "}
            <span className="text-ry3Text">
              ({shift?.from} - {shift?.to})
            </span>
          </p>
          <p className="text-mainBlack text-[18px] font-normal">
            {shift?.price} |{t("QD")}
          </p>
        </div>
        <div>
          <ol className="relative space-y-8">
            {shift?.statuses?.map((status: any, idx: number) => {
              const isActive = status.status;
              return (
                <li
                  key={idx}
                  className="relative flex items-center pl-8"
                >
                  {/* Connecting line */}
                  {idx < shift?.statuses?.length - 1 && (
                    <span
                      className={`absolute top-[33px] left-[46px] h-full w-[2px] ${
                        isActive ? 'bg-[#62adcf]' : 'bg-borderColor'
                      } z-0`}
                    ></span>
                  )}
                  {/* Icon and content */}
                  <span
                    className={`w-8 h-8 rounded-full flex justify-center items-center z-10 relative mr-3 ${
                      isActive ? 'bg-[#62adcf] border-[#62adcf]' : 'bg-[#dbdbdb] border-[#dbdbdb]'
                    }`}
                  >
                    <img
                      src={status?.icon}
                      alt={status?.name}
                      className="w-4 h-4"
                    />
                  </span>
                  <div>
                    <h4 className="text-[19px] font-medium text-ry4Text">
                      {status?.name}
                    </h4>
                    {status?.date && (
                      <p className="text-[15px] font-light text-gray-600">
                        {status?.date}
                      </p>
                    )}
                  </div>
                </li>
              )})}
          </ol>
        </div>
      </div>
      ))}
       </>
      </div>
    </div>
  );
};

export default memo(MoreDetails);
