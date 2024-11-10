import { memo, useEffect, useRef, useState } from "react";
import notification from "../../assets/arcticons_notificationcron.svg";
import Notification from "../../Components/Header/Notification";
import { AnimatePresence } from "framer-motion";
import useClickOutside from "../../hooks/useClickOutside";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchNotificationCount, markNotificationsAsSeen } from "../../app/notification/notificationSlice";
import { useNavigate } from "react-router-dom";

function NotificationMain() {
  const dispatch = useAppDispatch();
  const [openNotification, setOpenNotification] = useState<boolean>(false);
  const { notificationCount } = useAppSelector((state: any) => state.notifications);
  const accessToken = localStorage.getItem("access_token");
  const navigate = useNavigate();

  const handleOpenNotification = () => {
    setOpenNotification(!openNotification);

    if (!accessToken) {
      navigate("/login");
      return;
    }

    if (!openNotification) {
      // Mark notifications as seen when opening
      dispatch(markNotificationsAsSeen());
    }
  };

  
  useEffect(() => {
    dispatch(fetchNotificationCount());
  }, [dispatch]);


  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setOpenNotification(false));

  return (
    <div ref={dropdownRef} className="relative">
      <button onClick={handleOpenNotification}>
        <img src={notification} alt="notification" className="w-4 lg:w-8" />
        {notificationCount > 0 &&
        <span className="absolute top-[-12px] bg-red text-[10px] lg:text-[15px] text-white font-bold w-[18px] h-[18px] lg:w-6 lg:h-6 text-center rounded-[50px]">
          {notificationCount}
        </span>}
      </button>
      <AnimatePresence>
        {openNotification && (
          // bg-black/65 z-20 absolute top-0 left-0 w-full h-full
          <Notification />
        )}
      </AnimatePresence>
    </div>
  );
}

export default memo(NotificationMain);
