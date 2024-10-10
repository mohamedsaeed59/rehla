import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import CardTwo from "../Global/CardTwo";

const CloseLocation = () => {
  return (
    <div className="container py-8">
      <h3 className="text-mainBlack font-bold text-2xl">
        Close to your location
      </h3>
      <div className="py-6">
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
            <CardTwo />
          </SwiperSlide>
          <SwiperSlide>
            <CardTwo />
          </SwiperSlide>
          <SwiperSlide>
            <CardTwo />
          </SwiperSlide>
          <SwiperSlide>
            <CardTwo />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default memo(CloseLocation);
