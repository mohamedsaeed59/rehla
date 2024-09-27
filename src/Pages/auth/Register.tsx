import { memo } from "react";
import SliderAuth from "../../Components/auth/SliderAuth";
import logo from "../../assets/logolight.webp";
import { Link, useNavigate } from "react-router-dom";
import SocialIcons from "../../Components/Global/SocialIcons";


const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <div className="flex flex-col  w-full p-4 gap-3">
            <div>
              <div className="text-end w-full p-2">
                <button className="font-normal text-xl">Skip</button>
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
                <form className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <label className="text-lg font-normal">
                      Full Name <span className="text-red">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Ex; Yomna Ashraf Ahmed"
                      className="rounded-lg p-2 focus:outline-none border border-borderColor"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-lg font-normal">
                      Phone number <span className="text-red">*</span>
                    </label>
                    <input
                      type="phone"
                      placeholder="write your phone with 7-digit code"
                      className="rounded-lg p-2 focus:outline-none border border-borderColor"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-lg font-normal">
                      E-mail (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="you@gmail.com"
                      className="rounded-lg p-2 focus:outline-none border border-borderColor"
                    />
                  </div>
                  <button
                    onClick={() => navigate("/tellUs")}
                    type="submit"
                    className="rounded-3xl p-2 focus:outline-none text-lg font-bold bg-mainBlack text-white"
                  >
                    Create Account
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
                <p className="text-ry3Text font-normal">Sign up with</p>
              </div>
             <SocialIcons/>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <SliderAuth heightScreen={"full"} heightBottom={10} />
        </div>
      </div>
    </div>
  );
};

export default memo(Register);
