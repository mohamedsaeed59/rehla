import { useTranslation } from "react-i18next";

export default function DownDropStorBy() {
  const { t } = useTranslation();

  return (
    <div className="absolute top-10 w-[290px] md:w-[300px] rounded-[30px] z-20 rtl:left-0 ltr:right-0 bg-white shadow-lg p-2 md:p-3">
      <ul className="w-full flex flex-col gap-2 p-2">
        <li>
          <div className="flex items-center gap-1 cursor-pointer">
            <input type="radio" id="low" value="" name="result" className="cursor-pointer"/>
            <label className="text-base font-normal cursor-pointer" htmlFor="low">
            {t("PriceLowToHigh")}
            </label>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-1">
            <input type="radio" id="high" value="" name="result" className="cursor-pointer"/>
            <label className="text-base font-normal cursor-pointer" htmlFor="high">
              {t("PriceHighToLow")}
            </label>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-1 cursor-pointer">
            <input type="radio" id="alphabet" value="" className="cursor-pointer" name="result" />
            <label className="text-base font-normal cursor-pointer" htmlFor="alphabet">{t("AlphabetAZ")}</label>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-1 cursor-pointer">
            <input type="radio" id="alphabet2" value="" className="cursor-pointer" name="result" />
            <label className="text-base font-normal cursor-pointer" htmlFor="alphabet2">{t("AlphabetZA")}</label>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-1 cursor-pointer">
            <input type="radio" id="rate" value="" className="cursor-pointer" name="result"/>
            <label className="text-base font-normal cursor-pointer" htmlFor="rate">
            {t("RateHighToLow")}
            </label>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-1 cursor-pointer">
            <input type="radio" id="rate2" value="" className="cursor-pointer" name="result"/>
            <label className="text-base font-normal cursor-pointer" htmlFor="rate2">
            {t("RateLowToHigh")}
              </label>
          </div>
        </li>
      </ul>
    </div>
  );
}
