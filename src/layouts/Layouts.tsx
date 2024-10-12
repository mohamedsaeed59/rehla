import { memo, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import Chat from "../Pages/Chat";

const Layouts = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { skip } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");

    if (!accessToken && !skip) {
      navigate("/login");
    }
  }, [navigate, skip]);
  return (
    <>
      {!pathname.includes("login") &&
        !pathname.includes("register") &&
        !pathname.includes("otp") &&
        !pathname.includes("tellUs") &&
        !pathname.includes("tell-us-next") && <Header />}
      <Outlet />
      {!pathname.includes("login") &&
        !pathname.includes("register") &&
        !pathname.includes("otp") &&
        !pathname.includes("tellUs") &&
        !pathname.includes("tell-us-next") && <Footer />}
      {!pathname.includes("login") &&
        !pathname.includes("register") &&
        !pathname.includes("otp") &&
        !pathname.includes("tellUs") &&
        !pathname.includes("tell-us-next") && <Chat />}
    </>
  );
};

export default memo(Layouts);
