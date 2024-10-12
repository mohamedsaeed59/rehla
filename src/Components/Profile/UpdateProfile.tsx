import { memo } from "react";
import avter from "../../assets/avter.webp";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

const UpdateProfile = () => {
  const accessToken = localStorage.getItem("access_token");
  const { data } = useAppSelector((state) => state.auth);
  return (
    <div className="flex flex-col justify-center items-center">
      {accessToken ? (
        <Link to={"/profile"}>
          <img
            src={avter}
            alt="avter"
            className="w-14 object-cover rounded-full"
          />
        </Link>
      ) : (
        <Link to={"/login"}>
          <img
            src={avter}
            alt="avter"
            className="w-14 object-cover rounded-full"
          />
        </Link>
      )}
      <h2 className="font-medium text-xl text-mainBlack">{data.user}</h2>
      <Link to={"/editprofile"} className="text-primary flex items-center">
        Update Profile
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.86556 13.9593H14.1322C14.2206 13.9593 14.3054 13.9242 14.3679 13.8617C14.4304 13.7992 14.4656 13.7144 14.4656 13.626C14.4656 13.5376 14.4304 13.4528 14.3679 13.3903C14.3054 13.3278 14.2206 13.2926 14.1322 13.2926H2.86556C2.77715 13.2926 2.69237 13.3278 2.62986 13.3903C2.56735 13.4528 2.53223 13.5376 2.53223 13.626C2.53223 13.7144 2.56735 13.7992 2.62986 13.8617C2.69237 13.9242 2.77715 13.9593 2.86556 13.9593ZM6.97356 11.454C7.25501 11.3748 7.51187 11.2257 7.72023 11.0206L14.0802 4.66064C14.298 4.44198 14.4203 4.14593 14.4203 3.83731C14.4203 3.52869 14.298 3.23264 14.0802 3.01398L13.4536 2.39398C13.2316 2.18245 12.9368 2.06445 12.6302 2.06445C12.3236 2.06445 12.0288 2.18245 11.8069 2.39398L5.44689 8.74731C5.2418 8.95459 5.09468 9.21205 5.02023 9.49398L4.52689 11.334C4.5037 11.418 4.5032 11.5068 4.52545 11.5911C4.5477 11.6754 4.59191 11.7523 4.65356 11.814C4.74804 11.9066 4.87462 11.9591 5.00689 11.9606L6.97356 11.454ZM7.24689 10.5473C7.12395 10.6724 6.9697 10.7622 6.80023 10.8073L6.15356 10.9806L5.48689 10.314L5.66023 9.66731C5.70626 9.49821 5.79592 9.34418 5.92023 9.22064L6.17356 8.97398L7.50023 10.3006L7.24689 10.5473ZM7.97356 9.82731L6.64689 8.50064L11.1336 4.01398L12.4602 5.34064L7.97356 9.82731ZM13.6069 4.19398L12.9336 4.86731L11.6069 3.54064L12.2802 2.86064C12.374 2.76701 12.5011 2.71442 12.6336 2.71442C12.7661 2.71442 12.8931 2.76701 12.9869 2.86064L13.6069 3.48731C13.6999 3.5814 13.752 3.70836 13.752 3.84064C13.752 3.97293 13.6999 4.09988 13.6069 4.19398Z"
            fill="#62ADCF"
          />
        </svg>
      </Link>
    </div>
  );
};

export default memo(UpdateProfile);
