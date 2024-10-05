import { memo, useEffect } from "react";
import SliderAuth from "../../Components/auth/SliderAuth";
import logo from "../../assets/logolight.webp";
import { Link, useNavigate } from "react-router-dom";
import SocialIcons from "../../Components/Global/SocialIcons";
import { handleSkip } from "../../app/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { actAuthRegister } from "../../app/auth/act/ActAuthRegister";
import { SubmitHandler, useForm } from "react-hook-form";

type PropsInputsRegister = {
  name: string;
  email: string;
  phone: string;
  registration_type: string;
};

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { statusData } = useAppSelector((state) => state.auth);
  console.log(statusData);
  console.log(typeof statusData);

  const {
    handleSubmit,
    formState: { errors },
    // reset,
    register,
  } = useForm<PropsInputsRegister>();

  useEffect(() => {
    if (statusData === 201) {
      navigate("/tellUs");
    }
  }, [statusData, navigate]);

  const onSubmit: SubmitHandler<PropsInputsRegister> = (data) => {
    console.log(data);
    dispatch(actAuthRegister({ ...data, registration_type: "email" }));
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <div className="flex flex-col  w-full p-4 gap-3">
            <div>
              <div className="text-end w-full p-2">
                <button
                  onClick={() => {
                    dispatch(handleSkip());
                    navigate("/");
                  }}
                  className="font-normal text-lg"
                >
                  Skip
                </button>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={logo}
                  alt="logo"
                  className="w-[150px] h-[150px] object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 w-full md:w-[80%] mx-auto">
                <h3 className="font-bold text-xl text-mainBlack">
                  Create Account
                </h3>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-5"
                >
                  <div className="flex flex-col gap-1">
                    <label className="text-lg font-normal">
                      Full Name <span className="text-red">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Ex; Yomna Ashraf Ahmed"
                      className="rounded-lg p-2 focus:outline-none border border-borderColor"
                      {...register("name", {
                        required: "Full name is required",
                        minLength: {
                          value: 6,
                          message: "Full name must be at least 6 characters",
                        },
                      })}
                    />
                    {errors.name && (
                      <span className="text-red text-[0.8rem]">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-lg font-normal">
                      Phone number <span className="text-red">*</span>
                    </label>
                    <input
                      type="phone"
                      placeholder="write your phone with 7-digit code"
                      className="rounded-lg p-2 focus:outline-none border border-borderColor"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{11}$/,
                          message: "Invalid phone number format (number must be 11 numbers)",
                        },
                      })}
                    />
                    {errors.phone && (
                      <span className="text-red text-[0.8rem]">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-lg font-normal">
                      E-mail (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="you@gmail.com"
                      className="rounded-lg p-2 focus:outline-none border border-borderColor"
                      {...register("email", {
                        pattern: {
                          value: /^\S+@\S+\.\S+$/,
                          message: "Invalid email format",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="text-red text-[0.8rem]">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="rounded-3xl p-2 focus:outline-none text-lg font-bold bg-mainBlack text-white"
                  >
                    Create Account
                  </button>
                </form>
                <p className="text-center font-normal text-base text-mainBlack">
                  Already have an Account?{" "}
                  <Link to={"/login"} className="text-primary">
                    Log in
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex justify-center flex-col items-center gap-2">
              <div className="text-center">
                <p className="text-ry3Text font-normal">Or</p>
                <p className="text-ry3Text font-normal">Sign up with</p>
              </div>
              <SocialIcons />
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 h-full overflow-hidden">
          <SliderAuth heightScreen={"full"} />
        </div>
      </div>
    </div>
  );
};

export default memo(Register);
