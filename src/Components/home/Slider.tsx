import { memo } from "react";
import slideHome1 from "../../assets/slideHome.png";
import slideHome2 from "../../assets/2.png";
import slideHome3 from "../../assets/3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";


function Slider() {

  return (
    <div className="w-full">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="z-0"
      >
        <SwiperSlide className="mb-16">
          <div className="w-full h-[430px] md:h-[500px]">
            <img
              src={slideHome1}
              alt="slide1"
              className="w-full h-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[430px] md:h-[500px]">
            <img
              src={slideHome2}
              className="w-full h-full"
              alt="slide2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[430px] md:h-[500px]">
            <img
              src={slideHome3}
              alt="slide3"
              className="w-full h-full"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default memo(Slider);
