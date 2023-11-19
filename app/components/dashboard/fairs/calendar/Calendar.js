import { DateRangePicker, DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function Calendar({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) {
  function handleSelect(date) {
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <div>
      <DateRange ranges={[selectionRange]} onChange={handleSelect} />
    </div>
  );
}
