import { memo, useEffect } from "react";
import AppRouter from "./Routes/AppRouter";
import { ToastContainer } from "react-toastify";
import i18next from "i18next";


function App() {
 
  const localLang = localStorage.getItem("i18nextLng") || "en";

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
    <div className="overflow-x-hidden">
      <ToastContainer />
      <AppRouter />
    </div>
  );
}

export default memo(App);
