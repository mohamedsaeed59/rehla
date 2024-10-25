import { memo, useEffect } from "react";
import AppRouter from "./Routes/AppRouter";
import { ToastContainer } from "react-toastify";
import i18next from "i18next";


function App() {
 
  const localLang = localStorage.getItem("i18nextLng") || "en";

  console.log(localLang);

  useEffect(() => {
    const handleLanguageChange = (newLang: string) => {
      window.document.dir = i18next.dir(newLang);
    };

    i18next.on("languageChanged", handleLanguageChange);

    return () => {
      i18next.off("languageChanged", handleLanguageChange);
    };
  }, []);

  useEffect(() => {
    window.document.dir = i18next.dir(localLang);
  }, [localLang]);

  return (
    <>
      <ToastContainer />
      <AppRouter />
    </>
  );
}

export default memo(App);
