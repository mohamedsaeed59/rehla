import { memo } from "react";
import SocialIcons from "../Components/Global/SocialIcons";

function Footer() {
  return (
    <div className="bg-ryBackground">
      <div className="container">
        <div className="flex justify-center items-center flex-col gap-2 p-8">
          <h3 className="font-semibold text-lg sm:text-2xl">News Letter</h3>
          <div>
            <form className="flex flex-wrap justify-center md:flex-nowrap gap-3 my-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-lg p-2 focus:outline-none border border-borderColor w-full md:w-[400px]"
              />
              <button type="submit" className="rounded-3xl px-6 py-2 text-white bg-mainBlack hover:bg-mainBlack hover:text-white duration-500">Subscribe</button>
            </form>
            <div className="flex justify-center items-center flex-col gap-1 my-8">
              <h4 className="font-semibold text-lg sm:text-2xl">Contact info</h4>
              <div className="flex justify-center flex-wrap items-center gap-2 md:gap-5">
                <p>Address : <span className="text-ry3Text">Iraq</span></p>
                <p className="text-ry3Text">‎+964-11-4884697</p>
                <p>INFO@REHLA-1Q.COM</p>
              </div>
            </div>
            <SocialIcons/>
          </div>
        </div>
        <p className="text-ry3Text text-center p-2 font-medium">All right reserved by@Rehla</p>
      </div>
    </div>
  );
}

export default memo(Footer);
