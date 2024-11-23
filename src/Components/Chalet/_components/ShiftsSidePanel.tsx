import { useState } from "react";
import { useTranslation } from "react-i18next";

interface Shift {
  id: number;
  name: string;
  time_from: string;
  time_to: string;
  price: number;
}

interface ShiftsSidePanelProps {
  shifts: Shift[];
  selectedDate: any;
  have_shifts: any;
  setSelectedShifts: React.Dispatch<React.SetStateAction<number[]>>;
  totalShiftPrice: any;
  setTotalShiftPrice: any
}

export default function ShiftsSidePanel({
  shifts,
  selectedDate,
  have_shifts,
  setTotalShiftPrice,
  setSelectedShifts,
}: ShiftsSidePanelProps) {
  const [selectedShiftIds, setSelectedShiftIds] = useState<number[]>([]);
  const [errShiftMessage, setErrShiftMessage] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleShiftClick = (id: number) => {
    const shift = shifts.find((s) => s.id === id);
    if (!shift) return;

    // Update selected shift IDs
    const newSelectedShiftIds = selectedShiftIds.includes(id)
      ? selectedShiftIds.filter((shiftId) => shiftId !== id)
      : [...selectedShiftIds, id];

    // Sort selected shift IDs by index to check for valid patterns
    const sortedIndexes = newSelectedShiftIds
      .map((shiftId) => shifts.findIndex((shift) => shift.id === shiftId))
      .sort((a, b) => a - b);

    // Validation for shift selection pattern
    if (sortedIndexes?.length > 1) {
      const isValidSelection =
        sortedIndexes?.length === 3 || // All three shifts are selected
        (sortedIndexes?.length === 2 && sortedIndexes[1] - sortedIndexes[0] === 1); // Adjacent shifts only

      if (isValidSelection) {
        setSelectedShiftIds(newSelectedShiftIds);
        setErrShiftMessage(false);
        setSelectedShifts(newSelectedShiftIds); // Update selected shifts state with ids
      } else {
        setErrShiftMessage(true);
        return;
      }
    } else {
      setSelectedShiftIds(newSelectedShiftIds);
      setSelectedShifts(newSelectedShiftIds); // Update selected shifts state with ids
    }

    // Calculate total price of selected shifts
    const calculatedTotalPrice = newSelectedShiftIds.reduce(
      (total, shiftId) => {
        const selectedShift = shifts.find((shift) => shift.id === shiftId);
        return total + (Number(selectedShift?.price) || 0);
      },
      0
    );

    setTotalShiftPrice(calculatedTotalPrice); // Update total price state
  };

  return (
    <>
      {selectedDate !== null && (
        <div>
          <h3 className="font-medium text-[17px] text-mainBlack">
            {have_shifts && t("Available Shifts")}
          </h3>
          <p className="text-mainBlack font-normal text-xs py-3">
            {have_shifts && (selectedDate || "You should choose a day to display the shifts")}
          </p>

          <div className="grid grid-cols-3 gap-4">
            {shifts?.map((shift) => (
              <div key={shift.id} className="relative">
                <div
                  onClick={() => handleShiftClick(shift.id)}
                  className={`p-2 border border-mainBlack rounded-xl ${
                    selectedShiftIds.includes(shift.id) ? "activePayment" : ""
                  }`}
                >
                  <h4 className="font-medium mb-2">{shift?.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{shift?.time_from}</p>
                  <p className="text-sm text-gray-600 mb-2">{shift?.time_to}</p>
                  <p className="font-bold">{shift.price} {t("QD")}</p>
                </div>
              </div>
            ))}
          </div>
          {!!errShiftMessage && (
            <p className="text-red font-normal text-xs mt-4">
              {t("You can't select non-adjacent shifts")}
            </p>
          )}
        </div>
      )}
    </>
  );
}
