import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import CardTwo from "../Global/CardTwo";
import { useTranslation } from "react-i18next";

const CloseLocation = ({ close_ads }: any) => {
  const { t } = useTranslation();  
  
  return (
    <div className="container py-8">
      <h3 className="text-mainBlack font-bold text-2xl">
        {t("Close to your location")}
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
          {close_ads?.map((ad: any) => (
            <SwiperSlide key={ad.id}>
              <CardTwo
                id={ad.id}
                name={ad.name}
                image={ad.image}
                rate={ad.rate}
                favorites={ad.no_favorites}
                city={ad.city}
                adults={ad.no_adults}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default memo(CloseLocation);
