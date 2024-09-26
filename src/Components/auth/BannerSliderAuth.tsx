import { memo } from "react";

import { DataSlideAuth } from "../../Types/app";

const BannerSliderAuth = ({ image , title, des , heightScreen , heightBottom}: DataSlideAuth) => {
  return (
    <div className={`h-full overflow-hidden md:h-${heightScreen}`}>
      <div className="relative">
        <img src={image} className="w-full h-full object-cover" />
        <div className={`absolute bottom-9 md:bottom-${heightBottom} left-0 w-full rounded-tl-xl rounded-tr-xl h-[130px] sm:h-[140px] md:h-[150px] p-4 backdrop-blur-[8px] bg-white/15`}>
          <div className="text-mainBlack text-center flex flex-col gap-3">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-lg font-normal">{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(BannerSliderAuth);
