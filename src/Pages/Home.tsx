import { memo, useEffect, useState } from "react";
import Slider from "../Components/home/Slider";
import TermsConditions from "../Components/home/Terms&Conditions";
import CloseLocation from "../Components/home/CloseLocation";
import MostPopular from "../Components/home/MostPopular";
import RecentlyAdd from "../Components/home/RecentlyAdd";
import { useAppSelector } from "../app/hooks";

function Home() {
  const [showTermsConditions, setShowTermsConditions] = useState<boolean>(false);
  const { data } = useAppSelector((state) => state.home);

  useEffect(() => {
    const cookies = document.cookie.split("; ").find((row) => row.startsWith("termsAccepted="));
    const hasAgreed = cookies ? cookies.split("=")[1] : null;

    if (!hasAgreed) {
      setShowTermsConditions(true); 
    }
  }, []);

  const handleAgree = () => {
    document.cookie = "termsAccepted=true; path=/; max-age=" + 60 * 60 * 24 * 365; 
    setShowTermsConditions(false); 
  };

  return (
    <>
      <div className="relative">
        <Slider banners={data.banners} />
        {/* <div className="hidden md:block"> */}
          {showTermsConditions && (
            <TermsConditions
              setShowTermsConditions={setShowTermsConditions}
              handleAgree={handleAgree}
            />
          )}
        {/* </div> */}
        <CloseLocation close_ads={data?.close_ads} />
        <MostPopular popular_ads={data?.popular_ads} />
        <RecentlyAdd recently_ads={data?.recently_ads} />
      </div>
    </>
  );
}

export default memo(Home);


