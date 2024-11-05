import { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addOrder, useCoupon } from "../../app/order/orderSlice";
import { actSettings } from "../../app/SettingsSlice";

const FormCheckOut = ({directOrders} : any) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { coupon_code, percentage } = useAppSelector((state: any) => state.order);  
  const { chaletDetails } = useAppSelector((state: any) => state.chalet);  
  const { data } = useAppSelector((state: any) => state.settings);
  const [coupon, setCoupon] = useState("");
  const [errorMessage, setErrorMessage] = useState<any>("");
  const lang = localStorage.getItem("i18nextLng") || "en";

  useEffect(() => {
    dispatch(actSettings(lang));
  }, [])

  const handleCoupon = (e: any) => {
    e.preventDefault();
    dispatch(useCoupon({ coupon_code: coupon }));
  }
  // Calculate the Invoice
  const SubTotal = directOrders?.subtotal;
  const Tax = directOrders?.tax;
  const Total = directOrders?.total - Number(percentage);  

  const handleCreateOrder = async (e: any) => {
    e.preventDefault();
    if(chaletDetails.rent_type == "direct"){
      try {
        const resultAction = await dispatch(addOrder({
          ad_id: directOrders?.ad_id,
          subtotal: SubTotal,
          total: Total + Tax,
          tax: Tax,
          booking_type: directOrders?.booking_type,
          coupon_id: coupon_code || null,
          extra_no_adults: directOrders.extra_no_adults,
          no_adults: directOrders.no_adults,
          no_children: directOrders.no_children,
          days: directOrders?.days,
          services: directOrders?.services,
          ...(chaletDetails.have_shifts && { shifts: directOrders?.shifts }),
        })).unwrap();
    
        if (resultAction.status === 200) {
          navigate('/booking-confirmation');
          localStorage.removeItem('directOrders');
        }
      } catch (error: any) {
        setErrorMessage(error.response.data.message)
      }
    }else{

    }
  };
  

  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label className="text-xs font-normal">
          {t("Name in card")} <span className="text-red"> * </span>
        </label>
        <input
          type="text"
          placeholder="Write your name"
          className="rounded-lg p-2 focus:outline-none border focus:border-primary border-borderColor"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs font-normal">
          {t("card Number")}
          <span className="text-red"> *</span>
        </label>
        <input
          type="number"
          placeholder="0000 0000 0000 0000"
          className="rounded-lg p-2 focus:outline-none border focus:border-primary border-borderColor"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs font-normal">
          {t("Date on card")}
          <span className="text-red"> *</span>
        </label>
        <input
          type="date"
          className="rounded-lg p-2 focus:outline-none border focus:border-primary border-borderColor"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs font-normal">
          {t("CVC")}
          <span className="text-red"> * </span>
        </label>
        <input
          type="password"
          placeholder="***"
          className="rounded-lg p-2 focus:outline-none border focus:border-primary border-borderColor"
        />
      </div>
      <div className="bg-ryBackground border rounded-xl flex flex-col justify-center gap-1 items-center py-6">
        <svg
          width="24"
          height="28"
          viewBox="0 0 24 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 28L5.82401 24.707C4.06301 23.7705 2.59101 22.3721 1.56501 20.6619C0.539008 18.9517 -0.00199447 16.9944 5.5252e-06 15V2C5.5252e-06 1.4696 0.211004 0.9609 0.586004 0.5858C0.961004 0.2107 1.47 0 2 0H22C22.53 0 23.039 0.2107 23.414 0.5858C23.789 0.9609 24 1.4696 24 2V15C24.002 16.9944 23.461 18.9517 22.435 20.6619C21.409 22.3721 19.937 23.7705 18.176 24.707L12 28ZM2 2V15C1.999 16.6317 2.442 18.2329 3.281 19.632C4.121 21.0311 5.32601 22.1753 6.76601 22.942L12 25.733L17.234 22.943C18.675 22.1763 19.879 21.0319 20.719 19.6326C21.558 18.2333 22.001 16.6319 22 15V2H2Z"
            fill="#62ADCF"
          />
        </svg>

        <p className="text-center w-[90%] md:w-[70%]">
          {t("We are fully compliant with the payment card industry")}
        </p>
      </div>

      <div className="flex">
        <input
          onChange={(e: any) => setCoupon(e.target.value)}
          className="border border-borderColor rtl:border-l-0 ltr:border-r-0 


           rtl:rounded-br-lg rtl:rounded-tr-lg
           ltr:rounded-bl-lg ltr:rounded-tl-lg

           focus:outline-none py-2 px-2 flex-1"
          placeholder={t("Discount or voucher code")}
        />
        <button
          onClick={handleCoupon}
          className="bg-mainBlack text-white 
        rtl:rounded-bl-lg rtl:rounded-tl-lg
        ltr:rounded-br-lg ltr:rounded-tr-lg
         py-2 px-4 m-0"
        >
          {t("Apply")}
        </button>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="text-base font-normal text-mainBlack">Subtotal</p>
            <span className="text-base font-light text-mainBlack">
              {SubTotal} |QD
            </span>
          </div>
          <div className="flex justify-between pb-2">
            <p className="text-base font-normal text-mainBlack">Taxes ({data?.tax}%) </p>
            <span className="text-base font-light text-mainBlack">{Tax} |QD</span>
          </div>
        </div>
        <div className="flex justify-between border-t pt-2">
          <p>Total</p>
          <span className="text-primary font-bold">{Total + Tax} |QD</span>
        </div>
      </div>
      <button
        // to={"/booking-confirmation"}
        // type="submit"
        onClick={handleCreateOrder}
        className="rounded-3xl text-center py-4 text-sm font-bold bg-mainBlack text-white"
      >
        CONFIRM PAYMENT ...{Total + Tax} IQD
      </button>
      <span className="text-red">{errorMessage}</span>
    </form>
  );
};

export default memo(FormCheckOut);

/*


*/
