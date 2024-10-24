import { memo } from "react";
import avter from "../../assets/avter.webp";
import logolight from "../../assets/logolight.jpg";


const ChatComponent = () => {

  return (
    
    <div className="bg-white">
      <div className="py-3">
        <div className="overflow-y-scroll h-[400px] md:h-[420px]">
          <p className="text-center text-xs font-normal text-[#252525] w-[95%] mx-auto">
            Rehla app ensures your rights when booking electronically, and the
            booking amount is transferred through our app only after check-out.
            Rehla is not responsible for any bookings made outside the app
          </p>
          <div className="flex justify-center items-center gap-2 py-4">
            <span className="w-[50px] h-[2px] inline-block bg-[#DBDBDB]"></span>
            <p className="text-sm text-[#B0B0B0]">Yesterday at 04:15 PM</p>
            <span className="w-[50px] h-[2px] inline-block bg-[#DBDBDB]"></span>
          </div>
          <p className="text-[#7D7D7D] text-xs font-normal text-center p-1">
            you can send your problem to our chatbot and we will fix it soon
          </p>
          <div className="flex flex-col gap-3 py-5 h-[250px] px-[10px]">
            <div className="flex items-center justify-end gap-2">
              <div className="flex flex-col justify-end items-end gap-1">
                <div className="relative w-fit">
                  <div className="w-fit py-2 px-4 shadow-xl bg-[#F3C800] rounded-lg  flex justify-center items-center">
                    <p className="text-[15px] text-mainBlack">Hi!</p>
                  </div>
                  <div className="absolute right-[-8px] bottom-0">
                    <svg
                      width="23"
                      height="9"
                      viewBox="0 0 23 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4337 0L22.4337 9H1.43367C0.472665 9 0.0646592 7.7766 0.833659 7.2L10.4337 0Z"
                        fill="#F3C800"
                      />
                    </svg>
                  </div>
                </div>
                <p className="flex items-center gap-1 text-[#7D7D7D] text-sm">
                  04:15 pm
                  <svg
                    width="21"
                    height="11"
                    viewBox="0 0 21 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.43359 5.48418L10.6766 9.72719L19.1606 1.24219M1.43359 5.48418L5.67659 9.72719M14.1616 1.24219L10.9336 4.49918"
                      stroke="#97DFFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
              </div>
              <img
                src={avter}
                alt="avter"
                className="w-[24px] h-[24px] rounded-full"
              />
            </div>
            <div className="flex items-center gap-2">
              <img
                src={logolight}
                alt="avter"
                className="w-[24px] h-[24px] rounded-full border border-mainBlack"
              />
              <div className="flex flex-col gap-1">
                <div className="relative w-fit">
                  <div className="w-fit py-3 px-4 shadow-lg bg-white rounded-lg  flex justify-center items-center">
                    <p className="text-[15px] text-mainBlack">
                      Hi! , Yomna how can i help you?
                    </p>
                  </div>
                  <div className="absolute left-[-8px] bottom-0">
                    <svg
                      width="22"
                      height="9"
                      viewBox="0 0 22 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.99998 0L22 9H0.999978C0.0389778 9 -0.368821 7.777 0.399979 7.2L9.99998 0Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <p className="flex items-center gap-1 text-[#7D7D7D] text-sm">
                  04:15 pm
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end gap-2">
              <div className="flex flex-col justify-end items-end gap-1">
                <div className="relative w-fit">
                  <div className="w-fit py-2 px-4 shadow-xl bg-[#F3C800] rounded-lg  flex justify-center items-center">
                    <p className="text-[15px] text-mainBlack">Hi!</p>
                  </div>
                  <div className="absolute right-[-8px] bottom-0">
                    <svg
                      width="23"
                      height="9"
                      viewBox="0 0 23 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4337 0L22.4337 9H1.43367C0.472665 9 0.0646592 7.7766 0.833659 7.2L10.4337 0Z"
                        fill="#F3C800"
                      />
                    </svg>
                  </div>
                </div>
                <p className="flex items-center gap-1 text-[#7D7D7D] text-sm">
                  04:15 pm
                  <svg
                    width="21"
                    height="11"
                    viewBox="0 0 21 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.43359 5.48418L10.6766 9.72719L19.1606 1.24219M1.43359 5.48418L5.67659 9.72719M14.1616 1.24219L10.9336 4.49918"
                      stroke="#97DFFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
              </div>
              <img
                src={avter}
                alt="avter"
                className="w-[24px] h-[24px] rounded-full"
              />
            </div>
            <div className="flex items-center gap-2">
              <img
                src={logolight}
                alt="avter"
                className="w-[24px] h-[24px] rounded-full border border-mainBlack"
              />
              <div className="flex flex-col gap-1">
                <div className="relative w-fit">
                  <div className="w-fit py-3 px-4 shadow-lg bg-white rounded-lg  flex justify-center items-center">
                    <p className="text-[15px] text-mainBlack">
                      Hi! , Yomna how can i help you?
                    </p>
                  </div>
                  <div className="absolute left-[-8px] bottom-0">
                    <svg
                      width="22"
                      height="9"
                      viewBox="0 0 22 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.99998 0L22 9H0.999978C0.0389778 9 -0.368821 7.777 0.399979 7.2L9.99998 0Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <p className="flex items-center gap-1 text-[#7D7D7D] text-sm">
                  04:15 pm
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end gap-2">
              <div className="flex flex-col justify-end items-end gap-1">
                <div className="relative w-fit">
                  <div className="w-fit py-2 px-4 shadow-xl bg-[#F3C800] rounded-lg  flex justify-center items-center">
                    <p className="text-[15px] text-mainBlack">Hi!</p>
                  </div>
                  <div className="absolute right-[-8px] bottom-0">
                    <svg
                      width="23"
                      height="9"
                      viewBox="0 0 23 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4337 0L22.4337 9H1.43367C0.472665 9 0.0646592 7.7766 0.833659 7.2L10.4337 0Z"
                        fill="#F3C800"
                      />
                    </svg>
                  </div>
                </div>
                <p className="flex items-center gap-1 text-[#7D7D7D] text-sm">
                  04:15 pm
                  <svg
                    width="21"
                    height="11"
                    viewBox="0 0 21 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.43359 5.48418L10.6766 9.72719L19.1606 1.24219M1.43359 5.48418L5.67659 9.72719M14.1616 1.24219L10.9336 4.49918"
                      stroke="#97DFFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
              </div>
              <img
                src={avter}
                alt="avter"
                className="w-[24px] h-[24px] rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="my-6 flex px-3">
          <input
            type="text"
            placeholder="Write Your Comment"
            className="w-full border border-[#CACACA] rounded-tl-3xl rounded-bl-3xl focus:outline-none py-1 px-5 border-r-0"
          />
          <div className="bg-[#D9D9D9] rounded-tr-3xl rounded-br-3xl py-3 px-4 cursor-pointer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.4">
                <path
                  d="M6 5.71L16 10L6 14.29V10.95L13.14 10L6 9.05V5.71ZM10 0C11.313 0 12.614 0.2587 13.827 0.7612C15.04 1.2638 16.142 2.0003 17.071 2.9289C18 3.8575 18.736 4.9599 19.239 6.1732C19.741 7.3864 20 8.6868 20 10C20 12.6522 18.946 15.1957 17.071 17.0711C15.196 18.9464 12.652 20 10 20C8.687 20 7.386 19.7413 6.173 19.2388C4.96 18.7362 3.85799 17.9997 2.92899 17.0711C1.05399 15.1957 0 12.6522 0 10C0 7.3478 1.05399 4.8043 2.92899 2.9289C4.80399 1.0536 7.348 0 10 0ZM10 2C7.878 2 5.84299 2.8429 4.34299 4.3431C2.84299 5.8434 2 7.8783 2 10C2 12.1217 2.84299 14.1566 4.34299 15.6569C5.84299 17.1571 7.878 18 10 18C12.122 18 14.157 17.1571 15.657 15.6569C17.157 14.1566 18 12.1217 18 10C18 7.8783 17.157 5.8434 15.657 4.3431C14.157 2.8429 12.122 2 10 2Z"
                  fill="#7D7D7D"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ChatComponent);
