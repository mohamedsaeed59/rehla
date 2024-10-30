import { memo, useRef, useState } from "react";

import MenuCity from "../../Global/MenuCity";
import DeleteAccount from "./DeleteAccount";
import useClickOutside from "../../../hooks/useClickOutside";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../../app/hooks";
import { actUpdateProfile } from "../../../app/auth/authSlice";

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
  const [valCity, setValCity] = useState(userProfile.city_id);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedProfile = {
      ...userProfile,
      city_id: valCity?.id,
      gender: "male",
    };

    try {
      // Dispatch the action to update the profile
      const action = await dispatch(actUpdateProfile(updatedProfile));

      // Check for action result
      if (actUpdateProfile.fulfilled.match(action)) {
        // Update local state with the new profile data
        setUserProfile(action.payload.data); // Assuming response structure matches
        alert("Profile updated successfully.");
      } else {
        alert("Failed to update profile: " + action.error.message);
      }
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert("An error occurred while updating the profile.");
    }
  };

  return (
    <>
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label className="text-lg font-normal">
          Full Name <span className="text-red">*</span>
        </label>
        <input
          type="text"
          defaultValue={userProfile.name}
          onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })}
          className="rounded-lg p-2 focus:outline-none border border-borderColor"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-lg font-normal">
          Phone number <span className="text-red">*</span>
        </label>
        <input
          type="phone"
          defaultValue={userProfile.phone}
          onChange={(e) => setUserProfile({ ...userProfile, phone: e.target.value })}
          className="rounded-lg p-2 focus:outline-none border border-borderColor"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-lg font-normal">
          E-mail <span className="text-ry3Text">({t("Optional")})</span>
        </label>
        <input
          type="email"
          defaultValue={userProfile.email}
          onChange={(e) => setUserProfile({ ...userProfile, email: e.target.value })}
          className="rounded-lg p-2 focus:outline-none border border-borderColor"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-lg font-normal">
          Age <span className="text-red">*</span>
        </label>
        <input
          type="number"
          defaultValue={userProfile.age}
          onChange={(e) => setUserProfile({ ...userProfile, age: e.target.value })}
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
          value={valCity?.title}
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
          defaultValue={userProfile.address}
          onChange={(e) => setUserProfile({ ...userProfile, address: e.target.value })}
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
    </form>
      {openDeleteAccount && <DeleteAccount setOpenDeleteAccount={setOpenDeleteAccount} />}
    </>
  );
};

export default memo(ProfileForm);
