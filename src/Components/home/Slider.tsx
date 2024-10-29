import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

function Slider({ banners }: any) {
  return (
    <div className="w-full" dir="ltr">
      <Swiper
        loop={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="z-0"
        slidesPerView={1}
      >
        {banners?.map((banner: any) => (
          <SwiperSlide key={banner?.id} className="mb-16">
            <div className="w-full h-[430px] md:h-[500px]">
              <img
                src={banner.image}
                alt={`Banner ${banner?.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default memo(Slider);
