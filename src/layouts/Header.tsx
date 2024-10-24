import { memo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logolight from "../assets/logolight.jpg";
import avter from "../assets/avter.webp";
import MobileMenu from "../Components/Header/MobileMenu";
import menu from "../assets/HAmburger-menu.webp";
import SearchInput from "../Components/Search/SearchInput";
import NotificationMain from "../Components/Notification/NotificationMain";

function Header() {
  const [isOpen, setOpen] = useState<boolean>(false);


  const accessToken = localStorage.getItem("access_token");

  const handleOpen = () => {
    setOpen(!isOpen);
  };



  return (
    <header className="py-0">
      {/* <div className="border-b"></div> */}
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="w-[110px] h-[110px] p-0">
            <Link to="/">
              <img
                src={logolight}
                alt="logolight"
                className="w-full h-full object-contain"
              />
            </Link>
          </div>
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-10">
              <li>
                <NavLink className="nav-link" to={"/"}>
                  Home
                </NavLink>
              </li>
              {accessToken ? (
                <li>
                  <NavLink className="nav-link" to={"/savedchalets"}>
                    Saved Chalets
                  </NavLink>
                </li>
              ) : (
                <li>
                  <NavLink className="nav-link" to={"/login"}>
                    Saved Chalets
                  </NavLink>
                </li>
              )}
              {accessToken ? (
                <li>
                  <NavLink className="nav-link" to={"/bookings"}>
                    My Bookings
                  </NavLink>
                </li>
              ) : (
                <li>
                  <NavLink className="nav-link" to={"/login"}>
                    My Bookings
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
          <div className="flex items-center gap-4 ">
            <SearchInput/>
            <div className="flex items-center gap-2">
              {accessToken ? (
                <Link to={"/profile"} className="hidden lg:block">
                  <img src={avter} alt="avter" className="w-10 rounded-full" />
                </Link>
              ) : (
                <Link to={"/login"} className="hidden lg:block">
                  <img src={avter} alt="avter" className="w-10 rounded-full" />
                </Link>
              )}

             <NotificationMain/>
            </div>
            <button
              onClick={handleOpen}
              className="block lg:hidden bg-transparent border-0 outline-0"
            >
              <img src={menu} alt="menu" className="w-6" />
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="block lg:hidden">
            <MobileMenu setOpen={setOpen} />
          </div>
        )}
      </div>
    </header>
  );
}

export default memo(Header);
