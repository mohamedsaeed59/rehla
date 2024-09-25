

import { memo } from "react"
import Slider from "../Components/home/Slider"
// import TermsConditions from "../Components/home/Terms&Conditions"
import CloseLocation from "../Components/home/CloseLocation"
import MostPopular from "../Components/home/MostPopular"
import RecentlyAdd from "../Components/home/RecentlyAdd"
// import Conditions from "../Components/home/Conditions"


function Home() {
  return (
    <div className="relative">
    <Slider/>
    {/* <TermsConditions/> */}
    {/* <Conditions/> */}
    <CloseLocation/>
    <MostPopular/>
    <RecentlyAdd/>
    </div>
  )
}

export default memo(Home)