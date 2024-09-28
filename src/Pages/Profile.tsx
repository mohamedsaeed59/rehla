import { memo } from "react";
import BreadCrumb from "../Components/Global/BreadCrumb";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import MainProfile from "../Components/Profile/MainProfile";

const Profile = () => {
  return (
    <>
      <Header />
      <div className="block lg:hidden">
        <BreadCrumb title={"My profile"} subTitle={"My profile"} />
      </div>
      <div className="container overflow-hidden">
        <MainProfile />
      </div>
      <Footer />
    </>
  );
};

export default memo(Profile);
