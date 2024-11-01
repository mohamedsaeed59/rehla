import search from "../../assets/search.svg";
import { Link } from "react-router-dom";
import SearchMenu from "./SearchMenu";
import { useEffect, useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { useTranslation } from "react-i18next";
import { fetchSearchResults } from "../../app/chalet/chaletSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export default function SearchInput() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { searchResults } = useAppSelector((state: any) => state.chalet);  
  
    const [openSearchMenu, setOpenSearchMenu] = useState<boolean>(false); 
    const dropdownRef = useRef<HTMLDivElement>(null);
  
    const handleOpenSearchMenu = () => {
      setOpenSearchMenu(!openSearchMenu); 
    };
  
    useClickOutside(dropdownRef, (event) => {
      const target = event.target as HTMLElement;
      if (target.closest("a[href='/search']")) {
        return; 
      }
      setOpenSearchMenu(false);
    });

    useEffect(() => {
      dispatch(
        fetchSearchResults({ searchQuery: 'ch', cityId: 2, minAdults: 1, maxAdults: 10, popular: 1, lastAdd: 1}))
    },[])

  return (
    <div className="relative">
      <div
        ref={dropdownRef}
        className="flex items-center gap-1 p-1 border-0 lg:border duration-300
        rounded-2xl text-base w-full lg:w-[350px]"
        onClick={handleOpenSearchMenu}
      >
        <Link to={"/search"}>
          <img
            src={search}
            alt="search"
            className="cursor-pointer p-1 w-7 h-7"
          />
        </Link>
        <input
          type="search"
          placeholder={t("SearchChaletNameLocation")}
          className="w-full focus:outline-none focus:border-primary p-1 hidden lg:block"
        />
      </div>

      {openSearchMenu && <SearchMenu searchResults={searchResults} />}
    </div>
  );
}
