import { memo, useEffect, useState } from "react";
import Slider from "../Components/home/Slider";
import TermsConditions from "../Components/home/Terms&Conditions";
import CloseLocation from "../Components/home/CloseLocation";
import MostPopular from "../Components/home/MostPopular";
import RecentlyAdd from "../Components/home/RecentlyAdd";

function Home() {
  const [showTermsConditions, setShowTermsConditions] = useState<boolean>(false);

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
        <Slider />
        {/* <div className="hidden md:block"> */}
          {showTermsConditions && (
            <TermsConditions
              setShowTermsConditions={setShowTermsConditions}
              handleAgree={handleAgree}
            />
          )}
        {/* </div> */}
        <CloseLocation />
        <MostPopular />
        <RecentlyAdd />
      </div>
    </>
  );
}

export default memo(Home);


