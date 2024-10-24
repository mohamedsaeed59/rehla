import { useRef, useState } from "react";
import DownDropStorBy from "./_components/DownDropStorBy";
import downDrop from "../../../assets/icons/arrow-down-drop.svg";
import useClickOutside from "../../../hooks/useClickOutside";
import { useTranslation } from "react-i18next";

export default function StorBy() {
  const [downDropStore, setDownDropStore] = useState<boolean>(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setDownDropStore(true));
  const { t } = useTranslation();

  return (
    <div
      ref={dropdownRef}
      className="relative rounded-[8px] border border-black50 cursor-pointer"
    >
      <div
        className="flex gap-2 p-2"
        onClick={() => setDownDropStore(!downDropStore)}
      >
        <p className="text-sm font-normal">{t("SortBy")}</p>
        <img src={downDrop} alt="downDrop" className="w-6 h-6 object-cover" />
      </div>
      {!downDropStore && <DownDropStorBy />}
    </div>
  );
}
