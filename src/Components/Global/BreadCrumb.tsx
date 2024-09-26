import { memo } from "react";
import { Link } from "react-router-dom";
import { DataBreadCrumb } from "../../Types/app";

const BreadCrumb = ({ title, subTitle }: DataBreadCrumb) => {
  return (
    <div className="bg-ryBackground mb-5 w-full">
      <div className="container">
        <div className="flex justify-center items-center flex-col gap-2 py-10">
          <h2 className="font-bold text-2xl text-mainBlack">{title}</h2>
          <p className="font-normal text-base text-mainBlack">
            <Link to={"/home"}>Home </Link> / {subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(BreadCrumb);
