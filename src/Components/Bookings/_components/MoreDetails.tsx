import { memo } from "react";
import date from "../../../assets/date.png";

const MoreDetails = () => {
  return (
    <div className="transition duration-700 p-1">
      <div className="flex flex-col gap-6">
        <h3 className="text-[19px] font-normal text-mainBlack">
          Register Shifts
        </h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 py-2">
            <img src={date} alt="date" className="w-5 h-5" />
            <span className="text-base font-normal">15/09/2024</span>
          </div>

          <div className="w-[98%] md:w-[90%] mx-auto py-1">
            <div className="flex justify-between py-2">
              <p className="text-primary text-[15px] font-normal">
                Shift 1{" "}
                <span className="text-ry3Text">(08:00am - 03:00pm)</span>
              </p>
              <p className="text-mainBlack text-[18px] font-normal">350 |QD</p>
            </div>
            <div>
              <ol className="overflow-hidden space-y-16">
                <li className="relative flex-1 after:content-['']  after:w-[2px] after:h-52  after:bg-borderColor after:inline-block after:absolute after:-bottom-15 after:left-4 lg:after:left-5">
                  <a
                    href="#"
                    className="flex items-center font-medium w-full  "
                  >
                    <span className="w-8 h-8 bg-bgNew border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2385 0.878174V2.69829C14.1916 3.18474 16.992 6.7791 16.5057 10.7329C16.0914 14.0124 13.5162 16.6163 10.2385 17.0027V18.8053C15.1911 18.3094 18.7928 13.9137 18.2977 8.95869C17.8925 4.67927 14.4976 1.30112 10.2385 0.878174ZM8.43761 0.905184C6.68171 1.07679 5.00684 1.75243 3.63805 2.88749L4.9258 4.21982C5.93423 3.40906 7.14986 2.88749 8.43761 2.70642V0.905184ZM2.3684 4.15767C1.24327 5.52514 0.550496 7.19665 0.378418 8.95869H2.1793C2.35043 7.67905 2.85465 6.46291 3.65615 5.44542L2.3684 4.15767ZM0.387466 10.7599C0.567513 12.526 1.26083 14.1921 2.37745 15.5623L3.65615 14.2732C2.86086 13.2557 2.35394 12.0422 2.18835 10.7599H0.387466ZM4.9258 15.5974L3.63805 16.8324C5.00225 17.9688 6.67212 18.6769 8.43761 18.8674V17.0662C7.15647 16.9 5.94355 16.3933 4.9258 15.5974ZM9.7883 5.35486V10.0843L13.8404 12.4895L13.165 13.5975L8.43761 10.7599V5.35486H9.7883Z"
                          fill="#7D7D7D"
                        />
                      </svg>
                    </span>
                    <div className="block">
                      <h4 className="text-[19px] font-medium text-ry4Text">
                        Date Confirmation
                      </h4>
                    </div>
                  </a>
                </li>
                <li className="relative flex-1 ">
                  <a className="flex items-center font-medium w-full  ">
                    <span className="w-8 h-8 bg-bgNew  border-2 border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-10 lg:h-10">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2385 0.878174V2.69829C14.1916 3.18474 16.992 6.7791 16.5057 10.7329C16.0914 14.0124 13.5162 16.6163 10.2385 17.0027V18.8053C15.1911 18.3094 18.7928 13.9137 18.2977 8.95869C17.8925 4.67927 14.4976 1.30112 10.2385 0.878174ZM8.43761 0.905184C6.68171 1.07679 5.00684 1.75243 3.63805 2.88749L4.9258 4.21982C5.93423 3.40906 7.14986 2.88749 8.43761 2.70642V0.905184ZM2.3684 4.15767C1.24327 5.52514 0.550496 7.19665 0.378418 8.95869H2.1793C2.35043 7.67905 2.85465 6.46291 3.65615 5.44542L2.3684 4.15767ZM0.387466 10.7599C0.567513 12.526 1.26083 14.1921 2.37745 15.5623L3.65615 14.2732C2.86086 13.2557 2.35394 12.0422 2.18835 10.7599H0.387466ZM4.9258 15.5974L3.63805 16.8324C5.00225 17.9688 6.67212 18.6769 8.43761 18.8674V17.0662C7.15647 16.9 5.94355 16.3933 4.9258 15.5974ZM9.7883 5.35486V10.0843L13.8404 12.4895L13.165 13.5975L8.43761 10.7599V5.35486H9.7883Z"
                          fill="#7D7D7D"
                        />
                      </svg>
                    </span>
                    <div className="block">
                      <h4 className="text-[19px] font-medium text-ry4Text">
                        Staying Progress
                      </h4>
                    </div>
                  </a>
                </li>
              </ol>
            </div>
          </div>
          <div className="w-[98%] md:w-[90%] mx-auto py-1">
            <div className="flex justify-between py-2">
              <p className="text-primary text-[15px] font-normal">
                Shift 2{" "}
                <span className="text-ry3Text">(08:00am - 03:00pm)</span>
              </p>
              <p className="text-mainBlack text-[18px] font-normal">200 |QD</p>
            </div>
            <div>
              <ol className="overflow-hidden space-y-16">
                <li className="relative flex-1 after:content-['']  after:w-[2px] after:h-52  after:bg-borderColor after:inline-block after:absolute after:-bottom-15 after:left-4 lg:after:left-5">
                  <a
                    href="#"
                    className="flex items-center font-medium w-full  "
                  >
                    <span className="w-8 h-8 bg-bgNew border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2385 0.878174V2.69829C14.1916 3.18474 16.992 6.7791 16.5057 10.7329C16.0914 14.0124 13.5162 16.6163 10.2385 17.0027V18.8053C15.1911 18.3094 18.7928 13.9137 18.2977 8.95869C17.8925 4.67927 14.4976 1.30112 10.2385 0.878174ZM8.43761 0.905184C6.68171 1.07679 5.00684 1.75243 3.63805 2.88749L4.9258 4.21982C5.93423 3.40906 7.14986 2.88749 8.43761 2.70642V0.905184ZM2.3684 4.15767C1.24327 5.52514 0.550496 7.19665 0.378418 8.95869H2.1793C2.35043 7.67905 2.85465 6.46291 3.65615 5.44542L2.3684 4.15767ZM0.387466 10.7599C0.567513 12.526 1.26083 14.1921 2.37745 15.5623L3.65615 14.2732C2.86086 13.2557 2.35394 12.0422 2.18835 10.7599H0.387466ZM4.9258 15.5974L3.63805 16.8324C5.00225 17.9688 6.67212 18.6769 8.43761 18.8674V17.0662C7.15647 16.9 5.94355 16.3933 4.9258 15.5974ZM9.7883 5.35486V10.0843L13.8404 12.4895L13.165 13.5975L8.43761 10.7599V5.35486H9.7883Z"
                          fill="#7D7D7D"
                        />
                      </svg>
                    </span>
                    <div className="block">
                      <h4 className="text-[19px] font-medium text-ry4Text">
                        Date Confirmation
                      </h4>
                    </div>
                  </a>
                </li>
                <li className="relative flex-1 ">
                  <a className="flex items-center font-medium w-full  ">
                    <span className="w-8 h-8 bg-bgNew  border-2 border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-10 lg:h-10">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2385 0.878174V2.69829C14.1916 3.18474 16.992 6.7791 16.5057 10.7329C16.0914 14.0124 13.5162 16.6163 10.2385 17.0027V18.8053C15.1911 18.3094 18.7928 13.9137 18.2977 8.95869C17.8925 4.67927 14.4976 1.30112 10.2385 0.878174ZM8.43761 0.905184C6.68171 1.07679 5.00684 1.75243 3.63805 2.88749L4.9258 4.21982C5.93423 3.40906 7.14986 2.88749 8.43761 2.70642V0.905184ZM2.3684 4.15767C1.24327 5.52514 0.550496 7.19665 0.378418 8.95869H2.1793C2.35043 7.67905 2.85465 6.46291 3.65615 5.44542L2.3684 4.15767ZM0.387466 10.7599C0.567513 12.526 1.26083 14.1921 2.37745 15.5623L3.65615 14.2732C2.86086 13.2557 2.35394 12.0422 2.18835 10.7599H0.387466ZM4.9258 15.5974L3.63805 16.8324C5.00225 17.9688 6.67212 18.6769 8.43761 18.8674V17.0662C7.15647 16.9 5.94355 16.3933 4.9258 15.5974ZM9.7883 5.35486V10.0843L13.8404 12.4895L13.165 13.5975L8.43761 10.7599V5.35486H9.7883Z"
                          fill="#7D7D7D"
                        />
                      </svg>
                    </span>
                    <div className="block">
                      <h4 className="text-[19px] font-medium text-ry4Text">
                        Staying Progress
                      </h4>
                    </div>
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(MoreDetails);
