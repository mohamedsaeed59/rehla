import close from "../../../assets/icons/close.svg"

type DayState = "available" | "partial" | "unavailable";

interface DayCellProps {
  date: number;
  dayOfWeek: string;
  state: DayState;
  isSelected: boolean;
  onClick: () => void;
}

function DayCell({
  date,
  dayOfWeek,
  state,
  isSelected,
  onClick,
}: DayCellProps) {
  const getDayClass = () => {
    let className =
      "flex flex-col items-center justify-center w-[76px] h-[93px] rounded-xl border ";
    if (state === "available") className += "bg-white";
    if (state === "partial") className += "bg-white border-t-4 addBorder";
    if (state === "unavailable") className += "bg-gray-100 opacity-50";
    return className;
  };

  return (
    <div className="relative">
      <button
        className={getDayClass()}
        onClick={onClick}
        disabled={state === "unavailable"}
      >
        <span className="text-sm font-medium mb-1">{dayOfWeek}</span>
        <span className="text-lg">{date}</span>
        {isSelected && (
          <span className="activePayment">
            <span className="w-3 h-3 text-[#0000]">x</span>
          </span>
        )}
        {state === "unavailable" && (
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500 w-[76px] h-[93px]">
            <img src={close} alt="close" className="w-full h-[93px]"/>
          </span>
        )}
      </button>
    </div>
  );
}

export default DayCell;