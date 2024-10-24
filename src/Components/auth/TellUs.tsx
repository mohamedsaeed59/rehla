import { memo } from "react";
import imageLogo from "../../assets/logolight.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const TellUs = () => {
  const [gender, setGender] = useState<string>("male");
  const [age, setAge] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  

  useEffect(() => {
    if (gender && age >= "10") {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [gender, age]);

  const { t } = useTranslation();


  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        <div className="flex flex-col gap-4 order-2 md:order-1">
          <div className="flex flex-col items-center transform md:translate-x-1/2">
            <h2 className="font-bold text-lg sm:text-2xl text-mainBlack py-4">
            {t("Tell us more about you")}
            </h2>

            <div className="w-[280px] md:w-[300px] mx-auto my-3 flex justify-between items-center">
              <ol className="flex w-full text-xs text-gray-900 font-medium sm:text-base">
                <li className="flex w-full relative text-mainBlack  after:content-['']  after:w-full after:h-[1px]  after:bg-borderColor after:inline-block after:absolute after:top-[12px] after:left-[24px]">
                  <div className="block whitespace-nowrap z-10">
                    <span className="w-6 h-6 border-2 border-mainBlack rounded-full flex justify-center items-center mx-auto mb-3 text-sm  bg-body"></span>{" "}
                    {t('User data')}
                  </div>
                </li>
                <li className="flex text-gray-900">
                  <div className="block whitespace-nowrap z-10">
                    <span className="w-6 h-6 bg-body border-2 border-borderColor rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-indigo-600"></span>{" "}
                    
                    {t('Location')}
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div className="w-full mt-0 md:mt-20">
            <form className="flex flex-col gap-3">
              <label className="text-lg font-bold">
              {t('Gender')}<span className="text-red">*</span>
              </label>
              <div className="flex items-center gap-8 w-full md:w-1/2">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="male"
                    checked={gender === "male"}
                    name="fav_language"
                    value="male"
                    className="w-[18px] h-[18px] cursor-pointer"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label className="text-xl font-normal cursor-pointer" htmlFor="male">
                    
                    {t('Male')}
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="female"
                    name="fav_language"
                    value="female"
                    checked={gender === "female"}
                    className="w-[18px] h-[18px] cursor-pointer"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label className="text-xl font-normal cursor-pointer" htmlFor="female">
                    {t('Female')}
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-bold">
                   {t('Age')} <span className="text-red">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Write only numbers"
                  className="rounded-lg p-2 focus:outline-none border border-borderColor"
                  onChange={(e) => setAge(e.target.value)}
                />
                {/* {age.length <= 2 && <p className="text-red text-sm">Not valid at least 2  digits</p>} */}
              </div>
              <div className="flex justify-end mt-4 py-2">
                <Link
                  to={"/tell-us-next"}
                  className={`w-[280px] rounded-3xl p-2 duration-500 text-center focus:outline-none text-lg font-bold text-white ${
                    isFormValid
                      ? "bg-mainBlack"
                      : "bg-gray-500 cursor-not-allowed"
                  }`}
                  onClick={(e) => {
                    if (!isFormValid) e.preventDefault();
                  }}
                >
                  {t('Next')}
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center items-center order-1 md:order-2">
          <img
            src={imageLogo}
            alt="imageLogo"
            className="object-contain w-[230px] h-[230px] md:w-[300px] md:h-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(TellUs);
