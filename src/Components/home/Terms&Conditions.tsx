import { memo } from "react";

const TermsConditions = () => {
  return (
    <div className="fixed bottom-3 left-[5%] lg:left-[10%] bg-body w-[90%] lg:w-[80%] mx-auto z-50 rounded-lg border">
      <div className="flex justify-between items-center p-4">
        <p className="text-sm font-normal">
          You agree to our{" "}
          <span className="text-primary text-base font-normal leading-4 border-b border-b-primary">
            Terms and Conditions
          </span>
        </p>
        <div className="flex gap-2">
          <button className="w-[175px] py-2 px-4 text-ry3Text font-bold text-sm rounded-3xl">
            Cancel
          </button>
          <button className="w-[175px] py-2 px-4 bg-mainBlack text-white font-bold text-sm rounded-3xl">
            Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(TermsConditions);
