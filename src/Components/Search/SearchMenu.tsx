import { memo } from "react";
import location from "../../assets/icons/Location2.svg";
import arrow from "../../assets/icons/right-arrow.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SearchMenu = ({searchResults}: any) => {
  const { t } = useTranslation();

  return (
    <div className="absolute top-12 z-20 rtl:left-0 ltr:right-0 rounded-lg bg-white border border-borderColor2 duration-300">
      <div className="w-[300px] md:w-[340px]">
        <div className="flex flex-col gap-2 p-2">
          <h4 className="font-normal text-lg sm:text-xl">{t("Location")}</h4>
          {[...new Map(searchResults.map((loc: any) => [loc.city, loc])).values()].map((loc: any, index: number) => (
            <div key={index} className="flex justify-between items-center p-1 my-1 cursor-pointer">
              <Link to="/search" className="flex items-center gap-1">
                <img src={location} alt="location" className="w-3 h-3" />
                <p className="font-normal text-sm">{loc?.city}</p>
              </Link>
              <img src={arrow} alt="arrow" className="w-3 h-3" />
            </div>
          ))}
          <h4 className="font-normal text-sm sm:text-base">{t("Chalet name")}</h4>
          {/* {searchResults.map((chalet: any, index: number) => { */}
          {[...new Map(searchResults.map((chalet: any) => [chalet.name, chalet])).values()].map((chalet: any, index: number) => (
            <div key={index} className="flex justify-between items-center p-1 my-1">
            <Link to={"/search"}>
              <div className="flex items-center gap-1 text-primary">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_39_3339"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="16"
                    height="16"
                  >
                    <path d="M16 0H0V16H16V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_39_3339)">
                    <path
                      d="M13.5538 11.951C13.771 11.604 13.863 11.32 13.8305 11.205C13.8073 11.124 13.4207 11.186 12.9312 11.309C12.6252 10.892 12.3362 10.6 12.2262 10.632C12.1152 10.664 12.03 11.066 11.9975 11.583C11.5188 11.743 11.16 11.9 11.1845 11.98C11.1935 12.011 11.2182 12.047 11.254 12.086C9.9948 12.264 8.794 12.553 7.893 12.665C7.6579 12.695 7.4212 12.711 7.1842 12.712C6.198 12.712 5.6493 12.416 4.8403 12.307L8.0095 7.155C8.3397 7.064 8.6848 7.03901 9.0244 7.08301C9.3641 7.12701 9.6916 7.23901 9.9878 7.41101C10.3312 7.60801 10.6247 7.88102 10.8454 8.20902C11.0662 8.53802 11.2082 8.913 11.2605 9.305C11.6264 9.154 12.0222 9.09001 12.4171 9.11701C12.812 9.14301 13.1954 9.26099 13.5375 9.45999C13.8378 9.63199 14.1004 9.86301 14.3097 10.139C14.5189 10.415 14.6705 10.73 14.7555 11.066C15.8305 7.62701 14.4222 3.75401 11.1772 1.75101L11.6805 0.880008C11.7117 0.823008 11.7192 0.755996 11.7015 0.692996C11.6838 0.629996 11.6423 0.577009 11.5858 0.544009C11.5293 0.511009 11.4623 0.502008 11.399 0.518008C11.3358 0.534008 11.2813 0.574008 11.2472 0.630008L10.7443 1.50101C7.3875 -0.30799 3.3295 0.407994 0.8885 3.05899C1.22171 2.96499 1.57046 2.938 1.914 2.982C2.2575 3.025 2.5889 3.13701 2.8883 3.31101C3.2317 3.50801 3.5252 3.78099 3.746 4.10999C3.9667 4.43799 4.1087 4.813 4.161 5.206C4.5269 5.055 4.9227 4.99 5.3176 5.017C5.7125 5.044 6.0959 5.161 6.438 5.361C7.0038 5.686 7.4248 6.21499 7.6157 6.83899L4.277 12.268L4.247 12.267C4.039 12.267 3.8115 12.281 3.557 12.314C2.4205 12.459 0.5 13.5 0.5 13.5V15.5H15.5V12.25C15.5 12.25 14.5828 12.009 13.5538 11.951ZM15 15H1V13.803C1.652 13.471 2.8828 12.904 3.6205 12.809C3.7398 12.794 3.8533 12.784 3.964 12.777L3.3658 13.75L3.799 14L4.5485 12.781C4.9265 12.81 5.2435 12.888 5.5725 12.972C6.0353 13.09 6.5138 13.212 7.1842 13.212C7.4313 13.212 7.6835 13.195 7.955 13.161C8.416 13.104 8.9487 13.002 9.5122 12.895C10.2717 12.75 11.1 12.595 11.929 12.508C11.9493 12.516 11.9678 12.525 11.9888 12.534C12.0103 13.011 12.0415 13.372 12.1453 13.387C12.327 13.413 12.539 13.163 12.8667 12.82C13.3278 12.932 13.6418 13.028 13.7805 12.908C13.8348 12.861 13.7708 12.693 13.6482 12.458C14.1023 12.493 14.5537 12.557 14.9998 12.649L15 15Z"
                      fill="#62ADCF"
                    />
                    <path
                      d="M2.2607 14.1389L2.0107 13.8889L2.2607 13.6389L2.5107 13.8889L2.2607 14.1389ZM2.9327 14.6389L2.6827 14.3889L2.9327 14.1389L3.1827 14.3889L2.9327 14.6389ZM2.9327 13.5139L3.0577 13.6389L2.9327 13.7639L2.8077 13.6389L2.9327 13.5139ZM3.745 14.2639L3.62 14.1389L3.745 14.0139L3.87 14.1389L3.745 14.2639ZM2.1357 14.7639L2.0107 14.6389L2.1357 14.5139L2.2607 14.6389L2.1357 14.7639ZM1.47949 14.2639L1.35449 14.1389L1.47949 14.0139L1.60449 14.1389L1.47949 14.2639ZM9.12 13.8889L8.995 13.7639L9.12 13.6389L9.245 13.7639L9.12 13.8889ZM10.3545 14.3889L10.2295 14.2639L10.3545 14.1389L10.4795 14.2639L10.3545 14.3889ZM10.7137 13.8889L10.5887 13.7639L10.7137 13.6389L10.8387 13.7639L10.7137 13.8889ZM11.2922 14.1389L11.1672 14.0139L11.2922 13.8889L11.417 14.0139L11.2922 14.1389ZM11.7872 13.2639L11.9122 13.3889L11.7872 13.5139L11.6622 13.3889L11.7872 13.2639ZM14.5572 13.7189L14.4322 13.8439L14.307 13.7189L14.432 13.5939L14.5572 13.7189ZM13.7362 14.2639L13.6112 14.1389L13.7362 14.0139L13.8612 14.1389L13.7362 14.2639ZM13.932 13.6389L13.807 13.7639L13.682 13.6389L13.807 13.5139L13.932 13.6389ZM9.9632 14.1389L9.7132 13.8889L9.9632 13.6389L10.2132 13.8889L9.9632 14.1389ZM14.0567 13.0139L14.3067 13.2639L14.0567 13.5139L13.8067 13.2639L14.0567 13.0139ZM12.0372 14.5139L11.7875 14.2639L12.0375 14.0139L12.2875 14.2639L12.0372 14.5139Z"
                      fill="#62ADCF"
                    />
                  </g>
                </svg>

                <p className="text-sm font-medium">{chalet?.name}</p>
              </div>
              <div className="flex items-center gap-1 pl-3">
                <img src={location} alt="location" className="w-3 h-3" />
                <p className="text-ry3Text text-xs font-light">{chalet?.city}</p>
              </div>
            </Link>
            <img src={arrow} alt="arrow" className="w-3 h-3" />
          </div>
          ))}         

          <div className="m-1">
            <button
              type="submit"
              className="w-full rounded-[35px] p-2 focus:outline-none text-lg font-bold hover:bg-mainBlack border border-mainBlack hover:text-white text-mainBlack duration-300"
            >
            <Link to={"/search"}>{t("Show all search results")}</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(SearchMenu);
