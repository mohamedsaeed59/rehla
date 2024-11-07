import { Link, useNavigate } from "react-router-dom";
// import no from "../../../assets/no.jfif";
import Group from "../../../assets/icons/Group.svg";
import location from "../../../assets/icons/carbon_location.svg";
import { useEffect } from 'react';
import { fetchNotifications } from '../../../app/notification/notificationSlice';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

export default function NotificationsContent() {
  const dispatch = useAppDispatch();
  const { notifications } = useAppSelector((state: any) => state.notifications);
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);
  
  // const handleMarkAsSeen = () => {
  //   dispatch(markNotificationsAsSeen());
  // };

  return (
    <div className="flex flex-col gap-3 w-full h-full p-3">
      {notifications?.map((notification: any) => 
      notification.type === "public_notifications" && (
      <div className="flex flex-col gap-[10px] bg-[#F7F7F7] p-2">
        <span className="text-[#7D7D7D] text-xs">{notification?.date}</span>
        <div className="flex items-center gap-2">
          <div className="bg-white rounded-lg w-[42px] h-[42px] flex justify-center items-center">
            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6231 22.7329C15.6231 23.0673 15.4902 23.388 15.2537 23.6245C15.0173 23.861 14.6966 23.9938 14.3621 23.9938H7.63729C7.30289 23.9938 6.98219 23.861 6.74569 23.6245C6.50919 23.388 6.37639 23.0673 6.37639 22.7329C6.37639 22.3985 6.50919 22.0778 6.74569 21.8413C6.98219 21.6048 7.30289 21.472 7.63729 21.472H14.3621C14.6966 21.472 15.0173 21.6048 15.2537 21.8413C15.4902 22.0778 15.6231 22.3985 15.6231 22.7329ZM21.8162 4.92049C20.8374 3.00739 19.3672 1.38919 17.5564 0.231989C17.4165 0.137889 17.259 0.0728887 17.0935 0.0407887C16.9279 0.0086887 16.7576 0.0100887 16.5926 0.0449887C16.4277 0.0797887 16.2713 0.147392 16.1329 0.243792C15.9945 0.340092 15.8769 0.46319 15.7869 0.60589C15.6969 0.74849 15.6364 0.907691 15.6091 1.07409C15.5817 1.24049 15.588 1.41069 15.6276 1.57459C15.6672 1.73859 15.7393 1.89289 15.8396 2.02849C15.9399 2.16399 16.0663 2.27809 16.2115 2.36399C17.6459 3.27849 18.8075 4.56279 19.5739 6.08149C19.6807 6.28729 19.8422 6.45949 20.0405 6.57949C20.2389 6.69939 20.4664 6.76239 20.6982 6.76139C20.8998 6.76159 21.0985 6.71299 21.2772 6.61949C21.5739 6.46559 21.7973 6.20019 21.8984 5.88159C21.9995 5.56299 21.9699 5.21729 21.8162 4.92049ZM2.42239 6.08149C3.18879 4.56279 4.35029 3.27849 5.78479 2.36399C5.93319 2.27989 6.06299 2.16669 6.16629 2.03109C6.26969 1.89539 6.34449 1.74029 6.38609 1.57489C6.42779 1.40959 6.43549 1.23749 6.40879 1.06909C6.38209 0.90069 6.32139 0.739391 6.23059 0.595091C6.13979 0.450791 6.02059 0.32639 5.88039 0.22949C5.74009 0.13249 5.58159 0.0649917 5.41449 0.0310917C5.24739 -0.00280827 5.07509 -0.002508 4.90819 0.031992C4.74119 0.066492 4.58289 0.134489 4.44299 0.231989C2.63219 1.38919 1.16199 3.00739 0.18319 4.92049C0.0294896 5.21729 -1.14292e-05 5.56299 0.100989 5.88159C0.202089 6.20019 0.425588 6.46559 0.722288 6.61949C0.900888 6.71299 1.09959 6.76159 1.30119 6.76139C1.53249 6.76179 1.75939 6.69859 1.95709 6.57869C2.15489 6.45879 2.31579 6.28679 2.42239 6.08149ZM20.6541 16.4158C20.8912 16.7271 21.0368 17.0984 21.0743 17.488C21.1117 17.8775 21.0397 18.2698 20.8663 18.6206C20.6928 18.9715 20.4249 19.2669 20.0926 19.4736C19.7603 19.6804 19.3768 19.7902 18.9855 19.7908H3.01399C2.62229 19.7908 2.23849 19.6814 1.90569 19.4749C1.57299 19.2684 1.30459 18.973 1.13069 18.6221C0.956888 18.2711 0.88459 17.8786 0.92199 17.4888C0.95929 17.0989 1.10489 16.7273 1.34219 16.4158C2.09559 15.4354 2.99499 13.6186 3.01079 10.5378C3.01159 8.41939 3.85399 6.38819 5.35249 4.89079C6.85099 3.39349 8.88289 2.55279 11.0013 2.55359C13.1197 2.55449 15.1509 3.39679 16.6483 4.89529C18.1456 6.39379 18.9863 8.42569 18.9855 10.5441C19.0012 13.6186 19.9007 15.4354 20.6541 16.4158ZM18.1806 17.269C17.3232 15.903 16.4794 13.7416 16.4637 10.5504C16.4641 9.83289 16.3232 9.12229 16.049 8.45919C15.7747 7.79609 15.3726 7.19359 14.8655 6.68589C14.3585 6.17819 13.7563 5.77539 13.0936 5.50039C12.4308 5.22549 11.7204 5.08369 11.0029 5.08329C10.2853 5.08289 9.57469 5.22379 8.91169 5.49799C8.24859 5.77219 7.64599 6.17439 7.13839 6.68139C6.63069 7.18849 6.22789 7.79059 5.95289 8.45339C5.67789 9.11619 5.53619 9.82659 5.53579 10.5441C5.51999 13.7405 4.67629 15.903 3.81879 17.269H18.1806Z"
                fill="#F3C800"
              />
            </svg>
          </div>
          <div>
            <p className="text-xs font-normal">
              {notification?.message}
            </p>
            <Link
              to={"/"}
              className="text-xs font-bold text-mainBlack border-b border-black"
            >
              Discovor now
            </Link>
          </div>
        </div>
      </div>))}
      {notifications?.map((notification: any) => 
       notification.type === "rejected" && (
      <div className="bg-[#F7F7F7] p-2">
        <div className="flex gap-[10px]">
          <div className="w-[86px] h-[145px]">
            <div className="w-full bg-[#FF3B30] text-center rounded-tr-xl rounded-tl-xl text-white p-[2px]">
              <span className="text-sm">{notification?.not_title}</span>
            </div>
            <img
              src={notification?.ad?.image}
              alt="no"
              className="w-full h-[80%] object-cover rounded-bl-xl rounded-br-xl"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-primary text-base font-bold">{notification?.ad?.name}</h3>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1 text-ry3Text">
                <img src={Group} alt="Group" className="w-4 h-4" />
                <span className="text-[14px]">{notification?.ad?.no_adults} Adults </span>
              </div>
              <div className="flex items-center gap-1">
                <img src={location} alt="location" className="w-4 h-4" />
                <span className="text-[15px] font-semibold text-mainBlack">
                {notification?.ad?.city}
                </span>
              </div>
            </div>
            <button
              // type="submit"
              onClick={() => navigate(`/chalet/${notification?.ad?.id}`)}
              className="rounded-3xl w-[200px] text-center py-2 focus:outline-none text-sm font-bold bg-mainBlack text-white"
            >
              Change date
            </button>
            <button
              // type="submit"
              onClick={() => navigate("/")}
              className="rounded-3xl border border-mainBlack w-[200px] text-center py-2 focus:outline-none text-xs font-bold text-mainBlack"
            >
              Recommend another chalet
            </button>
          </div>
        </div>
        <p className="text-[#FF3B30] text-[12px] font-normal py-2">
          . Reason: your selected date is fully booked
        </p>
      </div>))}
      {notifications?.map((notification: any) => 
      notification.type === "accepted" && (
      <div className="bg-[#F7F7F7] p-2">
        <div className="flex gap-[10px]">
          <div className="w-[86px] h-[145px]">
            <div className="w-full bg-primary text-center rounded-tr-xl rounded-tl-xl text-white p-[2px]">
              <span className="text-sm">{notification?.not_title}</span>
            </div>
            <img
              src={notification?.ad?.image}
              alt="no"
              className="w-full h-[80%] object-cover rounded-bl-xl rounded-br-xl"
            />
          </div>
          <div className="flex flex-col gap-[15px]">
            <h3 className="text-primary text-base font-bold">{notification?.ad?.name}</h3>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1 text-ry3Text">
                <img src={Group} alt="Group" className="w-4 h-4" />
                <span className="text-[14px]">{notification?.ad?.no_adults} Adults </span>
              </div>
              <div className="flex items-center gap-1">
                <img src={location} alt="location" className="w-4 h-4" />
                <span className="text-[15px] font-semibold text-mainBlack">
                {notification?.ad?.city}
                </span>
              </div>
            </div>
            <button
              // type="submit"
              onClick={() => navigate("/bookings")}
              className="rounded-3xl w-[200px] text-center py-2 focus:outline-none text-sm font-bold bg-mainBlack text-white"
            >
              Go & complete check out
            </button>
          </div>
        </div>
      </div>))}
    </div>
  );
}
