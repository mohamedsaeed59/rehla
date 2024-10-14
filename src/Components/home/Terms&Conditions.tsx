import { memo, useState } from "react";
import Conditions from "./_components/Conditions";

type Props = {
  setShowTermsConditions: (open: boolean) => void;
  handleAgree: () => void;
};

const TermsConditions = ({ handleAgree, setShowTermsConditions }: Props) => {
  const [openMenuTermsConditions, setOpenMenuTermsConditions] =
    useState<boolean>(false);

  const handleOpenTermsConditions = () => {
    setOpenMenuTermsConditions(!openMenuTermsConditions);
  };

  return (
    <div>
      <div className="fixed bottom-3 left-[5%] lg:left-[10%] bg-body w-[90%] lg:w-[80%] mx-auto z-50 rounded-lg border">
        <div className="flex justify-between flex-wrap sm:flex-none items-center gap-3 p-4">
          <p className="text-sm font-normal">
            You agree to our{" "}
            <span
              onClick={handleOpenTermsConditions}
              className="text-primary cursor-pointer text-sm font-normal leading-4 border-b border-b-primary"
            >
              Terms and Conditions
            </span>
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setShowTermsConditions(false)}
              className="md:w-[175px] py-2 px-4 text-ry3Text font-bold text-sm rounded-3xl"
            >
              Cancel
            </button>
            <button
              onClick={handleAgree}
              className="md:w-[175px] py-1 md:py-2 px-4 bg-mainBlack text-white font-bold text-[12px] md:text-sm rounded-3xl"
            >
              Agree
            </button>
          </div>
        </div>
      </div>
      {openMenuTermsConditions && (
        <Conditions setOpenMenuTerms={setOpenMenuTermsConditions} handleAgree={handleAgree} setShowTerms={ setShowTermsConditions}/>
      )}
    </div>
  );
};

export default memo(TermsConditions);
