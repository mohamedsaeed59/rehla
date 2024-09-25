import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Card from "../Global/Card";
import right from "../../assets/icons/right-arrow.svg";

const MostPopular = () => {
  return (
    <div className="py-10 bg-[#f9f7f7]">
      <div className="container">
        <div className="flex justify-between items-center">
          <h3 className="text-mainBlack font-bold text-2xl text-center lg:text-start">
            MostPopular
          </h3>
          <div className="hidden lg:block">
            <div className="flex gap-2">
              <div className="left-arrow cursor-pointer border border-black rounded-full p-3">
                <img
                  src={right}
                  alt="right"
                  className="w-[14px] object-cover transform rotate-180"
                />
              </div>
              <div className="right-arrow cursor-pointer border rounded-full p-3">
                <img
                  src={right}
                  alt="right"
                  className="w-[14px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-8">
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            navigation={{ nextEl: ".right-arrow", prevEl: ".left-arrow" }}
            loop={true}
            breakpoints={{
              700: {
                slidesPerView: 1.3,
              },
              900: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation]}
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
    </div>
  );
};

export default memo(MostPopular);
