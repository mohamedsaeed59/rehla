import chaletDetails from "../../assets/chalet-details.jfif";
import Star from "../../assets/icons/Star.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";
import Model from "./_components/Model";

export default function SliderChaletDetails() {
  const [openModel, setOpenModel] = useState<boolean>(false);

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
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Autoplay, Pagination]}
          className="w-[300px] sm:w-[350px] h-[300px] md:w-[675px] md:h-[590px]"
        >
          <SwiperSlide>
            <div
              onClick={() => handleOpenModel()}
              className="relative cursor-pointer w-full h-full"
            >
              <img
                src={chaletDetails}
                alt="chaletDetails"
                className="w-full h-full rounded-xl"
              />
              <div className="w-[34px] h-[34px] absolute flex justify-center items-center top-6 left-6 bg-white rounded-full border border-mainBlack cursor-pointer">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9496 2C16.5105 1.99954 17.066 2.1081 17.5833 2.3193C18.1007 2.5305 18.5695 2.8401 18.9624 3.23C19.7718 4.0298 20.2255 5.1074 20.2255 6.23C20.2255 7.3526 19.7718 8.4302 18.9624 9.23L10.9795 17.0975L2.99664 9.23C2.18723 8.4302 1.73355 7.3526 1.73355 6.23C1.73355 5.1074 2.18723 4.0298 2.99664 3.23C3.38964 2.8404 3.85854 2.531 4.37584 2.3197C4.89313 2.1085 5.44854 1.99968 6.0095 1.99968C6.57046 1.99968 7.12577 2.1085 7.64306 2.3197C8.16036 2.531 8.62926 2.8404 9.02234 3.23L10.9795 5.18L12.929 3.245C13.3207 2.8505 13.79 2.5369 14.3089 2.323C14.828 2.1091 15.3859 1.99921 15.9496 2ZM15.9496 0.500002C15.1833 0.499372 14.4247 0.647642 13.7182 0.936132C13.0115 1.22461 12.3712 1.6475 11.8348 2.18L10.9795 3.02L10.1242 2.18C9.5871 1.64846 8.94662 1.22631 8.24019 0.938142C7.53375 0.649982 6.77543 0.501572 6.0095 0.501572C5.24347 0.501572 4.48515 0.649982 3.77871 0.938142C3.07231 1.22631 2.43186 1.64846 1.89476 2.18C0.802015 3.2627 0.189758 4.7198 0.189758 6.2375C0.189758 7.7552 0.802015 9.2123 1.89476 10.295L10.9795 19.25L20.0643 10.295C21.157 9.2123 21.7693 7.7552 21.7693 6.2375C21.7693 4.7198 21.157 3.2627 20.0643 2.18C19.5271 1.64852 18.8866 1.22629 18.1803 0.937882C17.4738 0.649472 16.7156 0.500622 15.9496 0.500002Z"
                    fill="#1E1E1E"
                  />
                </svg>
              </div>
              <div className="absolute top-6 left-1/2 w-[64px] h-[24px] rounded-xl transform -translate-x-[50%] mainBlack text-sm backdrop-blur-[16px] bg-white/70">
                <div className="flex items-center justify-center p-1 h-full">
                  <span>
                    <img
                      src={Star}
                      alt="Star"
                      className="w-[14px] object-cover"
                    />
                  </span>
                  <span className="text-[14px]">(4.5)</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="relative cursor-pointer w-full h-full"
              onClick={() => handleOpenModel()}
            >
              <img
                src={chaletDetails}
                alt="chaletDetails"
                className="w-full h-full rounded-xl"
              />
              <div className="w-[34px] h-[34px] absolute flex justify-center items-center top-6 left-6 bg-white rounded-full border border-mainBlack cursor-pointer">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9496 2C16.5105 1.99954 17.066 2.1081 17.5833 2.3193C18.1007 2.5305 18.5695 2.8401 18.9624 3.23C19.7718 4.0298 20.2255 5.1074 20.2255 6.23C20.2255 7.3526 19.7718 8.4302 18.9624 9.23L10.9795 17.0975L2.99664 9.23C2.18723 8.4302 1.73355 7.3526 1.73355 6.23C1.73355 5.1074 2.18723 4.0298 2.99664 3.23C3.38964 2.8404 3.85854 2.531 4.37584 2.3197C4.89313 2.1085 5.44854 1.99968 6.0095 1.99968C6.57046 1.99968 7.12577 2.1085 7.64306 2.3197C8.16036 2.531 8.62926 2.8404 9.02234 3.23L10.9795 5.18L12.929 3.245C13.3207 2.8505 13.79 2.5369 14.3089 2.323C14.828 2.1091 15.3859 1.99921 15.9496 2ZM15.9496 0.500002C15.1833 0.499372 14.4247 0.647642 13.7182 0.936132C13.0115 1.22461 12.3712 1.6475 11.8348 2.18L10.9795 3.02L10.1242 2.18C9.5871 1.64846 8.94662 1.22631 8.24019 0.938142C7.53375 0.649982 6.77543 0.501572 6.0095 0.501572C5.24347 0.501572 4.48515 0.649982 3.77871 0.938142C3.07231 1.22631 2.43186 1.64846 1.89476 2.18C0.802015 3.2627 0.189758 4.7198 0.189758 6.2375C0.189758 7.7552 0.802015 9.2123 1.89476 10.295L10.9795 19.25L20.0643 10.295C21.157 9.2123 21.7693 7.7552 21.7693 6.2375C21.7693 4.7198 21.157 3.2627 20.0643 2.18C19.5271 1.64852 18.8866 1.22629 18.1803 0.937882C17.4738 0.649472 16.7156 0.500622 15.9496 0.500002Z"
                    fill="#1E1E1E"
                  />
                </svg>
              </div>
              <div className="absolute top-6 left-1/2 w-[64px] h-[24px] rounded-xl transform -translate-x-[50%] mainBlack text-sm backdrop-blur-[16px] bg-white/70">
                <div className="flex items-center justify-center p-1 h-full">
                  <span>
                    <img
                      src={Star}
                      alt="Star"
                      className="w-[14px] object-cover"
                    />
                  </span>
                  <span className="text-[14px]">(4.5)</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-arrows">
          <div
            className="left-arrow absolute w-8 h-8 transition-all duration-1000 cursor-pointer left-[35%] sm:left-[40%] md:left-[44%]
          bottom-4 z-10 bg-[#B9B9B999] rounded-full flex justify-center items-center"
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
                stroke-width="1.01192"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="right-arrow  w-8 h-8 flex justify-center items-center transition-all duration-1000 cursor-pointer absolute bottom-4 right-[35%] sm:right-[40%] md:right-[44%] z-10 bg-white rounded-full">
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
                stroke-width="1.01192"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      {openModel && <Model setOpenModel={setOpenModel} />}
    </>
  );
}
