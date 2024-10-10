import { Link } from "react-router-dom";
import thanksRequeste from "../../../assets/thanks-requeste.gif";

export default function ThanksRequesting() {
  return (
    <div className="container py-11">
      <div className="flex items-center flex-col justify-center gap-6">
        <img
          src={thanksRequeste}
          alt="bookingConfirmation"
          className="w-full max-w-[200px] h-[200px]"
        />
        <div className="flex items-center flex-col justify-center text-center gap-1">
          <h3 className="text-xl md:text-2xl font-bold text-mainBlack">
            Thanks for Requesting
          </h3>
          <p className="text-[16px] md:text-lg leading-[21px] font-normal text-mainBlack">
            This chalet needs a confirmation from the owner
          </p>
          <p className="text-[16px] md:text-lg leading-[21px] font-normal text-[#4A4A4A]">
            (This usually takes 24 hrs for responding)
          </p>
        </div>
        <Link to={"/"} className="text-[14px] w-full text-center md:w-[40%] duration-500 border border-mainBlack hover:bg-mainBlack hover:text-white font-bold leading-[17px] rounded-3xl py-3">
        Back to home
        </Link>
      </div>
    </div>
  );
}