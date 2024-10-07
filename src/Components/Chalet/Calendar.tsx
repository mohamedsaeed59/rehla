import rightArrow from "../../assets/icons/right-arrow.svg";

export default function Calendar() {
  return (
    <div className="">
      <div className="flex flex-wrap md:flex-nowrap items-center gap-8">
        <div className="flex flex-col gap-5 w-full md:w-[70%]">
          <div
            className="bg-bgNew flex flex-col justify-center gap-1 
           rounded-tl-[40px] rounded-tr-[40px]
          items-center h-[107px]"
          >
            <div className="border shadow-sm rounded-xl py-2 px-5">
              <span className="font-normal text-[17px]">2024</span>
            </div>
            <div className="font-medium text-lg cursor-pointer text-mainBlack flex justify-center gap-1 items-center ">
              Septemper
              <img
                src={rightArrow}
                alt="rightArrow"
                className="w-4 h-4 rotate-[90deg] mt-2"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            <div className="w-[75px] h-[95px] border rounded-3xl flex justify-center items-center flex-col">
              <span className="text-ry3Text">Thu</span>
              <span className="text-ry3Text">29</span>
            </div>
            <div className="w-[75px] h-[95px] border rounded-3xl flex justify-center items-center flex-col">
              <span className="text-ry3Text">Thu</span>
              <span className="text-ry3Text">29</span>
            </div>
            <div className="w-[75px] h-[95px] border rounded-3xl flex justify-center items-center flex-col">
              <span className="text-ry3Text">Thu</span>
              <span className="text-ry3Text">29</span>
            </div>
          </div>
        </div>
        <div>
            <h3 className="font-medium text-[17px] text-mainBlack">Available Shifts</h3>
           <p className="text-mainBlack font-normal text-xs">18/09/2024</p>
        </div>
      </div>
    </div>
  );
}
