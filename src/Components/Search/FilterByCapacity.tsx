import { useState } from "react";
import Group from "../../assets/icons/Group.svg";
import { Range, getTrackBackground } from "react-range";

export default function FilterByCapacity() {
  const [values, setValues] = useState([5, 10]);
  const MIN = 1;
  const MAX = 50;
  return (
    <div
      className="absolute top-9 w-[260px] rounded-3xl z-20 rtl:left-0
         ltr:right-0 bg-white shadow-lg p-5"
    >
      <div>
        <div className="flex items-center gap-1">
          <img src={Group} alt="Group" className="w-4 h-4" />
          <h3 className="text-lg font-semibold text-mainBlack">Capacity</h3>
        </div>
        <div className="py-4">
          <div className="flex flex-col items-center">
          <div className="flex justify-between w-full my-4 text-sm">
              <span>{MIN}</span>
              <span>{MAX}</span>
            </div>
            <Range
              step={1}
              min={MIN}
              max={MAX}
              values={values}
              onChange={(values) => setValues(values)}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  className="w-full h-2 rounded-md"
                  style={{
                    background: getTrackBackground({
                      values,
                      colors: ["#ddd", "#facc15", "#ddd"], 
                      min: MIN,
                      max: MAX,
                    }),
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props, index }) => (
                <div
                  {...props}
                  className="w-4 h-4 bg-white border border-gray-300 rounded-full shadow-md"
                >
                  <div className="text-center text-xs">{values[index]}</div>
                </div>
              )}
            />
          </div>
        </div>
        <div className="flex justify-center items-center my-2">
          <div className="w-[204px] rounded-3xl p-2 text-center focus:outline-none text-base font-bold bg-mainBlack text-white">
            Confirm
          </div>
        </div>
      </div>
    </div>
  );
}
