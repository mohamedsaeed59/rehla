import { memo } from "react";
import { motion } from "framer-motion";
// import NotificationsEmpty from "./_components/NotificationsEmpty";
import NotificationsContent from "./_components/NotificationsContent";

const Notification = () => {
  // const [noNotifications, setNoNotifications ] = useState<boolean>(false);
  return (
    <>
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        exit={{ y: "-100vh" }}
        className="absolute top-12 z-20 rtl:left-[-25px] ltr:right-[-25px] rounded-3xl rounded-tr-none bg-white border border-borderColor2 duration-300"
      >
        <div className="w-[300px] md:w-[410px]">
          {/* <NotificationsEmpty/> */}
          <NotificationsContent/>
        </div>
      </motion.div>
    </>
  );
};

export default memo(Notification);
