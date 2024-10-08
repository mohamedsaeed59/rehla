import close from "../../assets/icons/close.svg";
import chaletDetails from "../../assets/chalet-details.jfif";

type Props = {
  setOpenModel: (open: boolean) => void;
};
export default function Model({ setOpenModel }: Props) {
  const handleCloseModel = () => {
    setOpenModel(false);
  };
  return (
    <div className="absolute top-0 left-0 w-screen h-screen backdrop-blur-[8px] bg-black/50 z-50 overflow-hidden">
      <div className="container py-6">
        <div className="flex justify-end">
          <div
            onClick={() => handleCloseModel()}
            className="w-fit bg-white rounded-full cursor-pointer"
          >
            <img src={close} alt="close" className="w-10 h-10" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative w-full h-[570px]">
            <img
              src={chaletDetails}
              alt="chaletDetails"
              className="w-full h-full rounded-2xl my-4"
            />

            <div className="swiper-arrows">
              <div
                className="left-arrow absolute p-3 transition-all duration-1000 cursor-pointer left-[-15px]
               top-[50%] z-10 bg-white rounded-full"
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
              <div className="right-arrow p-3 transition-all duration-1000 cursor-pointer absolute top-[50%] right-[-15px] z-10 bg-white rounded-full">
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
        </div>
      </div>
    </div>
  );
}
