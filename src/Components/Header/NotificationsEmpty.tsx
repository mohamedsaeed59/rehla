import { memo } from "react";
import loading from "../../assets/loading.gif";

const NotificationsEmpty = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <img src={loading} alt="loading" className="w-[200px] h-[200px]" />
        <p>No notifications yet</p>
      </div>
    </>
  );
};

export default memo(NotificationsEmpty);
