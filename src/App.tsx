import { memo, useEffect, useState } from "react";
import AppRouter from "./Routes/AppRouter";
import { ToastContainer } from "react-toastify";
import i18next from "i18next";
import Cookies from "js-cookie";

function App() {

  const [lng, setLng] = useState(Cookies.get("i18next") || "en");


  useEffect(() => {
    const handleLanguageChange = (newLang: string) => {
      setLng(newLang);
      window.document.dir = i18next.dir(newLang); 
    };

    i18next.on('languageChanged', handleLanguageChange);

    return () => {
      i18next.off('languageChanged', handleLanguageChange);
    };
  }, []);




  useEffect(() => {
    window.document.dir = i18next.dir(lng); 
  }, [lng]);

  return (
    <>
      <ToastContainer />
      <AppRouter />
    </>
  );
}

export default memo(App);
