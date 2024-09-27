import { memo } from "react";
import Footer from "../../layouts/Footer";
import BreadCrumb from "../Global/BreadCrumb";
import lock from "../../assets/icons/lock.svg";
import loading from "../../assets/loading.gif";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="block lg:hidden">
        <BreadCrumb title={"Privacy & Policy"} subTitle={"Privacy & Policy"} />
      </div>
      <div className="container my-16">
        <div className="flex flex-col items-center gap-4">
            <img src={lock} alt="lock" className="w-8 h-8 hidden lg:block" />
            <h3 className="font-bold text-lg sm:text-2xl hidden lg:block">
            Privacy & Policy
            </h3>
          <img
            src={loading}
            alt="loading"
            className="w-[200px] h-[200px] object-cover"
          />
        </div>
        <div className="flex flex-col gap-8">
          <div className="w-full md:w-[80%]">
            <h3 className="font-medium text-xl text-mainBlack my-5">
              the standard Lorem
            </h3>
            <p className="font-normal text-[16px] leading-5 text-ry5Text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              enim inventore consectetur debitis assumenda ex amet adipisci
              perferendis? Vel quisquam ad excepturi ab earum laboriosam debitis
              recusandae, nobis reiciendis voluptatem! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Dolores enim inventore
              consectetur debitis assumenda ex amet adipisci perferendis? Vel
              quisquam ad excepturi ab earum laboriosam debitis recusandae,
              nobis reiciendis voluptatem!
            </p>
          </div>
          <div className="w-full md:w-[80%]">
            <h3 className="font-medium text-xl text-mainBlack my-5">
              the standard Lorem
            </h3>
            <p className="font-normal text-[16px] leading-5 text-ry5Text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              enim inventore consectetur debitis assumenda ex amet adipisci
              perferendis? Vel quisquam ad excepturi ab earum laboriosam debitis
              recusandae, nobis reiciendis voluptatem! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Dolores enim inventore
              consectetur debitis assumenda ex amet adipisci perferendis? Vel
              quisquam ad excepturi ab earum laboriosam debitis recusandae,
              nobis reiciendis voluptatem!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default memo(PrivacyPolicy);
