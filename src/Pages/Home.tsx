import { memo } from "react";
import Slider from "../Components/home/Slider";
import TermsConditions from "../Components/home/Terms&Conditions"
import CloseLocation from "../Components/home/CloseLocation";
import MostPopular from "../Components/home/MostPopular";
import RecentlyAdd from "../Components/home/RecentlyAdd";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
// import Conditions from "../Components/home/Conditions"

function Home() {
  return (
    <>
      <Header />
      <div className="relative">
        <Slider />
        <div className="hidden md:block">
        <TermsConditions/>
        </div>
        {/* <Conditions/> */}
        <CloseLocation />
        <MostPopular />
        <RecentlyAdd />
      </div>
      <Footer />
    </>
  );
}

export default memo(Home);
