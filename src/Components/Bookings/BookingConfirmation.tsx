import { memo, useState } from "react";
import bookingConfirmation from "../../assets/BookingConfirmation.gif";
import Rate from "./Rate";
import { useTranslation } from "react-i18next";

const BookingConfirmation = () => {
  const [openRate, setOpenRate] = useState<boolean>(false);

  const handleOpenRate = () => {
    setOpenRate(!openRate);
  };

  const { t } = useTranslation();

  return (
    <>
      <div className="container py-9">
        <div className="flex items-center flex-col justify-center gap-6">
          <img
            src={bookingConfirmation}
            alt="bookingConfirmation"
            className="w-full max-w-[350px]"
          />
          <div className="flex items-center flex-col justify-center text-center gap-1">
            <p className="text-[16px] md:text-xl leading-[21px] font-bold text-[#4A4A4A]">
            {t('GetReady')}
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-mainBlack">
            {t('YourBookingChaletConfirmed')}
            </h3>
          </div>
          <button
            onClick={() => handleOpenRate()}
            className="text-[14px] w-full md:w-[90%] duration-500 border border-mainBlack hover:bg-mainBlack hover:text-white font-bold leading-[17px] rounded-3xl py-3"
          >
            {t('ReviewDetails')}
          </button>
        </div>
        {openRate && <Rate setOpenRate={setOpenRate}/>}
      </div>
    </>
  );
};

export default memo(BookingConfirmation);
