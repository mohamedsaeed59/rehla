import { memo, useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";

import MenuCity from "../../Global/MenuCity";
import DeleteAccount from "./DeleteAccount";
import useClickOutside from "../../../hooks/useClickOutside";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { actUpdateProfile } from "../../../app/auth/authSlice";
import { toast } from "react-toastify";

type City = {
  id: number;
  title: string;
};

type ProfileFormInputs = {
  name: string;
  email: string;
  phone: string;
  age: number;
  city_id: number;
  address: string;
  gender: string;
};

const ProfileForm = () => {
  const { data, error } = useAppSelector((state) => state.auth);
  
  const { register, handleSubmit, formState: { errors }, setValue, control } = useForm<ProfileFormInputs>({
    defaultValues: {
      name: "",
      phone: "",
      age: 0,
      city_id: undefined,
      address: "",
      email: "",
      gender: data?.gender || "",
    },
  });

  const [openMenuCity, setOpenMenuCity] = useState<boolean>(false);
  const [openDeleteAccount, setOpenDeleteAccount] = useState<boolean>(false);
  const [valCity, setValCity] = useState<City | undefined>(undefined);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleOpenMenuCity = () => setOpenMenuCity(!openMenuCity);
  const handleOpenDeleteAccount = () => setOpenDeleteAccount(!openDeleteAccount);

  useClickOutside(dropdownRef, () => setOpenMenuCity(false));

  useEffect(() => {
    if (data) {
      setValue("name", data.name);
      setValue("phone", data.phone);
      setValue("email", data.email || "");
      setValue("age", data.age);
      setValue("address", data.address || "");
      setValue("city_id", data.city_id);
      setValCity({ id: data.city_id, title: data.city });
    }
  }, [data, setValue]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const onSubmit = async (formData: ProfileFormInputs) => {
    try {
      const action = await dispatch(
        actUpdateProfile({
          ...formData,
          city_id: valCity?.id || formData.city_id,
        })
      );

      if (actUpdateProfile.fulfilled.match(action)) {
        toast.success(action.payload.message);
      }
    } catch (err) {
      toast.error(t("Failed to update profile"));
    }
  };

  return (
    <>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1">
          <label className="text-lg font-normal">
            {t("Full Name")} <span className="text-red">*</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="rounded-lg p-2 focus:outline-none border border-borderColor"
          />
           {errors.name && <span className="text-red text-sm">{t("name is required")}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-lg font-normal">
            {t("Phone number")} <span className="text-red">*</span>
          </label>
          <input
            type="phone"
            {...register("phone", { required: true })}
            className="rounded-lg p-2 focus:outline-none border border-borderColor"
          />
           {errors.phone && <span className="text-red text-sm">{t("phone is required")}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-lg font-normal">
            {t("E-mail")} <span className="text-ry3Text">({t("Optional")})</span>
          </label>
          <input
            type="email"
            {...register("email")}
            className="rounded-lg p-2 focus:outline-none border border-borderColor"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-lg font-normal">
            {t("Age")} <span className="text-red">*</span>
          </label>
          <input
            type="number"
            {...register("age", { required: true })}
            className="rounded-lg p-2 focus:outline-none border border-borderColor"
          />
           {errors.age && <span className="text-red text-sm">{t("age is required")}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-lg font-normal">
            {t("City")} <span className="text-red">*</span>
          </label>
          <div ref={dropdownRef} onClick={handleOpenMenuCity} className="relative">
            <Controller
              name="city_id"
              control={control}
              render={() => (
                <input
                  type="text"
                  value={valCity?.title || ""}
                  readOnly
                  className="rounded-lg p-2 w-full focus:outline-none border border-borderColor"
                />
              )}
            />
            {openMenuCity && <MenuCity setOpenMenuCity={setOpenMenuCity} setValCity={setValCity} />}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-lg font-normal">
            {t("Address")} <span className="text-ry3Text">({t("Optional")})</span>
          </label>
          <input
            type="text"
            {...register("address")}
            className="rounded-lg p-2 focus:outline-none border border-borderColor"
          />
        </div>

        <button
          type="submit"
          className="rounded-3xl p-2 focus:outline-none text-lg font-bold bg-mainBlack uppercase text-white"
        >
          {t("Update")}
        </button>
        <div
          onClick={handleOpenDeleteAccount}
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
