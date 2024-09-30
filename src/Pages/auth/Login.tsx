import { memo } from "react";
import SliderAuth from "../../Components/auth/SliderAuth";
import logo from "../../assets/logolight.webp";
import { Link, useNavigate } from "react-router-dom";
import SocialIcons from "../../Components/Global/SocialIcons";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <div className="flex flex-col  w-full p-4 gap-8">
            <div>
              <div className="text-end w-full p-2">
                <Link to={"/home"} className="font-normal text-xl">Skip</Link>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={logo}
                  alt="logo"
                  className="w-[190px] h-[190px] object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 w-full md:w-[80%] mx-auto">
                <h3 className="font-bold text-xl text-mainBlack">
                  Welcome Back,
                </h3>
                <form className="flex flex-col gap-7">
                  <div className="flex flex-col gap-1">
                    <label className="text-lg font-normal">
                      Phone number / E-mail *
                    </label>
                    <input
                      type="email"
                      placeholder="you@gmail.com"
                      className="rounded-lg p-2 focus:outline-none border border-borderColor"
                    />
                  </div>
                  <button
                    onClick={() => navigate("/otp")}
                    type="submit"
                    className="rounded-3xl p-1 focus:outline-none text-lg font-bold bg-mainBlack text-white"
                  >
                    Login
                  </button>
                </form>
                <p className="text-center font-normal text-base text-mainBlack">
                  Don’t have an Account?{" "}
                  <Link to={"/register"} className="text-primary">
                    Create Account
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex justify-center flex-col items-center gap-2">
              <div className="text-center">
                <p className="text-ry3Text font-normal">Or</p>
                <p className="text-ry3Text font-normal">Login with</p>
              </div>
              <SocialIcons />
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <SliderAuth/>
        </div>
      </div>
    </div>
  );
};

export default memo(Login);
