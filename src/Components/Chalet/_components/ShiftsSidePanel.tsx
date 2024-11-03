import { useState } from "react";

interface Shift {
  id: number;
  time_from: string;
  time_to: string;
  price: number;
}

interface ShiftsSidePanelProps {
  shifts: Shift[];
  selectedDate: any;
  have_shifts: any;
  setSelectedShifts: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function ShiftsSidePanel({
  shifts,
  selectedDate,
  have_shifts,
  setSelectedShifts,
}: ShiftsSidePanelProps) {
  const [selectedShiftIds, setSelectedShiftIds] = useState<number[]>([]);
  const [errShiftMessage, setErrShiftMessage] = useState<boolean>(false);

  const handleShiftClick = (id: number, index: number) => {
    const newSelectedShiftIds = selectedShiftIds.includes(id)
      ? selectedShiftIds.filter((shiftId) => shiftId !== id)
      : [...selectedShiftIds, id];

    // Sort selected shift ids by index to check for valid patterns
    const sortedIndexes = newSelectedShiftIds
      .map((shiftId) => shifts.findIndex((shift) => shift.id === shiftId))
      .sort((a, b) => a - b);

    // Only validate if there are two or more selected shifts
    if (sortedIndexes.length > 1) {
      const isValidSelection =
        sortedIndexes.length === 3 || // All three shifts are selected
        (sortedIndexes.length === 2 && sortedIndexes[1] - sortedIndexes[0] === 1); // Adjacent shifts only

      if (isValidSelection) {
        setSelectedShiftIds(newSelectedShiftIds);
        setErrShiftMessage(false);
        setSelectedShifts(newSelectedShiftIds); // Update selected shifts state with ids
      } else {
        setErrShiftMessage(true);
      }
    } else {
      // No validation needed for a single selected shift
      setSelectedShiftIds(newSelectedShiftIds);
      setSelectedShifts(newSelectedShiftIds); // Update selected shifts state with ids
    }
  };

  return (
    <>
      {selectedDate !== null && (
        <div>
          <h3 className="font-medium text-[17px] text-mainBlack">
            {have_shifts && "Available Shifts"}
          </h3>
          <p className="text-mainBlack font-normal text-xs py-3">
            {have_shifts && (selectedDate || "You should choose a day to display the shifts")}
          </p>

          <div className="grid grid-cols-3 gap-4">
            {shifts?.map((shift, index) => (
              <div key={shift.id} className="relative">
                <div
                  onClick={() => handleShiftClick(shift.id, index)}
                  className={`p-2 border border-mainBlack rounded-xl ${
                    selectedShiftIds.includes(shift.id) ? "activePayment" : ""
                  }`}
                >
                  <h4 className="font-medium mb-2">Shift {shift.id}</h4>
                  <p className="text-sm text-gray-600 mb-2">{shift?.time_from}</p>
                  <p className="text-sm text-gray-600 mb-2">{shift?.time_to}</p>
                  <p className="font-bold">{shift.price} IQD</p>
                </div>
              </div>
            ))}
          </div>
          {!!errShiftMessage && (
            <p className="text-red font-normal text-xs mt-4">
              You can't select non-adjacent shifts
            </p>
          )}
        </div>
      )}
    </>
  );
}
