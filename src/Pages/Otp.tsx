import { memo, useEffect, useRef } from "react";
import otpImage from "../assets/icons/otp.svg";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setOtp } from "../app/auth/userSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import { actAuthLogin } from "../app/auth/act/ActAuthLogin";
import { handleSkip } from "../app/auth/authSlice";
import { useTranslation } from "react-i18next";

type PropsInputsOtp = {
  num1: string;
  num2: string;
  num3: string;
  num4: string;
};

const Otp = () => {
  const { t } = useTranslation();
  const { handleSubmit, setValue } = useForm<PropsInputsOtp>();
  const { phoneOrEmail, Otp2 } = useAppSelector((state) => state.userSliceToLogin);
  const { data } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  useEffect(() => {
    if (Otp2) {
      sendUserDataToDatabase();
    }
  }, [Otp2]);  

  useEffect(() => {
    if (data?.access_token) {
      navigate("/");
    }
  }, [data?.access_token, navigate]);
  

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
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    if (/^\d$/.test(value)) {
      setValue(`num${index + 1}` as keyof PropsInputsOtp, value);
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
            {t("Skip")}
          </button>
        </div>
        <div className="flex flex-col justify-center items-start md:items-center">
          <div className="flex justify-center items-center w-full">
            <img src={otpImage} alt="otp" className="w-[200px] h-[200px]" />
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-lg text-start text-mainBlack">
             {t("OTPVerification")}
            </h3>
            <p className="font-normal text-[0.9rem] text-start text-ry3Text">
            {t("OTPVerificationMessage")}{" "}
              <span className="text-mainBlack">‎{phoneOrEmail}</span>
              {/* <span className="text-mainBlack">‎+964-11-4884697 </span> */}
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <div className="flex justify-center gap-2 py-4">
              {[1, 2, 3, 4].map((_, index) => (
                <div
                  key={index}
                  className="w-[50px] h-[50px] p-3 border border-borderColor rounded-[8px] flex justify-center items-center"
                >
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
               {t("Verify")}
              </button>
            </div>
            <p className="text-center font-normal text-[14px] text-mainBlack">
            {t("NotReceivedMessage")}
              <button className="text-primary">{t("SendAgain")}</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default memo(Otp);
