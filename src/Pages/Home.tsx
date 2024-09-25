

import { memo } from "react"
import Slider from "../Components/home/Slider"
import TermsConditions from "../Components/home/Terms&Conditions"
// import Conditions from "../Components/home/Conditions"


function Home() {
  return (
    <div className="relative">
    <Slider/>
    <TermsConditions/>
    {/* <Conditions/> */}
    </div>
  )
}

export default memo(Home)