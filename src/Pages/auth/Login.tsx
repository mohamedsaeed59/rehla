import { memo } from "react";
import SliderAuth from "../../Components/auth/SliderAuth";
import logo from "../../assets/logolight.webp";
import { Link, useNavigate } from "react-router-dom";
import faceBook from "../../assets/icons/facebook.svg"
import google from "../../assets/icons/google.svg"
import apple from "../../assets/icons/apple.svg"

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <div className="flex flex-col  w-full p-4 gap-8">
            <div>
              <div className="text-end w-full p-2">
                <button className="font-normal text-xl">Skip</button>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={logo}
                  alt="logo"
                  className="w-[200px] h-[200px] object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 w-full md:w-[80%] mx-auto">
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
                  onClick={()=> navigate("/otp")}
                    type="submit"
                    className="rounded-3xl p-2 focus:outline-none text-lg font-bold bg-mainBlack text-white"
                  >
                    Login
                  </button>
                </form>
                <p className="text-center font-normal text-lg text-mainBlack">
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
              <div className="p-2 flex justify-center items-center">
                <ul className="flex gap-1 items-center">
                  <li className="border border-textPlaceholder bg-white rounded-lg p-1 w-[35px] h-[35px] flex justify-center items-center">
                    <a href="#"><img className="object-contain" src={faceBook} alt="faceBook"/></a>
                  </li>
                  <li className="border border-textPlaceholder bg-white rounded-lg p-1 w-[35px] h-[35px] flex justify-center items-center">
                    <a href="#"><img src={google} alt="google" className="object-contain"/></a>
                  </li>
                  <li className="border border-textPlaceholder bg-white rounded-lg p-1 w-[35px] h-[35px] flex justify-center items-center">
                    <a href="#"><img src={apple} alt="apple" className="object-contain"/></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <SliderAuth heightScreen={"screen"}  heightBottom={20} />
        </div>
      </div>
    </div>
  );
};

export default memo(Login);
