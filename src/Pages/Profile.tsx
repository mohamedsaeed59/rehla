import { memo } from "react";
import BreadCrumb from "../Components/Global/BreadCrumb";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const Profile = () => {
  return (
    <>
      <Header />
      <div className="block lg:hidden">
        <BreadCrumb title={"My profile"} subTitle={"My profile"} />
      </div>
      <Footer />
    </>
  );
};

export default memo(Profile);
