import { memo } from "react";
import BreadCrumb from "../Components/Global/BreadCrumb";
import { MainProfile } from "../Components/Profile/index";

const Profile = () => {
  return (
    <>
      <div className="block lg:hidden">
        <BreadCrumb title={"My profile"} subTitle={"My profile"} />
      </div>
      <div className="container overflow-hidden">
        <MainProfile />
      </div>
    </>
  );
};

export default memo(Profile);
