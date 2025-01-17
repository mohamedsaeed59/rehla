import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../app/hooks";

export default function NumberOfAdults({services, selectedIds, setSelectedIds, setTotalPriceOfServices, countAdults, setCountAdults, countChildren, setCountChildren}: any) {
  const [showCounterChildren, setShowCounterChildren] = useState(false);
  const { chaletDetails } = useAppSelector((state: any) => state.chalet);

  const handleCheckboxClick = () => {
    setShowCounterChildren(prev => !prev); // Toggle counter visibility
    if (!showCounterChildren) setCountChildren(0); // Reset count when showing counter
  };

  const handleIncreaseChildren = () => {
    setCountChildren((prevCount: any) => prevCount + 1);
  };

  const handleDecreaseChildren = () => {
    setCountChildren((prevCount: any) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handleIncreaseAdults = () => {
    setCountAdults((prevCount: any) => prevCount + 1);
  };

  const handleDecreaseAdults = () => {
    setCountAdults((prevCount: any) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handleCheckboxChange = (id: number, price: number) => {
    setSelectedIds((prevSelectedIds: any) =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((selectedId: any) => selectedId !== id) // Uncheck
        : [...prevSelectedIds, id] // Check
    );

    setTotalPriceOfServices((prevTotal: any) =>
      selectedIds.includes(id)
        ? prevTotal - price // Subtract price if unchecked
        : prevTotal + price // Add price if checked
    );
  };

  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-8 py-9">
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center flex-wrap md:flex-nowrap">
          <div className="flex items-center gap-2">
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.53105 10.8235C1.73885 12.0119 1.31615 13.4079 1.3162 14.836V16.116C1.3162 16.2905 1.24687 16.4577 1.12346 16.5812C1.00003 16.7046 0.832645 16.7738 0.658101 16.7738C0.483572 16.7738 0.316184 16.7046 0.192758 16.5812C0.0693473 16.4577 0 16.2905 0 16.116V14.8373C0.000411313 13.1487 0.500979 11.498 1.43861 10.0933L1.58076 9.88018C1.62873 9.80832 1.69038 9.74665 1.76221 9.69863C1.83404 9.65045 1.91465 9.61707 1.99941 9.60013C2.08416 9.58319 2.17142 9.58319 2.25622 9.59996C2.341 9.61673 2.42165 9.65012 2.49354 9.69797C2.56546 9.74599 2.6272 9.8075 2.67528 9.87936C2.72335 9.95122 2.75682 10.0318 2.77375 10.1165C2.79068 10.2012 2.79074 10.2883 2.77394 10.3732C2.75715 10.4579 2.72381 10.5385 2.67584 10.6103L2.53105 10.8235Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.24269 8.70278C4.80803 8.70278 3.46946 9.41845 2.67449 10.6104L1.57941 9.88154C2.09126 9.11456 2.78452 8.48555 3.59774 8.05059C4.41095 7.61546 5.319 7.38754 6.24138 7.38721H6.53094C6.70548 7.38721 6.87287 7.45644 6.9963 7.57977C7.11971 7.70327 7.18904 7.87051 7.18904 8.04499C7.18904 8.21947 7.11971 8.38672 6.9963 8.51005C6.87287 8.63339 6.70548 8.70278 6.53094 8.70278H6.24269ZM10.294 10.8077C10.9126 11.7365 11.2429 12.8258 11.2429 13.9414H12.5591C12.5586 12.5668 12.1515 11.2229 11.389 10.0789L11.2574 9.88154C11.2108 9.80688 11.1497 9.74225 11.0776 9.69176C11.0056 9.64111 10.9241 9.60543 10.8381 9.58685C10.752 9.56827 10.6631 9.56711 10.5766 9.58356C10.4901 9.6 10.4077 9.63355 10.3344 9.68239C10.2612 9.73107 10.1984 9.79405 10.1499 9.86756C10.1014 9.94107 10.0682 10.0235 10.0521 10.11C10.0361 10.1965 10.0375 10.2854 10.0565 10.3713C10.0754 10.4573 10.1114 10.5385 10.1623 10.6104L10.294 10.8077Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.59519 8.70278C8.02853 8.70278 9.36711 9.41845 10.1621 10.6104L11.2572 9.88154C10.7453 9.11456 10.052 8.48555 9.23884 8.05059C8.42563 7.61546 7.51758 7.38754 6.59519 7.38721H6.30562C6.2192 7.38721 6.13363 7.40414 6.05378 7.4372C5.97394 7.47025 5.90138 7.51876 5.84028 7.57977C5.77916 7.64095 5.73069 7.71347 5.69762 7.79322C5.66455 7.87298 5.64752 7.95849 5.64752 8.04499C5.64752 8.13133 5.66455 8.21684 5.69762 8.29676C5.73069 8.37652 5.77916 8.44904 5.84028 8.51005C5.90138 8.57123 5.97394 8.61957 6.05378 8.65263C6.13363 8.68568 6.2192 8.70278 6.30562 8.70278H6.59519Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.33582 7.23567C6.72473 7.23567 7.10981 7.15903 7.46912 7.01037C7.82843 6.86155 8.15489 6.6435 8.42988 6.36871C8.70489 6.09375 8.92303 5.76749 9.07184 5.40834C9.22067 5.04918 9.29727 4.66438 9.29727 4.27562C9.29727 3.88687 9.22067 3.5019 9.07184 3.14291C8.92303 2.78376 8.70489 2.45733 8.42988 2.18254C8.15489 1.90775 7.82843 1.68969 7.46912 1.54087C7.10981 1.39204 6.72473 1.31558 6.33582 1.31558C5.55039 1.31558 4.79713 1.62737 4.24176 2.18254C3.68637 2.73772 3.37437 3.49055 3.37437 4.27562C3.37437 5.06069 3.68637 5.81353 4.24176 6.36871C4.79713 6.92371 5.55039 7.23567 6.33582 7.23567ZM6.33582 8.55124C7.47032 8.55124 8.55836 8.10083 9.36058 7.29898C10.1628 6.49714 10.6135 5.40965 10.6135 4.27562C10.6135 3.1416 10.1628 2.05411 9.36058 1.25227C8.55836 0.450422 7.47032 0 6.33582 0C5.20132 0 4.11328 0.450422 3.31106 1.25227C2.50885 2.05411 2.05817 3.1416 2.05817 4.27562C2.05817 5.40965 2.50885 6.49714 3.31106 7.29898C4.11328 8.10083 5.20132 8.55124 6.33582 8.55124ZM11.9415 15.0449C11.1486 16.2335 10.7254 17.6302 10.7254 19.0588V20.4191C10.7254 20.5935 10.656 20.7608 10.5326 20.8841C10.4092 21.0074 10.2418 21.0768 10.0673 21.0768C9.89271 21.0768 9.72532 21.0074 9.60191 20.8841C9.47848 20.7608 9.40915 20.5935 9.40915 20.4191V19.0588C9.40904 17.3709 9.90867 15.7206 10.8451 14.3161L11.0202 14.053C11.1172 13.9078 11.268 13.8071 11.4393 13.7731C11.6106 13.739 11.7884 13.7744 11.9336 13.8714C12.0788 13.9685 12.1796 14.1191 12.2136 14.2903C12.2477 14.4615 12.2123 14.6392 12.1153 14.7844L11.9415 15.0449Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.7731 12.8269C15.0491 12.8268 14.3362 13.0055 13.6979 13.3469C13.0595 13.6885 12.5155 14.1823 12.114 14.7845L11.0203 14.0544C11.5418 13.2723 12.2485 12.6307 13.0777 12.1872C13.9068 11.7436 14.8327 11.5114 15.7731 11.5114H16.068C16.2424 11.5114 16.4098 11.5806 16.5332 11.7039C16.6566 11.8274 16.7261 11.9947 16.7261 12.1691C16.7261 12.3436 16.6566 12.5109 16.5332 12.6342C16.4098 12.7575 16.2424 12.8269 16.068 12.8269H15.7731ZM19.9679 15.045C20.7607 16.2336 21.1839 17.6303 21.184 19.0588V20.4191C21.184 20.5936 21.2533 20.7608 21.3767 20.8842C21.5001 21.0075 21.6676 21.0769 21.8421 21.0769C22.0165 21.0769 22.184 21.0075 22.3074 20.8842C22.4308 20.7608 22.5002 20.5936 22.5002 20.4191V19.0588C22.4999 17.3708 21.9998 15.7205 21.0629 14.3162L20.8879 14.053C20.7908 13.9078 20.64 13.8072 20.4687 13.7732C20.2974 13.7391 20.1196 13.7745 19.9744 13.8715C19.8292 13.9685 19.7285 14.1192 19.6944 14.2903C19.6604 14.4615 19.6957 14.6393 19.7928 14.7845L19.9679 15.045Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.1343 12.8269C16.8582 12.8268 17.5711 13.0055 18.2095 13.3469C18.8478 13.6885 19.3919 14.1823 19.7933 14.7845L20.8884 14.0544C20.3667 13.2719 19.6597 12.6306 18.8304 12.1869C18.001 11.7432 17.0749 11.5112 16.1343 11.5114H15.8382C15.6636 11.5114 15.4961 11.5806 15.3727 11.7039C15.2493 11.8274 15.1801 11.9947 15.1801 12.1691C15.1801 12.3436 15.2493 12.5109 15.3727 12.6342C15.4961 12.7575 15.6636 12.8269 15.8382 12.8269H16.1343Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.8764 11.5106C16.2653 11.5106 16.6505 11.4339 17.0096 11.2853C17.3689 11.1365 17.6955 10.9184 17.9705 10.6436C18.2455 10.3686 18.4635 10.0424 18.6124 9.68323C18.7613 9.32408 18.8378 8.93927 18.8378 8.55052C18.8378 8.16177 18.7613 7.77697 18.6124 7.41781C18.4635 7.05866 18.2455 6.7324 17.9705 6.45745C17.6955 6.18265 17.3689 5.9646 17.0096 5.81577C16.6505 5.66711 16.2653 5.59048 15.8764 5.59048C15.0909 5.59048 14.3377 5.90227 13.7824 6.45745C13.227 7.01262 12.915 7.76545 12.915 8.55052C12.915 9.33559 13.227 10.0884 13.7824 10.6436C14.3377 11.1988 15.0909 11.5106 15.8764 11.5106ZM15.8764 12.8261C17.0109 12.8261 18.0989 12.3757 18.9012 11.5739C19.7034 10.772 20.154 9.68455 20.154 8.55052C20.154 7.41649 19.7034 6.32901 18.9012 5.52717C18.0989 4.72532 17.0109 4.2749 15.8764 4.2749C14.742 4.2749 13.6539 4.72532 12.8516 5.52717C12.0494 6.32901 11.5988 7.41649 11.5988 8.55052C11.5988 9.68455 12.0494 10.772 12.8516 11.5739C13.6539 12.3757 14.742 12.8261 15.8764 12.8261Z"
                fill="black"
              />
            </svg>
            <p className="text-xl md:text-2xl font-bold text-mainBlack">
              {t("NumberOfAdults")} <span className="text-red">*</span>
            </p>
          </div>
          <div>
            <div
              className="py-2 px-3 inline-block bg-white"
              data-hs-input-number=""
            >
              <div className="flex items-center gap-x-1.5">
                <button
                  type="button"
                  className="inline-flex justify-center p-2 h-[37px] items-center gap-x-2 font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  //   tabindex="-1"
                  aria-label="Decrease"
                  data-hs-input-number-decrement=""
                  onClick={handleDecreaseAdults}
                  disabled={countAdults === 0}
                >
                  <svg
                    width="19"
                    height="2"
                    viewBox="0 0 19 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 2H0V0H19V2Z" fill="#1E1E1E" />
                  </svg>
                </button>
                <input
                  className="p-0 w-6 bg-transparent text-lg border-0 text-gray-800 text-center focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  type="number"
                  aria-roledescription="Number field"
                  value={countAdults}
                  data-hs-input-number-input=""
                  readOnly
                />
                <button
                  type="button"
                  className="inline-flex justify-center p-2 items-center gap-x-2 font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  aria-label="Increase"
                  data-hs-input-number-increment=""
                  onClick={handleIncreaseAdults}
                >
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 10.2857H10.8571V18H8.14286V10.2857H0V7.71429H8.14286V0H10.8571V7.71429H19V10.2857Z"
                      fill="#1E1E1E"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="text-base font-normal text-ry3Text">
          ({t("Max")} {chaletDetails?.no_adults} {t("Adults")} = 1 {t("Adult")} = {chaletDetails?.price_extra_adults}{t("QD")}/{t("shift")})
        </p>
        <div className="flex justify-between items-center flex-wrap md:flex-nowrap">
        <div className="flex items-center gap-2">
        <div className="inline" onClick={handleCheckboxClick}><input type="checkbox" checked={showCounterChildren} readOnly /> </div>     
        <p className="text-base font-normal text-mainBlack inline">
          {t("Have Children")} <span className="text-ry3Text">(&lt;5 {t("years")})</span>
        </p>
        </div>
        {showCounterChildren && (
        <div className="flex items-center gap-x-1.5 mt-2 mr-2">
          <button
            type="button"
            className="inline-flex justify-center p-2 h-[37px] items-center gap-x-2 font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            aria-label="Decrease"
            onClick={handleDecreaseChildren}
            disabled={countChildren === 0}
          >
            <svg
              width="19"
              height="2"
              viewBox="0 0 19 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path d="M19 2H0V0H19V2Z" fill="#1E1E1E" />
            </svg>
          </button>        
          <input
            className="p-0 w-6 bg-transparent text-lg border-0 text-gray-800 text-center focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            type="number"
            aria-roledescription="Number field"
            value={countChildren}
            readOnly
          />      
          <button
            type="button"
            className="inline-flex justify-center p-2 items-center gap-x-2 font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            aria-label="Increase"
            onClick={handleIncreaseChildren}
          >
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 10.2857H10.8571V18H8.14286V10.2857H0V7.71429H8.14286V0H10.8571V7.71429H19V10.2857Z"
              fill="#1E1E1E"
            />
            </svg>
          </button>
        </div>
      )}
      </div>     
      </div>
      <div>
        <div className="flex items-center gap-2">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_39_4105"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="22"
              height="22"
            >
              <path d="M21.2591 0H0V21.2591H21.2591V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_39_4105)">
              <path
                d="M1.79364 20.5815L0.765564 19.5451L15.9176 4.39807L16.9458 5.42103L1.79364 20.5815Z"
                fill="url(#paint0_linear_39_4105)"
              />
              <path
                d="M16.6148 4.73027C16.241 4.35823 15.9188 4.39809 15.9188 4.39809L13.2415 7.06862C13.3993 7.04205 13.6766 7.17493 13.9242 7.41409C14.17 7.66655 14.3044 7.9456 14.2696 8.10504L16.947 5.42105C16.947 5.42105 16.9884 5.1023 16.6148 4.73027Z"
                fill="url(#paint1_linear_39_4105)"
              />
              <path
                d="M4.16912 17.1668C3.79543 16.7948 3.47322 16.8346 3.47322 16.8346L0.787598 19.5184C0.94538 19.4919 1.23105 19.6115 1.47852 19.8639C1.72432 20.1031 1.85221 20.3954 1.81733 20.5549L4.5013 17.8709C4.5013 17.8709 4.54282 17.5521 4.16912 17.1668Z"
                fill="url(#paint2_linear_39_4105)"
              />
              <path
                d="M1.80938 20.555C1.9352 20.4354 1.80691 20.1033 1.5228 19.8243C1.23871 19.532 0.906405 19.399 0.780576 19.5318C0.654748 19.6514 0.783048 19.9837 1.06714 20.276C1.35124 20.555 1.68355 20.6878 1.80938 20.555Z"
                fill="#9E9E9E"
              />
              <path
                opacity="0.85"
                d="M15.9143 4.39807L4.63031 15.6787C4.50409 15.8116 4.63197 16.1436 4.91598 16.4227C5.19999 16.7017 5.53216 16.8345 5.65673 16.7149L16.9423 5.42103C16.9423 5.42103 17.0121 5.11557 16.6135 4.73025C16.2149 4.33164 15.9143 4.39807 15.9143 4.39807Z"
                fill="url(#paint3_linear_39_4105)"
              />
              <path
                opacity="0.22"
                d="M12.0566 8.25126L0.772706 19.5452C0.64648 19.6648 0.774367 19.997 1.05838 20.276C1.34238 20.5683 1.67455 20.6879 1.79912 20.5683L13.0864 9.28769C13.0864 9.28769 13.1561 8.96876 12.7575 8.58344C12.3573 8.19812 12.0566 8.25126 12.0566 8.25126Z"
                fill="url(#paint4_linear_39_4105)"
              />
              <path
                d="M11.355 3.12252L12.3482 2.1393C12.403 2.08615 12.4977 2.12607 12.4894 2.2058L12.3615 3.36176C12.3565 3.4149 12.388 3.45469 12.4345 3.45469L13.8563 3.62743C13.9393 3.64072 13.9575 3.74701 13.8796 3.78687L12.398 4.45121C12.3764 4.45121 12.3598 4.47784 12.3532 4.50441L11.9247 5.96595C11.9047 6.04567 11.8084 6.04569 11.7735 5.99255L11.1108 4.78339C11.103 4.7701 11.0914 4.75678 11.0772 4.74349C11.0631 4.74349 11.0471 4.74349 11.0311 4.74349L9.75888 4.83659C9.74195 4.84987 9.725 4.83659 9.71033 4.83659C9.69565 4.8233 9.68398 4.80998 9.67689 4.79669C9.66981 4.7834 9.66767 4.75678 9.67074 4.74349C9.67382 4.7302 9.68198 4.71704 9.69411 4.70375L10.5378 3.87997C10.5627 3.85339 10.5694 3.81344 10.5561 3.78687L10.1093 2.76375C10.0794 2.69731 10.1508 2.61765 10.2206 2.65751L11.2653 3.14912C11.2935 3.16241 11.3301 3.14909 11.355 3.12252Z"
                fill="url(#paint5_radial_39_4105)"
              />
              <path
                d="M14.9628 10.5101L15.7501 10.8688C15.77 10.8821 15.7933 10.8821 15.8099 10.8688L16.5988 10.2708C16.6403 10.231 16.6968 10.2709 16.6934 10.324L16.6188 11.2939C16.617 11.3205 16.627 11.3472 16.6469 11.3604L17.3994 11.8255C17.4442 11.852 17.4326 11.9184 17.3795 11.9317L16.4361 12.1177C16.4128 12.131 16.3945 12.1444 16.3896 12.1709L16.1885 13.0611C16.177 13.1142 16.1055 13.1142 16.0789 13.0744L15.6604 12.3038C15.6552 12.2905 15.6476 12.2905 15.6382 12.2772C15.6289 12.2772 15.6181 12.2772 15.6072 12.2772L14.6174 12.3038C14.5659 12.3038 14.5376 12.2505 14.5693 12.2107L15.207 11.4401C15.2219 11.4268 15.2252 11.4002 15.217 11.3869L14.8815 10.5764C14.8632 10.5365 14.9147 10.4835 14.9628 10.5101Z"
                fill="url(#paint6_radial_39_4105)"
              />
              <path
                d="M18.2119 1.93992L19.6121 1.31547C19.6818 1.2889 19.7432 1.35527 19.7067 1.42171L19.0142 2.69737C18.9976 2.72394 19.0009 2.76373 19.0224 2.7903L20.5222 4.23854C20.567 4.29168 20.5289 4.37153 20.4607 4.37153L18.6205 4.05266C18.5923 4.05266 18.5657 4.06582 18.5507 4.0924L17.5825 5.85967C17.546 5.9261 17.453 5.9261 17.4379 5.85967L17.2486 4.1323C17.2449 4.11901 17.2366 4.10569 17.2249 4.0924C17.2134 4.07911 17.199 4.0791 17.1839 4.0791L15.6641 3.82672C15.5994 3.82672 15.5744 3.74703 15.6243 3.69389L16.8949 2.72396C16.9131 2.69739 16.9231 2.67075 16.9197 2.65747L16.6923 0.730921C16.6856 0.6512 16.7769 0.611261 16.8285 0.651122L18.1273 1.92662C18.1488 1.9399 18.182 1.9532 18.2119 1.93992Z"
                fill="#1E1E1E"
              />
              <path
                d="M15.9927 4.46447C15.3715 4.62392 14.7421 4.7568 14.0993 4.80995C13.4566 4.87638 12.8039 4.8233 12.1694 4.71701C11.535 4.59743 10.9121 4.45122 10.2843 4.33164C9.65653 4.21205 9.0254 4.1191 8.39095 4.05266C8.07372 4.0128 7.75484 3.98612 7.43761 3.94626C7.12703 3.91969 6.81977 3.93303 6.52745 3.99946C6.24012 4.0659 5.97272 4.21199 5.79999 4.43787C5.6256 4.66375 5.54256 4.94276 5.54256 5.24836C5.53924 5.84627 5.78006 6.44425 6.08566 6.97573C6.39292 7.52049 6.79651 8.01215 7.20011 8.51706C8.00397 9.50029 8.8726 10.4436 9.73459 11.3869C10.1664 11.8653 10.5982 12.3437 11.0234 12.822C11.4519 13.3004 11.8655 13.7919 12.2608 14.2969C12.6577 14.8018 13.0347 15.3332 13.342 15.9178C13.4184 16.0507 13.5031 16.2101 13.528 16.3961C13.5364 16.4891 13.5264 16.5956 13.4732 16.6886C13.4201 16.7816 13.332 16.8346 13.2473 16.8744C13.0729 16.9409 12.9002 16.9542 12.7341 16.9409C12.568 16.9277 12.4053 16.901 12.2458 16.8611C11.6114 16.715 11.0184 16.4494 10.4471 16.1571C10.1614 15.9976 9.88241 15.8382 9.60837 15.6787C9.33598 15.506 9.06858 15.32 8.80617 15.1472C9.35093 15.4794 9.90898 15.7982 10.4853 16.0773C11.0616 16.343 11.6612 16.5821 12.2774 16.7017C12.4318 16.7283 12.5863 16.7549 12.7391 16.7682C12.8919 16.7682 13.0464 16.7549 13.1693 16.7017C13.2291 16.6751 13.2789 16.6353 13.3038 16.5822C13.3287 16.5423 13.3353 16.4759 13.3287 16.4094C13.3087 16.2766 13.2374 16.1438 13.156 16.0109C12.8454 15.4662 12.4651 14.9479 12.0598 14.4563C10.4388 12.4898 8.59191 10.7094 6.94433 8.7164C6.54074 8.22478 6.13217 7.7065 5.81162 7.13516C5.49605 6.56382 5.2353 5.92598 5.2436 5.23506C5.24692 4.8896 5.34658 4.53086 5.57245 4.25184C5.79667 3.95952 6.13217 3.80021 6.46268 3.72049C6.79651 3.64077 7.13865 3.64073 7.46584 3.68059C7.78473 3.72045 8.10528 3.74698 8.42417 3.80012C9.06194 3.87985 9.69639 3.99942 10.3259 4.119C10.9553 4.25187 11.5782 4.41142 12.201 4.55757C12.8221 4.69044 13.4566 4.75688 14.0944 4.73031C14.7304 4.69045 15.3633 4.58405 15.9927 4.46447Z"
                fill="#1E1E1E"
              />
              <path
                d="M11.258 5.91279C9.38954 6.35126 7.24536 5.08906 5.2656 5.31494C4.50991 5.40795 4.19932 6.3114 4.92512 7.74639C6.35015 10.2045 8.42956 11.6527 9.19688 12.543C8.16548 11.9716 6.04621 10.4437 4.57302 9.00875C2.35576 6.88284 2.76599 4.22533 4.82215 4.23862C5.51141 4.17218 6.84509 4.50449 7.40314 4.70379C7.95289 4.92967 9.82469 5.74006 11.258 5.91279Z"
                fill="url(#paint7_radial_39_4105)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_39_4105"
                x1="8.34145"
                y1="11.9716"
                x2="9.36998"
                y2="12.9947"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.595" stop-color="#616161" />
                <stop offset="0.775" stop-color="#565656" />
                <stop offset="1" stop-color="#424242" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_39_4105"
                x1="14.7613"
                y1="5.72675"
                x2="15.8881"
                y2="6.85614"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.262" stop-color="#F5F5F5" />
                <stop offset="0.466" stop-color="#EAEAEA" />
                <stop offset="0.822" stop-color="#CDCDCD" />
                <stop offset="0.989" stop-color="#BDBDBD" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_39_4105"
                x1="2.31112"
                y1="18.1766"
                x2="3.44081"
                y2="19.306"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.262" stop-color="#F5F5F5" />
                <stop offset="0.466" stop-color="#EAEAEA" />
                <stop offset="0.822" stop-color="#CDCDCD" />
                <stop offset="0.989" stop-color="#BDBDBD" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_39_4105"
                x1="11.3578"
                y1="9.97854"
                x2="17.1041"
                y2="4.23857"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1E1E1E" />
                <stop offset="1" stop-color="#BCB8B8" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_39_4105"
                x1="-0.416476"
                y1="21.7508"
                x2="3.56032"
                y2="17.778"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1A237E" />
                <stop
                  offset="0.186"
                  stop-color="#1D2A87"
                  stop-opacity="0.814"
                />
                <stop offset="0.49" stop-color="#243DA0" stop-opacity="0.51" />
                <stop
                  offset="0.873"
                  stop-color="#2F5CC7"
                  stop-opacity="0.127"
                />
                <stop offset="1" stop-color="#3367D6" stop-opacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_39_4105"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(12.6084 3.82676) rotate(2.144) scale(2.45543 2.45543)"
              >
                <stop stop-color="#BCB8B8" />
                <stop offset="1" stop-color="#1E1E1E" />
              </radialGradient>
              <radialGradient
                id="paint6_radial_39_4105"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(16.3209 10.7226) rotate(-20.0888) scale(1.9736 1.97358)"
              >
                <stop stop-color="#7D7D7D" />
                <stop offset="1" stop-color="#1E1E1E" />
              </radialGradient>
              <radialGradient
                id="paint7_radial_39_4105"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(15.4073 11.6395) rotate(30.6965) scale(15.5674 9.32953)"
              >
                <stop stop-color="#4A4A4A" />
                <stop offset="1" stop-color="#1E1E1E" />
              </radialGradient>
            </defs>
          </svg>

          <p className="text-xl font-bold text-mainBlack">
            {t("AddExtraAmenities")} <span className="text-ry3Text">({t("Optional")})</span>
          </p>
        </div>
        <p className="text-base font-normal text-ry3Text">
          ({t("eachOneWillCostExtraFees")})
        </p>
        {services?.map((service: any) => (
          <div key={service.id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6">
              <div className="flex justify-between items-center w-[217px] text-mainBlack">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-[19px] h-[19px] cursor-pointer"
                  onChange={() => handleCheckboxChange(Number(service.id), Number(service.price))}
                checked={selectedIds.includes(Number(service.id))}
                />
                <p className="text-lg font-normal">{service.name}</p>
              </div>
              <p className="font-bold text-[15px]">{service.price} |{t("QD")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
