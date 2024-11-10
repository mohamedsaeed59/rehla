import avter from "../../assets/avter.webp";

export default function Comments({com}: any) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-3">
        <img
          src={com?.user_image || avter}
          alt="avter"
          className="w-[24px] h-[24px] rounded-full"
          onError={(e) => {
            (e.target as HTMLImageElement).src = avter;
          }}
        />
        <div className="flex flex-col gap-0">
          <p className="text-sm font-medium">{com?.user_name}</p>
          <div className="flex items-center gap-[2px]">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.29379 10.1173C6.11289 10.0029 5.88599 10.0029 5.70509 10.1173L2.93019 11.8723C2.50009 12.1443 1.96839 11.7419 2.08269 11.2308L2.81839 7.94111C2.86619 7.72731 2.79689 7.50361 2.63829 7.35941L0.195789 5.13991C-0.182591 4.79611 0.0207901 4.14671 0.52069 4.10241L3.73959 3.81721C3.94919 3.79861 4.13179 3.66071 4.21409 3.45871L5.47739 0.360608C5.67339 -0.120202 6.32659 -0.120202 6.52259 0.360608L7.78589 3.45871C7.86819 3.66071 8.05079 3.79861 8.26039 3.81721L11.4793 4.10241C11.9792 4.14671 12.1826 4.79611 11.8042 5.13991L9.36169 7.35941C9.20309 7.50361 9.13379 7.72731 9.18159 7.94111L9.91729 11.231C10.0316 11.7421 9.49999 12.1445 9.06989 11.8726L6.29379 10.1173Z"
                fill="#F3C800"
              />
            </svg>
            <span className="text-mainBlack font-normal text-sm">({com?.rate})</span>
          </div>
        </div>
      </div>
      <p className="text-[#B0B0B0] w-[90%] mx-auto text-base px-2">{com?.comment}</p>
    </div>
  );
}
