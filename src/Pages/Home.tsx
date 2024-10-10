import { memo, useState } from "react";
import Slider from "../Components/home/Slider";
import TermsConditions from "../Components/home/Terms&Conditions";
import CloseLocation from "../Components/home/CloseLocation";
import MostPopular from "../Components/home/MostPopular";
import RecentlyAdd from "../Components/home/RecentlyAdd";
// import Conditions from "../Components/home/Conditions"

function Home() {
  const [showTermsConditions, setShowTermsConditions] =
    useState<boolean>(false);

  return (
    <>
      <div className="relative">
        <Slider />
        <div className="hidden md:block">
          {!showTermsConditions && (
            <TermsConditions setShowTermsConditions={setShowTermsConditions} />
          )}
        </div>
        {/* <Conditions/> */}
        <CloseLocation />
        <MostPopular />
        <RecentlyAdd />
      </div>
    </>
  );
}

export default memo(Home);
