import { memo } from "react";
import slideHome1 from "../../assets/slideHome.png";
import slideHome2 from "../../assets/slideAuth/3.jfif";
import slideHome3 from "../../assets/slideAuth/4.jfif";

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
      >
        <SwiperSlide className="mb-16">
          <div className="w-full h-[430px] md:h-[500px]">
            <img src={slideHome1} alt="slide1" className="w-full h-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[430px] md:h-[500px]">
            <img
              src={slideHome2}
              className="w-full h-full"   alt="slide2"
           
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
