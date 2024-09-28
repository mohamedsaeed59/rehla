import { memo } from "react";
import image from "../../assets/rate/Vector.svg";
import close from "../../assets/rate/close.svg";

const Rate = () => {
  return (
    <>
      <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center backdrop-blur-[8px] bg-black/30">
        <div className="w-full md:w-[480px] rounded-3xl bg-body border border-borderColor2 shadow-sm mx-2">
          <div className="flex flex-col justify-center items-center px-4 py-8 gap-6">
            <div className="flex justify-center items-center gap-2">
              <h3 className="font-bold text-xl text-center text-mainBlack">
                Thank you
              </h3>
              <img src={image} alt="logo" className="w-10 h-10" />
            </div>
            <p className="text-ry3Text text-center font-normal text-sm">
              We will enhance the app to be better for you!
            </p>
            <div className="border rounded-3xl px-7 py-1">
              <button className="rounded-3xl text-ry3Text py-1 px-3 flex justify-center items-center gap-1">
                <img src={close} alt="logo" className="w-4 h-4" />
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Rate);
