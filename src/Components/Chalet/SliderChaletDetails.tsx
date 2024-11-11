import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useState, useRef } from "react";
import Model from "./_components/Model";
import Star from "../../assets/icons/Star.svg";

export default function SliderChaletDetails({ gallery, rate }: any) {
  const [openModel, setOpenModel] = useState(false);

  // References for the custom navigation buttons
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const handleOpenModel = () => {
    setOpenModel(!openModel);
  };

  return (
    <>
      <div className="relative">
        <Swiper
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="w-[300px] sm:w-[350px] h-[300px] md:w-[675px] md:h-[590px]"
        >
          {gallery?.map((imageUrl: string, index: number) => (
            <SwiperSlide key={index}>
              <div
                onClick={handleOpenModel}
                className="relative cursor-pointer w-full h-full"
              >
                <img
                  src={imageUrl}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full rounded-xl"
                />
                <div className="absolute top-6 left-1/2 w-[64px] h-[24px] rounded-xl transform -translate-x-[50%] mainBlack text-sm backdrop-blur-[16px] bg-white/70">
                  <div className="flex items-center justify-center p-1 h-full">
                    <span>
                      <img
                        src={Star}
                        alt="Star"
                        className="w-[14px] object-cover"
                      />
                    </span>
                    <span className="text-[14px]">({rate})</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {gallery?.length > 1 && (
          <div className="swiper-arrows">
            <div
              ref={prevRef}
              className="left-arrow absolute w-8 h-8 transition-all duration-1000 cursor-pointer left-[35%] sm:left-[40%] md:left-[44%]
                bottom-4 z-10 bg-white rounded-full flex justify-center items-center"
            >
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.78533 10.5716L1.21393 6.0001L5.78533 1.4287"
                  stroke="black"
                  strokeWidth="1.01192"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              ref={nextRef}
              className="right-arrow w-8 h-8 flex justify-center items-center transition-all duration-1000 cursor-pointer absolute bottom-4 right-[35%] sm:right-[40%] md:right-[44%] z-10 bg-white rounded-full"
            >
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.21473 1.4284L5.78613 5.9999L1.21473 10.5713"
                  stroke="black"
                  strokeWidth="1.01192"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
      {openModel && <Model setOpenModel={setOpenModel} gallery={gallery} />}
    </>
  );
}
