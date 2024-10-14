import search from "../../assets/search.svg";
import { Link } from "react-router-dom";
import SearchMenu from "./SearchMenu";
import { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

export default function SearchInput() {
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
          placeholder="Search Chalet name, location"
          className="w-full focus:outline-none focus:border-primary p-1 hidden lg:block"
        />
      </div>

      {openSearchMenu && <SearchMenu />}
    </div>
  );
}
