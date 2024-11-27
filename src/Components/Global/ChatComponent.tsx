import { memo, useEffect, useRef, useState } from "react";
import avter from "../../assets/avter.webp";
import logolight from "../../assets/logolight.jpg";
import { useTranslation } from "react-i18next";
// import webSocketService from "../../utils/socketService";
import { useAppSelector } from "../../app/hooks";

const ChatComponent = () => {
  const { t } = useTranslation();
  const { data } = useAppSelector((state) => state.auth);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const socketRef = useRef<WebSocket | null>(null);
  const user_id = data.id;
  const channel = `chat-app${user_id}`;

  // WebSocket setup
  useEffect(() => {
    const socket = new WebSocket("ws://rehla-iq.com:8580");

    socket.onopen = () => {
      console.log("WebSocket connected");
      socket.send(JSON.stringify({ action: "join", channel }));
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, data]);
    };

    socket.onclose = () => {
      console.log("WebSocket disconnected");
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socketRef.current = socket;

    return () => {
      socket.close();
    };
  }, [channel]);

  // Send a message
  const handleSendMessage = () => {
    if (message.trim() && socketRef.current) {
      socketRef.current.send(
        JSON.stringify({
          action: "message",
          channel,
          message,
        })
      );
      setMessages((prev) => [
        ...prev,
        { user: "me", text: message, time: new Date().toLocaleTimeString() },
      ]);
      setMessage("");
    }
  };


  // Scrolling to bottom of the chatbox
  useEffect(() => {
    const chatContainer = document.querySelector(".overflow-y-scroll");
    //@ts-ignore
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]);

  return (
    <div className="bg-white">
      <div className="py-3">
        <div className="overflow-y-scroll h-[400px] md:h-[420px]">
          <p className="text-center text-xs font-normal text-[#252525] w-[95%] mx-auto">
            {t("ChatMessageHint")}
          </p>
          <div className="flex justify-center items-center gap-2 py-4">
            <span className="w-[50px] h-[2px] inline-block bg-[#DBDBDB]"></span>
            <p className="text-sm text-[#B0B0B0]">Yesterday at 04:15 PM</p>
            <span className="w-[50px] h-[2px] inline-block bg-[#DBDBDB]"></span>
          </div>
          <p className="text-[#7D7D7D] text-xs font-normal text-center p-1">
            {t(
              "you can send your problem to our chatbot and we will fix it soon"
            )}
          </p>
          <div className="flex flex-col gap-3 py-5 h-[250px] px-[10px]">
            {/* User Messages */}
            {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.user === "me" ? "justify-end" : "justify-start"
              } items-center gap-2 py-2`}
            >
              {msg.user !== "me" && (
                <img
                  src={logolight}
                  alt="avatar"
                  className="w-[24px] h-[24px] rounded-full border border-mainBlack"
                />
              )}
              <div
                className={`relative w-fit py-2 px-4 shadow-lg rounded-lg ${
                  msg.user === "me"
                    ? "bg-[#F3C800] text-right"
                    : "bg-white text-left"
                }`}
              >
                <p className="text-[15px] text-mainBlack">{msg.text}</p>
                <p className="text-xs text-gray-500">{msg.time}</p>
              </div>
              {msg.user === "me" && (
                <img
                  src={avter}
                  alt="avatar"
                  className="w-[24px] h-[24px] rounded-full"
                />
              )}
            </div>
          ))}
          </div>
        </div>
         <div className="my-6 flex px-3">
          <input
            className="border border-borderColor rtl:border-l-0 ltr:border-r-0 

           rtl:rounded-br-3xl  rtl:rounded-tr-3xl 
           ltr:rounded-bl-3xl  ltr:rounded-tl-3xl 

           focus:outline-none py-3 px-2 flex-1"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t("WriteYourComment")}
          />
          <button
            onClick={handleSendMessage}
            className="cursor-pointer bg-[#D9D9D9]
        rtl:rounded-bl-3xl  rtl:rounded-tl-3xl 
        ltr:rounded-br-3xl  ltr:rounded-tr-3xl 
         py-2 px-4 m-0"
          >
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
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default memo(ChatComponent);
