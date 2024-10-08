import { memo } from "react";
import BreadCrumb from "../Global/BreadCrumb";
import loading from "../../assets/loading.gif";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="block lg:hidden">
        <BreadCrumb title={"Privacy & Policy"} subTitle={"Privacy & Policy"} />
      </div>
      <div className="container my-16">
        <div className="flex flex-col items-center gap-4">
          <div className="hidden lg:block">
          <svg
            width="21"
            height="25"
            viewBox="0 0 21 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.81349 18.315H11.1885V10.5422H9.81349V18.315ZM10.501 8.37387C10.7411 8.37387 10.9424 8.29273 11.1046 8.13049C11.2659 7.96824 11.3466 7.76749 11.3466 7.52824C11.3466 7.28806 11.2655 7.08687 11.1032 6.92461C10.941 6.76235 10.7402 6.68169 10.501 6.68262C10.2617 6.68353 10.061 6.76466 9.89873 6.92599C9.73648 7.08732 9.65536 7.28854 9.65536 7.5296C9.65536 7.77069 9.73648 7.97145 9.89873 8.13188C10.061 8.29228 10.2617 8.37294 10.501 8.37387ZM10.501 24.8216C7.73816 24.0011 5.44328 22.3278 3.61636 19.8015C1.78944 17.2751 0.875977 14.4284 0.875977 11.2614V3.82535L10.501 0.229736L20.1259 3.82535V11.2614C20.1259 14.4275 19.2125 17.2739 17.3857 19.8C15.5588 22.3264 13.2638 23.9993 10.501 24.8216ZM10.501 23.3628C12.8843 22.6065 14.8552 21.094 16.4134 18.8253C17.9719 16.5565 18.7511 14.0357 18.7511 11.2627V4.76449L10.501 1.69824L2.25098 4.76449V11.2614C2.25098 14.0343 3.03015 16.5551 4.58848 18.8238C6.14682 21.0926 8.11766 22.6065 10.501 23.3628Z"
              fill="#1E1E1E"
            />
          </svg>
          </div>
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
            <h3 className="font-semibold text-xl text-mainBlack my-5">
              the standard Lorem
            </h3>
            <p className="font-normal text-[14px] leading-5 text-ry5Text">
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
            <h3 className="font-semibold text-xl text-mainBlack my-5">
              the standard Lorem
            </h3>
            <p className="font-normal text-[14px] leading-5 text-ry5Text">
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
    </>
  );
};

export default memo(PrivacyPolicy);
