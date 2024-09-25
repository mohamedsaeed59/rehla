import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import Card from "../Global/Card";


const CloseLocation = () => {
  return (
    <div className="container py-10">
        <h3 className="text-mainBlack font-bold text-2xl">
          Close to your location
        </h3>
      <div className="py-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          loop={true}
          breakpoints={{
            700: {
              slidesPerView: 1.3,
            },
            900: {
              slidesPerView: 3,
            },
          }}
          modules={[Scrollbar]}
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default memo(CloseLocation);
