import { memo } from "react";
import image1 from "../../assets/slideAuth/1.jfif";
import image2 from "../../assets/slideAuth/2.jfif";
import image3 from "../../assets/slideAuth/3.jfif";
import image4 from "../../assets/slideAuth/4.jfif";
import BannerSliderAuth from "./BannerSliderAuth";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

type Props = {
  heightScreen: string;
};

const SliderAuth = ({ heightScreen }: Props) => {
  const data = [
    {
      id: 1,
      SrcImage: image1,
      title: "Best CHALETS in Iraq",
      dis: "Come and book your favorite",
    },
    {
      id: 2,
      SrcImage: image2,
      title: "Sea View CHALETS",
      dis: "Gives you fresh air and vitamins",
    },
    {
      id: 3,
      SrcImage: image3,
      title: "Pool view CHALETS",
      dis: "Relax and leave your worries behind",
    },
    {
      id: 4,
      SrcImage: image4,
      title: "Luxuries CHALETS",
      dis: "Discover your perfect getaway at affordable prices",
    },
  ];
  return (
    <div className={`overflow-hidden h-full`}>
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
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <BannerSliderAuth
              image={item.SrcImage}
              title={item.title}
              des={item.dis}
              heightScreen={heightScreen}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(SliderAuth);
