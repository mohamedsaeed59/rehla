import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { actSettings } from "../../app/SettingsSlice";
import { useTranslation } from "react-i18next";

type props = {
  setOpenMenuCity: (open: boolean) => void;
  setValCity: (open: string) => void;
};

const MenuCity = ({ setOpenMenuCity, setValCity }: props) => {
  const { t } = useTranslation();
  const { data, loading } = useAppSelector((state) => state.settings);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const lang = localStorage.getItem("i18nextLng") || "en";

    dispatch(actSettings(lang));
  }, [dispatch]);

  const handleOpenMenuCity = (data: string) => {
    setOpenMenuCity(false);
    setValCity(data);
  };
  return (
    <div className="absolute left-0 bg-body border border-borderColor border-t-0 rounded-md rounded-tl-none rounded-tr-none w-full shadow-sm">
      <div className="p-2">
        <h3 className="font-medium text-lg text-mainBlack"> {t("Select your city")}</h3>
        {loading === "pending" && <p>loading</p>}
        <form className="flex flex-col gap-3 p-2">
          {data?.cities?.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-1 w-fit"
              onClick={() => handleOpenMenuCity(item.title)}
            >
              <input
                type="radio"
                id="Baghdad"
                value=""
                name="city"
                className="w-4 h-4 cursor-pointer"
              />
              <label className="text-lg cursor-pointer" htmlFor="Baghdad">
                {item.title}
              </label>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default memo(MenuCity);

/*
 <div
            className="flex items-center gap-1 w-fit"
            onClick={() => handleOpenMenuCity("Baghdad")}
          >
            <input
              type="radio"
              id="Baghdad"
              value=""
              name="city"
              className="w-4 h-4 cursor-pointer"
            />
            <label className="text-lg cursor-pointer" htmlFor="Baghdad">
              Baghdad
            </label>
          </div>
          <div
            className="flex items-center gap-1 w-fit"
            onClick={() => handleOpenMenuCity("Masul")}
          >
            <input
              type="radio"
              id="Masul"
              value=""
              name="city"
              className="w-4 h-4 cursor-pointer"
            />
            <label className="text-lg cursor-pointer" htmlFor="Masul">
              Masul
            </label>
          </div>
          <div
            className="flex items-center gap-1 w-fit"
            onClick={() => handleOpenMenuCity("Baghdad2")}
          >
            <input
              type="radio"
              id="Baghdad2"
              value=""
              name="city"
              className="w-4 h-4 cursor-pointer"
            />
            <label className="text-lg cursor-pointer" htmlFor="Baghdad2">
              Baghdad2
            </label>
          </div>
          <div
            className="flex items-center gap-1 w-fit"
            onClick={() => handleOpenMenuCity("Masul")}
          >
            <input
              type="radio"
              id="Masul2"
              value=""
              name="city"
              className="w-4 h-4 cursor-pointer"
            />
            <label className="text-lg cursor-pointer" htmlFor="Masul2">
              Masul
            </label>
          </div>
          <div
            className="flex items-center gap-1 w-fit"
            onClick={() => handleOpenMenuCity("Baghdad")}
          >
            <input
              type="radio"
              id="Baghdad3"
              value=""
              name="city"
              className="w-4 h-4 cursor-pointer"
            />
            <label className="text-lg cursor-pointer" htmlFor="Baghdad3">
              Baghdad
            </label>
          </div>
          <div
            className="flex items-center gap-1 w-fit"
            onClick={() => handleOpenMenuCity("Masul")}
          >
            <input
              type="radio"
              id="Masul3"
              value=""
              name="city"
              className="w-4 h-4 cursor-pointer"
            />
            <label className="text-lg cursor-pointer" htmlFor="Masul3">
              Masul
            </label>
          </div>
*/
