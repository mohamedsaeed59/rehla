
import {memo } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
import { Outlet } from "react-router";


const Layouts = () => {
  return (
    <> 
      <Outlet/>
    </>
  );
}

export default memo(Layouts);