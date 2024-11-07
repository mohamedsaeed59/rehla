import { memo } from "react";
import { useAppSelector } from "../../../app/hooks";

type Props = {
  setShowTerms: (open: boolean) => void;
  setOpenMenuTerms: (open: boolean) => void;
  handleAgree: () => void;
};
const Conditions = ({ setShowTerms, setOpenMenuTerms, handleAgree }: Props) => {
  const { data } = useAppSelector((state) => state.settings);

  const handleCancel = () => {
    setOpenMenuTerms(false);
    setShowTerms(false);
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center backdrop-blur-[8px] bg-black/50 z-50">
      <div className="bg-body w-[90%] md:w-[70%] mx-auto z-50 rounded-lg border border-ry4Text shadow-md p-3 md:p-6">
        <div className="flex flex-col gap-4">
          <h3 className="text-primary font-bold text-[22px]">
            {data?.terms_title}
          </h3>
          <p className="text-[18px] font-normal text-mainBlack">
            Your Agreement
          </p>
          <div className="">
            <p className="h-[400px] overflow-y-scroll text-ry3Text text-lg font-normal">
            {data?.terms_body}
            </p>
          </div>
          <div className="flex gap-2 justify-end">
            <button
              onClick={handleCancel}
              className="w-[175px] py-2 px-4 text-ry3Text font-bold text-sm rounded-3xl"
            >
              Cancel
            </button>
            <button
              onClick={handleAgree}
              className="w-[175px] py-2 px-4 bg-mainBlack text-white font-bold text-sm rounded-3xl"
            >
              Agree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Conditions);
