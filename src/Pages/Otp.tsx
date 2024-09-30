import { memo } from "react";
import otp from "../assets/icons/otp.svg";
import error from "../assets/icons/erroricon.svg";
import { Link, useNavigate } from "react-router-dom";

const Otp = () => {
  const navigate = useNavigate();
  return (
    <div className="overflow-hidden">
      <div className="p-6 md:p-12">
        <div className="text-end w-full p-4">
          <Link to={"/home"} className="font-normal text-base sm:text-xl">
            Skip
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={otp} alt="otp" className="w-[200px] h-[200px]" />
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-lg text-start text-mainBlack">
              OTP Verification
            </h3>
            <p className="font-normal text-[0.9rem] text-start text-ry3Text">
              Enter your OTP that was sent to{" "}
              <span className="text-mainBlack">‎+964-11-4884697 </span>
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-center gap-2 py-4">
              <div className="w-[50px] h-[50px] p-3 border border-borderColor rounded-[8px] flex justify-center items-center">
                <input
                  type="text"
                  placeholder="."
                  className="placeholder-textPlaceholder w-full h-full text-center focus:outline-none"
                />
              </div>
              <div className="w-[50px] h-[50px] p-3 border border-borderColor rounded-[8px]">
                <input
                  type="text"
                  placeholder="."
                  className="placeholder-textPlaceholder w-full h-full text-center focus:outline-none"
                />
              </div>
              <div className="w-[50px] h-[50px] p-3 border border-borderColor rounded-[8px]">
                <input
                  type="text"
                  placeholder="."
                  className="placeholder-textPlaceholder w-full h-full text-center focus:outline-none"
                />
              </div>
              <div className="w-[50px] h-[50px] p-3 border border-borderColor rounded-[8px]">
                <input
                  type="text"
                  placeholder="."
                  className="placeholder-textPlaceholder w-full h-full text-center focus:outline-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 py-1">
              <img src={error} alt="error" className="w-[16px] h-[16px]" />
              <p className="text-red text-[0.9rem]">
                Please enter a valid code
              </p>
            </div>
            <div className="w-full md:w-[290px]">
              <button
                onClick={() => navigate("/tellUs")}
                type="submit"
                className="w-full rounded-3xl p-2 focus:outline-none text-lg font-bold bg-mainBlack text-white"
              >
                Verify
              </button>
            </div>
            <p className="text-center font-normal text-[14px] text-mainBlack">
              Not received a message?{" "}
              <Link to={"/register"} className="text-primary">
                Send again
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Otp);
