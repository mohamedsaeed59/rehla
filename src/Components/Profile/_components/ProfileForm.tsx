import { memo, useRef, useState } from "react";

import MenuCity from "../../Global/MenuCity";
import DeleteAccount from "./DeleteAccount";
import useClickOutside from "../../../hooks/useClickOutside";
import { useTranslation } from "react-i18next";

const ProfileForm = () => {
  const [openMenuCity, setOpenMenuCity] = useState<boolean>(false);
  const [openDeleteAccount, setOpenDeleteAccount] = useState<boolean>(false);
  const [valCity, setValCity] = useState<string>("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOpenMenuCity = () => {
    setOpenMenuCity(!openMenuCity);
  };
  const handleOpenDeleteAccount = () => {
    setOpenDeleteAccount(!openDeleteAccount);
  };

  useClickOutside(dropdownRef, () => setOpenMenuCity(false));

  const { t } = useTranslation();

  return (
    <form className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <label className="text-lg font-normal">
          Full Name <span className="text-red">*</span>
        </label>
        <input
          type="text"
          value={"Yomna Ashraf Ahmed"}
          className="rounded-lg p-2 focus:outline-none border border-borderColor"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-lg font-normal">
          Phone number <span className="text-red">*</span>
        </label>
        <input
          type="phone"
          value={"123456789"}
          className="rounded-lg p-2 focus:outline-none border border-borderColor"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-lg font-normal">
          E-mail <span className="text-ry3Text">({t("Optional")})</span>
        </label>
        <input
          type="email"
          value={"yomna@gmail.com"}
          className="rounded-lg p-2 focus:outline-none border border-borderColor"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-lg font-normal">
          Age <span className="text-red">*</span>
        </label>
        <input
          type="number"
          value={"26"}
          className="rounded-lg p-2 focus:outline-none border border-borderColor"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-lg font-normal">
          City <span className="text-red">*</span>
        </label>
        <div ref={dropdownRef} onClick={handleOpenMenuCity} className="relative">
        <input
          type="text"
          value={valCity}
          placeholder="Select Your city"
          className="rounded-lg p-2 w-full focus:outline-none border border-borderColor"
        />
        {openMenuCity && (
          <MenuCity setOpenMenuCity={setOpenMenuCity} setValCity={setValCity} />
        )}
      </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-lg font-normal">
          Address <span className="text-ry3Text">({t("Optional")})</span>
        </label>
        <input
          type="text"
          value={"22str, Iraq"}
          className="rounded-lg p-2 focus:outline-none border border-borderColor"
        />
      </div>

      <button
        type="submit"
        className="rounded-3xl p-2 focus:outline-none text-lg font-bold bg-mainBlack uppercase text-white"
      >
        Update
      </button>
      <div
        onClick={() => handleOpenDeleteAccount()}
        className="p-2 text-lg font-bold text-red text-center cursor-pointer"
      >
        Delete Account
      </div>
      {openDeleteAccount && <DeleteAccount />}
    </form>
  );
};

export default memo(ProfileForm);
