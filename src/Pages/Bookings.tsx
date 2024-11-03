import { memo, useEffect } from "react";
import CardMyBookings from "../Components/Bookings/CardMyBookings";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchOrders } from "../app/order/orderSlice";

const Bookings = () => {
  const dispatch = useAppDispatch();
  const { orders } = useAppSelector((state: any) => state.order);
console.log(orders);

  useEffect(() => {
    dispatch(fetchOrders());
}, [dispatch])

  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 gap-4 py-6">
          <div className="flex flex-col gap-7">
          {orders?.map((booking: any) => (
            <CardMyBookings key={booking.order_id} booking={booking} />
          ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Bookings);
