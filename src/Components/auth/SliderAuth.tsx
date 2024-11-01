import { memo, useEffect } from "react";
// import image1 from "../../assets/slideAuth/1.jfif";
// import image2 from "../../assets/slideAuth/2.jfif";
// import image3 from "../../assets/slideAuth/3.jfif";
// import image4 from "../../assets/slideAuth/4.jfif";
import BannerSliderAuth from "./BannerSliderAuth";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { actSettings } from "../../app/SettingsSlice";

type Props = {
  heightScreen: string;
};

const SliderAuth = ({ heightScreen }: Props) => {
  const { data } = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    const lang = localStorage.getItem("i18nextLng") || "en";

    dispatch(actSettings(lang));
  }, [dispatch]);
  
  // const data = [
  //   {
  //     id: 1,
  //     SrcImage: image1,
  //     title: "Best CHALETS in Iraq",
  //     dis: "Come and book your favorite",
  //   },
  //   {
  //     id: 2,
  //     SrcImage: image2,
  //     title: "Sea View CHALETS",
  //     dis: "Gives you fresh air and vitamins",
  //   },
  //   {
  //     id: 3,
  //     SrcImage: image3,
  //     title: "Pool view CHALETS",
  //     dis: "Relax and leave your worries behind",
  //   },
  //   {
  //     id: 4,
  //     SrcImage: image4,
  //     title: "Luxuries CHALETS",
  //     dis: "Discover your perfect getaway at affordable prices",
  //   },
  // ];
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
        {(data?.onborad_pages || []).map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <BannerSliderAuth
              image={item.image}
              title={item.main_title}
              des={item.sub_title}
              heightScreen={heightScreen}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(SliderAuth);
