import { useTranslation } from "react-i18next";
import DayCell from "./DayCell";

interface DayData {
  date: number | null;
  state: "available" | "crowded" | "not_available";
  isSelected: boolean;
}

interface DaysGridProps {
  calendarData: (DayData | null)[];
  onDayClick: (index: number) => void;
  have_shifts: boolean;
}

export default function DaysGrid({ calendarData, onDayClick}: DaysGridProps) {
  const { t } = useTranslation();

  const daysOfWeek = [t("Sun"), t("Mon"), t("Tue"), t("Wed"), t("Thu"), t("Fri"), t("Sat")];

  return (
    <div className="flex justify-center flex-wrap gap-2">
      {calendarData.map((day, index) =>
        day ? (
          <DayCell
            key={index}
            date={day.date as number}
            dayOfWeek={daysOfWeek[index % 7]}
            state={day.state}
            isSelected={day.isSelected}
            onClick={() => onDayClick(index)}
          />
        ) : (
          <div key={index} className="w-[76px] h-[93px]"></div> // Empty cell for padding
        )
      )}
    </div>
  );
}
