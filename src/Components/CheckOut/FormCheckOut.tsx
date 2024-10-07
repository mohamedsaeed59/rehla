import { memo } from "react";
import image from "../../assets/6438892.png";
import { Link } from "react-router-dom";

const FormCheckOut = () => {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label className="text-xs font-normal">
          Name on card <span className="text-red"> * </span>
        </label>
        <input
          type="text"
          placeholder="Write your name"
          className="rounded-lg p-2 focus:outline-none border focus:border-primary border-borderColor"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs font-normal">
          card Number<span className="text-red"> *</span>
        </label>
        <input
          type="number"
          placeholder="0000 0000 0000 0000"
          className="rounded-lg p-2 focus:outline-none border focus:border-primary border-borderColor"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs font-normal">
          Date on card<span className="text-red"> *</span>
        </label>
        <input
          type="date"
          className="rounded-lg p-2 focus:outline-none border focus:border-primary border-borderColor"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs font-normal">
          CVC<span className="text-red"> * </span>
        </label>
        <input
          type="password"
          placeholder="***"
          className="rounded-lg p-2 focus:outline-none border focus:border-primary border-borderColor"
        />
      </div>
      <div className="bg-ryBackground border rounded-xl flex flex-col justify-center items-center py-6">
        <img src={image} alt="image" className="w-[40px]" />
        <p className="text-center">
          We are fully compliant with the payment card industry data security
          stansards
        </p>
      </div>
      <div className="rounded-lg border border-borderColor">
        <div className="flex p-[0.2%]">
          <input
            className="border-none focus:outline-none p-1 flex-1"
            placeholder="Discount or voucher code"
          />
          <button className="bg-mainBlack text-white rounded-lg p-3 px-4 m-0">
            Apply
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="text-base font-normal text-mainBlack">Subtotal</p>
            <span className="text-base font-light text-mainBlack">
              1,100 |QD
            </span>
          </div>
          <div className="flex justify-between pb-2">
            <p className="text-base font-normal text-mainBlack">Taxes (0%) </p>
            <span className="text-base font-light text-mainBlack">-</span>
          </div>
        </div>
        <div className="flex justify-between border-t pt-2">
          <p>Total</p>
          <span className="text-primary font-bold">1,100 |QD</span>
        </div>
      </div>
      <Link to={"/booking-confirmation"}
        // type="submit"
        className="rounded-3xl text-center py-4 text-sm font-bold bg-mainBlack text-white"
      >
        CONFIRM PAYMENT ...1,030 IQD
      </Link>
    </form>
  );
};

export default memo(FormCheckOut);

/*


*/
