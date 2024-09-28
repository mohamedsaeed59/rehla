import { memo, useState } from "react";
import image1 from "../../assets/rate/bad experience.svg";
import image2 from "../../assets/rate/good.svg";
import image3 from "../../assets/rate/loved.svg";
import image4 from "../../assets/rate/v.good.svg";
import RateThanks from "./RateThanks";

const Rate = () => {
  const [openRateThanks, setOpenRateThanks] = useState<boolean>(false);

  const handleOpenRateThanks = () => {
    setOpenRateThanks(!openRateThanks);
  };

  return (
    <>
      <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center backdrop-blur-[8px] bg-black/30">
        <div className="w-full md:w-[480px] rounded-3xl bg-body border border-borderColor2 shadow-sm mx-3">
          <div className="flex flex-col justify-center px-4 py-8 gap-6">
            <h3 className="font-normal text-xl text-center text-mainBlack">
              How was your experience through our App?
            </h3>
            <div className="flex justify-center items-center gap-3 md:gap-5">
              <img src={image1} alt="logo" className="w-10 h-10" />
              <img src={image2} alt="logo" className="w-10 h-10" />
              <img src={image3} alt="logo" className="w-10 h-10" />
              <img src={image4} alt="logo" className="w-10 h-10" />
            </div>
            <div className="flex gap-4 justify-center items-center mb-6 mx-auto">
              <button className="rounded-3xl text-ry3Text py-1 px-3">
                Cancel
              </button>
              <button
                onClick={() => handleOpenRateThanks()}
                className="py-1 px-3 text-mainBlack text-center font-bold text-sm md:text-base border rounded-3xl border-mainBlack"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
        {openRateThanks && <RateThanks />}
      </div>
    </>
  );
};

export default memo(Rate);
