import { memo } from "react";
import Delete from "../../assets/icons/Delete.svg";
import { Link } from "react-router-dom";

const DeleteAccount = () => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center backdrop-blur-[8px] bg-black/20">
      <div className="w-full md:w-[500px] rounded-3xl bg-body border border-borderColor2 shadow-sm mx-8">
        <div className="flex flex-col justify-center text-mainBlack">
          <div className="flex flex-col items-center gap-4 py-12 px-6">
            <img src={Delete} alt="Delete" className="w-[18px] h-5" />
            <h3 className="font-bold text-lg sm:text-2xl">
              Delete your account?
            </h3>
            <p className="font-normal text-sm sm:text-base text-ry5Text text-center">
              By deleting your Account you will lose your all data
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:flex-nowrap justify-center items-center mb-6 w-[80%] mx-auto">
            <button className="rounded-3xl border border-ry4Text py-1 px-3 w-full md:w-1/2 text-mainBlack">
              CANCEL
            </button>
            <Link to={"/"} className="py-1 px-3 text-red text-center w-full md:w-1/2">
              Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(DeleteAccount);