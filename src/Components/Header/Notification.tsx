import { memo, useEffect } from "react";
import { motion } from "framer-motion";
import NotificationsEmpty from "./_components/NotificationsEmpty";
import NotificationsContent from "./_components/NotificationsContent";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchNotifications } from "../../app/notification/notificationSlice";

const Notification = () => {
  // const [noNotifications, setNoNotifications ] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const accessToken = localStorage.getItem("access_token");
  const { notifications } = useAppSelector((state: any) => state.notifications);

useEffect(() => {
  dispatch(fetchNotifications());
}, [dispatch]);

  return (
    <>
    {accessToken &&
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        exit={{ y: "-100vh" }}
        className="absolute top-12 z-20 rtl:left-[-25px] ltr:right-[-25px] rounded-3xl ltr:rounded-tr-none rtl:rounded-tl-none bg-white border border-borderColor2 duration-300"
      >
        <div className="w-[300px] md:w-[410px]">
          {notifications.length === 0 ?
           <NotificationsEmpty/> :
           <NotificationsContent/>
          }
        </div>
      </motion.div>}
    </>
  );
};

export default memo(Notification);
