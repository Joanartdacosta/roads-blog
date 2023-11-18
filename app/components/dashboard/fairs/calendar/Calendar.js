import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { useState } from "react";

export default function Calendar() {
  const [state, setState] = useState([
    {
      endDate: null,
      key: "selection",
      startDate: new Date(),
    },
  ]);

  return (
    <div>
      <DateRange
        editableDateInputs={true}
        moveRangeOnFirstSelection={false}
        onChange={(item) => setState([item.selection])}
        ranges={state}
      />
      ;
    </div>
  );
}
