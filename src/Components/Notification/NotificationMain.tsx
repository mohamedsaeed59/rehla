import { memo, useRef, useState } from "react";
import notification from "../../assets/arcticons_notificationcron.svg";
import Notification from "../../Components/Header/Notification";
import { AnimatePresence } from "framer-motion";
import useClickOutside from "../../hooks/useClickOutside";

function NotificationMain() {
  const [openNotification, setOpenNotification] = useState<boolean>(false);
  const handleOpenNotification = () => {
    setOpenNotification(!openNotification);
  };


  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setOpenNotification(false));

  return (
    <div ref={dropdownRef} className="relative">
      <button onClick={handleOpenNotification}>
        <img src={notification} alt="notification" className="w-4 lg:w-8" />
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
