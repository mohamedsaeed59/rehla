import { memo, useRef, useState } from "react";

import MenuCity from "../../Global/MenuCity";
import DeleteAccount from "./DeleteAccount";
import useClickOutside from "../../../hooks/useClickOutside";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { actUpdateProfile } from "../../../app/auth/authSlice";

type City = {
  id: number;
  title: string;
};

const ProfileForm = () => {
  const [userProfile, setUserProfile] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    city_id: undefined,
    address: "",
    gender: "",
  });

  const [openMenuCity, setOpenMenuCity] = useState<boolean>(false);
  const [openDeleteAccount, setOpenDeleteAccount] = useState<boolean>(false);
  // const [valCity, setValCity] = useState(userProfile.city_id);
  const [valCity, setValCity] = useState<City | undefined>(userProfile.city_id as City | undefined);
  const { data, error } = useAppSelector((state) => state.auth);  
  
  const dispatch = useAppDispatch();  

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOpenMenuCity = () => {
    setOpenMenuCity(!openMenuCity);
  };
  const handleOpenDeleteAccount = () => {
    setOpenDeleteAccount(!openDeleteAccount);
  };

  useClickOutside(dropdownRef, () => setOpenMenuCity(false));

  const { t } = useTranslation();

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const updatedProfile = {
  //     ...userProfile,
  //     city_id: valCity?.id,
  //     gender: "male",
  //   };

  //   try {
  //     const action = await dispatch(actUpdateProfile(updatedProfile));

  //     if (actUpdateProfile.fulfilled.match(action)) {
  //       setUserProfile(action.payload.data);
  //     }
  //   } catch (error) {
  //     // console.log("Failed to update profile:", error.response.data.message);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const updatedProfile = {
      name: userProfile.name || data?.name,
      email: userProfile.email || data?.email,
      phone: userProfile.phone || data?.phone,
      age: userProfile.age || data?.age,
      city_id: valCity?.id || data?.city_id,
      address: userProfile.address || data?.address,
      gender: userProfile.gender || data?.gender,
    };
  
    try {
      const action = await dispatch(actUpdateProfile(updatedProfile));
  
      if (actUpdateProfile.fulfilled.match(action)) {
        setUserProfile(action.payload.data);
      }
    } catch (error) {
      console.log("Failed to update profile:", error);
    }
  };
  
  return (
    <>
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label className="text-lg font-normal">
          {t("Full Name")} <span className="text-red">*</span>
        </label>
        <input
          type="text"
          defaultValue={data?.name}
          // placeholder={data?.name}
          onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })}
          className="rounded-lg p-2 focus:outline-none border border-borderColor"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-lg font-normal">
          {t("Phone number")} <span className="text-red">*</span>
        </label>
        <input
          type="phone"
          defaultValue={data?.phone}
          // placeholder={data?.phone}
          onChange={(e) => setUserProfile({ ...userProfile, phone: e.target.value })}
          className="rounded-lg p-2 focus:outline-none border border-borderColor"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-lg font-normal">
          {t("E-mail")} <span className="text-ry3Text">({t("Optional")})</span>
        </label>
        <input
          type="email"
          defaultValue={data?.email}
          // placeholder={data?.email}
          onChange={(e) => setUserProfile({ ...userProfile, email: e.target.value })}
          className="rounded-lg p-2 focus:outline-none border border-borderColor"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-lg font-normal">
          {t("Age")} <span className="text-red">*</span>
        </label>
        <input
          type="number"
          defaultValue={data?.age}
          // placeholder={data?.age}
          onChange={(e) => setUserProfile({ ...userProfile, age: e.target.value })}
          className="rounded-lg p-2 focus:outline-none border border-borderColor"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-lg font-normal">
          {t("City")} <span className="text-red">*</span>
        </label>
        <div ref={dropdownRef} onClick={handleOpenMenuCity} className="relative">
        <input
          type="text"
          value={valCity?.title}
          // placeholder={data?.city}
          className="rounded-lg p-2 w-full focus:outline-none border border-borderColor"
        />
        {openMenuCity && (
          <MenuCity setOpenMenuCity={setOpenMenuCity} setValCity={setValCity} />
        )}
      </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-lg font-normal">
          {t("Address")} <span className="text-ry3Text">({t("Optional")})</span>
        </label>
        <input
          type="text"
          defaultValue={data?.address}
          // placeholder={data?.address}
          onChange={(e) => setUserProfile({ ...userProfile, address: e.target.value })}
          className="rounded-lg p-2 focus:outline-none border border-borderColor"
        />
      </div>

      <button
        type="submit"
        className="rounded-3xl p-2 focus:outline-none text-lg font-bold bg-mainBlack uppercase text-white"
      >
        {t("Update")}
      </button>
      {error && 
        <p className="text-red text-center">{error}</p>
      }
      <div
        onClick={() => handleOpenDeleteAccount()}
        className="p-2 text-lg font-bold text-red text-center cursor-pointer"
      >
        {t("Delete Account")}
      </div>
    </form>
      {openDeleteAccount && <DeleteAccount setOpenDeleteAccount={setOpenDeleteAccount} />}
    </>
  );
};

export default memo(ProfileForm);
