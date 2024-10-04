// import { memo, useEffect } from "react";
// import otpImage from "../assets/icons/otp.svg";
// // import error from "../assets/icons/erroricon.svg";
// import { Link, useNavigate } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../app/hooks";
// import { setOtp } from "../app/auth/userSlice";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { actAuthLogin } from "../app/auth/act/ActAuthLogin";
// import { handleSkip } from "../app/auth/authSlice";

// type PropsInputsOtp = {
//   num1: string;
//   num2: string;
//   num3: string;
//   num4: string;
// };

// const Otp = () => {
//   const { handleSubmit, register } = useForm<PropsInputsOtp>();

//   const { phoneOrEmail, Otp2 } = useAppSelector(
//     (state) => state.userSliceToLogin
//   );

//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   let accessToken ;
  
//   useEffect(() => {
//     accessToken = localStorage.getItem("access_token");
//     if (Otp2) {
//       sendUserDataToDatabase();
//     }

//     if (accessToken) {
//       navigate("/");
//     }
//   }, [Otp2 , accessToken]);

//   const onSubmit: SubmitHandler<PropsInputsOtp> = (data) => {
//     dispatch(setOtp(Object.values(data).join("")));
//   };

//   const sendUserDataToDatabase = () => {
//     const userData = {
//       phone: phoneOrEmail,
//       otp: Otp2,
//       fcm_token: "123456",
//     };
//     dispatch(actAuthLogin(userData));
//     navigate("/");
//   };

//   return (
//     <div className="overflow-hidden">
//       <div className="p-6 md:p-12">
//         <div className="text-end w-full p-4">
//           <button
//             onClick={() => {
//               dispatch(handleSkip());
//               navigate("/");
//             }}
//             className="font-normal text-base sm:text-xl"
//           >
//             Skip
//           </button>
//         </div>
//         <div className="flex flex-col justify-center items-center">
//           <img src={otpImage} alt="otp" className="w-[200px] h-[200px]" />
//           <div className="flex flex-col gap-1">
//             <h3 className="font-bold text-lg text-start text-mainBlack">
//               OTP Verification
//             </h3>
//             <p className="font-normal text-[0.9rem] text-start text-ry3Text">
//               Enter your OTP that was sent to{" "}
//               <span className="text-mainBlack">‎+964-11-4884697 </span>
//             </p>
//           </div>
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="flex flex-col gap-3"
//           >
//             <div className="flex justify-center gap-2 py-4">
//               <div className="w-[50px] h-[50px] p-3 border border-borderColor rounded-[8px] flex justify-center items-center">
//                 <input
//                   type="text"
//                   placeholder="."
                  
//                   {...register("num1", {
//                     required: "number is required",
//                   })}
//                   className="placeholder-textPlaceholder w-full h-full text-center focus:outline-none"
//                 />
//               </div>
//               <div className="w-[50px] h-[50px] p-3 border border-borderColor rounded-[8px]">
//                 <input
//                   type="text"
//                   placeholder="."
//                   className="placeholder-textPlaceholder w-full h-full text-center focus:outline-none"
//                   {...register("num2", {
//                     required: "number is required",
//                   })}
//                 />
//               </div>
//               <div className="w-[50px] h-[50px] p-3 border border-borderColor rounded-[8px]">
//                 <input
//                   type="text"
//                   placeholder="."
//                   className="placeholder-textPlaceholder w-full h-full text-center focus:outline-none"
//                   {...register("num3", {
//                     required: "number is required",
//                   })}
//                 />
//               </div>
//               <div className="w-[50px] h-[50px] p-3 border border-borderColor rounded-[8px]">
//                 <input
//                   type="text"
//                   placeholder="."
//                   className="placeholder-textPlaceholder w-full h-full text-center focus:outline-none"
//                   {...register("num4", {
//                     required: "number is required",
//                   })}
//                 />
//               </div>
//             </div>
//             {/* <div className="flex items-center gap-2 py-1">
//               <img src={error} alt="error" className="w-[16px] h-[16px]" />
//               <p className="text-red text-[0.9rem]">
//                 Please enter a valid code
//               </p>
//             </div> */}
//             <div className="w-full md:w-[290px]">
//               <button
//                 type="submit"
//                 className="w-full rounded-3xl p-2 focus:outline-none text-lg font-bold bg-mainBlack text-white"
//               >
//                 Verify
//               </button>
//             </div>
//             <p className="text-center font-normal text-[14px] text-mainBlack">
//               Not received a message?{" "}
//               <Link to={"/register"} className="text-primary">
//                 Send again
//               </Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default memo(Otp);




import { memo, useEffect, useRef } from "react"; 
import otpImage from "../assets/icons/otp.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setOtp } from "../app/auth/userSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import { actAuthLogin } from "../app/auth/act/ActAuthLogin";
import { handleSkip } from "../app/auth/authSlice";

type PropsInputsOtp = {
  num1: string;
  num2: string;
  num3: string;
  num4: string;
};

const Otp = () => {
  const { handleSubmit, register, setValue } = useForm<PropsInputsOtp>();

  const { phoneOrEmail, Otp2 } = useAppSelector(
    (state) => state.userSliceToLogin
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  let accessToken ;

  const inputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  useEffect(() => {
    accessToken = localStorage.getItem("access_token");
    if (Otp2) {
      sendUserDataToDatabase();
    }

    if (accessToken) {
      navigate("/");
    }
  }, [Otp2, accessToken]);

  const onSubmit: SubmitHandler<PropsInputsOtp> = (data) => {
    dispatch(setOtp(Object.values(data).join("")));
  };

  const sendUserDataToDatabase = () => {
    const userData = {
      phone: phoneOrEmail,
      otp: Otp2,
      fcm_token: "123456",
    };
    dispatch(actAuthLogin(userData));
    navigate("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    if (/^\d$/.test(value)) {  
      setValue(`num${index + 1}`, value);  
      if (index < inputRefs.length - 1 && inputRefs[index + 1].current) {
        inputRefs[index + 1].current!.focus();  
      }
    }
  };

  return (
    <div className="overflow-hidden">
      <div className="p-6 md:p-12">
        <div className="text-end w-full p-4">
          <button
            onClick={() => {
              dispatch(handleSkip());
              navigate("/");
            }}
            className="font-normal text-base sm:text-xl"
          >
            Skip
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={otpImage} alt="otp" className="w-[200px] h-[200px]" />
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-lg text-start text-mainBlack">
              OTP Verification
            </h3>
            <p className="font-normal text-[0.9rem] text-start text-ry3Text">
              Enter your OTP that was sent to{" "}
              <span className="text-mainBlack">‎+964-11-4884697 </span>
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <div className="flex justify-center gap-2 py-4">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="w-[50px] h-[50px] p-3 border border-borderColor rounded-[8px] flex justify-center items-center">
                  <input
                    type="text"
                    maxLength={1}
                    ref={inputRefs[index]}
                    onChange={(e) => handleChange(e, index)}
                    className="placeholder-textPlaceholder w-full h-full text-center focus:outline-none"
                  />
                </div>
              ))}
            </div>
            <div className="w-full md:w-[290px]">
              <button
                type="submit"
                className="w-full rounded-3xl p-2 focus:outline-none text-lg font-bold bg-mainBlack text-white"
              >
                Verify
              </button>
            </div>
            <p className="text-center font-normal text-[14px] text-mainBlack">
              Not received a message?{" "}
              <Link to={"/register"} className="text-primary">
                Send again
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default memo(Otp);

