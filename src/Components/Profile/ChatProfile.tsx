import { Link } from "react-router-dom";
import MainProfile from "./MainProfile";
import logolight from "../../assets/logolight.jpg";
import ChatComponent from "../Global/ChatComponent";

export default function ChatProfile() {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="md:block hidden">
          <MainProfile />
        </div>
        <div className="my-8">
          <div className="bg-[#999999] text-white rounded-tl-[30px] rounded-tr-[30px] p-7">
            <div className="w-full md:w-[70%] flex items-center justify-between">
              <Link
                to={"/"}
                className="font-medium text-sm flex gap-1 items-center "
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.3327 16.6663L9.66602 11.9997L14.3327 7.33301"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Back
              </Link>
              <div className="flex items-center gap-2">
                <img
                  src={logolight}
                  alt="logolight"
                  className="w-[32px] h-[32px] rounded-full"
                />

                <p className="text-lg font-medium">REHLA Chat</p>
              </div>
            </div>
          </div>
          <ChatComponent leftLine={"25%"} />
        </div>
      </div>
    </div>
  );
}
