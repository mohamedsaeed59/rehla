import { memo } from "react";
import slideHome1 from "../../assets/slideHome.png";
import slideHome2 from "../../assets/slide2.webp";
import slideHome3 from "../../assets/slide3.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
          <img
            src={slideHome1}
            alt="slide1"
            className="w-full h-screen object-cover "
          />
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={slideHome2} alt="slide2" className="w-full h-screen object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={slideHome3} alt="slide3" className="w-full h-screen object-cover" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default memo(Slider);
