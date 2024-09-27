import { memo } from "react";
import faceBook from "../../assets/icons/facebook.svg"
import google from "../../assets/icons/google.svg"
import apple from "../../assets/icons/apple.svg"

const SocialIcons = () => {
  return (
    <div className="p-2 flex justify-center items-center">
      <ul className="flex gap-1 items-center">
        <li className="border border-textPlaceholder bg-white rounded-lg p-1 w-[35px] h-[35px] flex justify-center items-center">
          <a href="#">
            <img className="object-contain" src={faceBook} alt="faceBook" />
          </a>
        </li>
        <li className="border border-textPlaceholder bg-white rounded-lg p-1 w-[35px] h-[35px] flex justify-center items-center">
          <a href="#">
            <img src={google} alt="google" className="object-contain" />
          </a>
        </li>
        <li className="border border-textPlaceholder bg-white rounded-lg p-1 w-[35px] h-[35px] flex justify-center items-center">
          <a href="#">
            <img src={apple} alt="apple" className="object-contain" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default memo(SocialIcons);
