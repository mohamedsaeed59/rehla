import { memo } from "react";
import loading from "../../assets/loading.gif";
import { motion } from "framer-motion";

const Notification = () => {
  // const [noNotifications, setNoNotifications ] = useState<boolean>(false);
  return (
    <>
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        exit={{ y: "-100vh" }} // الأنميشن عند الإغلاق
        className="absolute top-8 md:top-12 z-20 rtl:left-[-25px] ltr:right-[-25px] rounded-md bg-white border duration-300"
      >
        <div className="w-[300px] md:w-[500px] h-[500px]">
          <div className="flex flex-col justify-center items-center w-full h-full">
            <img src={loading} alt="loading" className="w-[200px] h-[200px]" />
            <p>No notifications yet</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default memo(Notification);
