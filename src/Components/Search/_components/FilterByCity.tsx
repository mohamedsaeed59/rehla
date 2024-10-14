import { memo } from "react";
import close from "../../../assets/icons/close.svg";

type Props = {
  setOpenMenuCity: (open: boolean) => void;
};

const FilterByCity = ({ setOpenMenuCity }: Props) => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center backdrop-blur-[8px] bg-black/50 z-50">
      <div className="rounded-3xl bg-body border w-full md:w-[600px] border-borderColor2 shadow-sm mx-8">
        <div className="flex flex-col justify-center text-mainBlack p-4">
          <div className="flex justify-between items-center p-2">
            <h3 className="text-lg font-bold text-mainBlack">
              Select your city
            </h3>
            <div
              onClick={() => setOpenMenuCity(false)}
              className="rounded-full p-2 bg-ryBackground"
            >
              <img src={close} alt="close" className="w-8 h-8" />
            </div>
          </div>
          <form className="flex flex-col gap-3 p-2">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="1"
                value=""
                name="city"
                className="cursor-pointer w-4 h-4"
              />
              <label className="text-lg font-normal cursor-pointer" htmlFor="1">
                Baghdad
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="2"
                value=""
                name="city"
                className="cursor-pointer w-4 h-4"
              />
              <label className="text-lg font-normal cursor-pointer" htmlFor="2">
                Mosul
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="3"
                value=""
                name="city"
                className="cursor-pointer w-4 h-4"
              />
              <label className="text-lg font-normal cursor-pointer" htmlFor="3">
                Basra
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="4"
                value=""
                name="city"
                className="cursor-pointer w-4 h-4"
              />
              <label className="text-lg font-normal cursor-pointer" htmlFor="4">
                Kirkuk
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="5"
                value=""
                name="city"
                className="cursor-pointer w-4 h-4"
              />
              <label className="text-lg font-normal cursor-pointer" htmlFor="5">
                Erbil
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="6"
                value=""
                name="city"
                className="cursor-pointer w-4 h-4"
              />
              <label className="text-lg font-normal cursor-pointer" htmlFor="6">
                Najaf
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="7"
                value=""
                name="city"
                className="cursor-pointer w-4 h-4"
              />
              <label className="text-lg font-normal cursor-pointer" htmlFor="7">
                Karbala
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="8"
                value=""
                name="city"
                className="cursor-pointer w-4 h-4"
              />
              <label className="text-lg font-normal cursor-pointer" htmlFor="8">
                Amarah
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="9"
                value=""
                name="city"
                className="cursor-pointer w-4 h-4"
              />
              <label className="text-lg font-normal cursor-pointer" htmlFor="9">
                Mosul
              </label>
            </div>

            <div className="flex justify-center items-center my-2">
              <div className="w-full md:w-[414px] rounded-3xl p-2 text-center focus:outline-none text-base font-bold bg-mainBlack text-white">
                Confirm
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default memo(FilterByCity);
