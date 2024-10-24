import { memo, useState } from "react";
import chat from "../assets/chat.png";
import ChatComponent from "../Components/Global/ChatComponent";
import logolight from "../assets/logolight.jpg";
import close from "../assets/icons/close.svg";
import { useTranslation } from "react-i18next";

const Chate = () => {
  const [openChat, setOpenChat] = useState<boolean>(true);

  const handelOpenChat = () => {
    setOpenChat(!openChat);
  };

  const { t } = useTranslation();

  return (
    <div className="flex justify-end">
      <div className="">
        <div className="fixed rtl:left-0 ltr:right-0 md:rtl:left-10 md:ltr:right-10 bottom-0 p-2 z-40">
          <div className="relative">
            {!openChat && (
              <div className="w-[320px] md:w-[400px] absolute rtl:left-2 ltr:right-2 bottom-0 shadow-xl">
                <div className="flex justify-end items-center bg-[#999999] text-white rounded-tl-[30px] rounded-tr-[30px] p-4">
                  <div className="w-[80%] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={logolight}
                        alt="logolight"
                        className="w-[32px] h-[32px] rounded-full"
                      />

                      <p className="text-lg font-medium">REHLA Chat</p>
                    </div>
                    <div
                      onClick={() => setOpenChat(!openChat)}
                      className="cursor-pointer bg-white rounded-full"
                    >
                      <img src={close} alt="close" className="w-8 h-8" />
                    </div>
                  </div>
                </div>
                <ChatComponent />
              </div>
            )}
            {openChat && (
              <div className="flex items-start gap-1">
                <div className="bg-mainBlack rounded-lg rounded-br-none text-white p-[2px] w-[80px]">
                  <p className="text-center">{t('hi')}</p>
                </div>
                <div className="border border-mainBlack rounded-full p-1">
                  <img
                    onClick={() => handelOpenChat()}
                    src={chat}
                    alt="chat"
                    className="w-[50px] h-[50px] cursor-pointer"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Chate);
