// import "react-date-range/dist/styles.css"; // main css file
// import "react-date-range/dist/theme/default.css"; // theme css file
// import { DateRange } from "react-date-range";
// import { useState } from "react";

// export default function Calendar() {
//   const [state, setState] = useState([
//     {
//       endDate: null,
//       key: "selection",
//       startDate: new Date(),
//     },
//   ]);

//   {data
//     .filter(row => {
//       let filterPass = true
//       const date = new Date(row.dateYouWannaFilterWith)
//       if (dateFilter.startDate) {
//         filterPass = filterPass && (new Date(dateFilter.startDate) < date)
//       }
//       if (dateFilter.endDate) {
//         filterPass = filterPass && (new Date(dateFilter.endDate) > date)
//       }
//       //if filterPass comes back `false` the row is filtered out
//       return filterPass
//     })

//   return (
//     <div>
//       <DateRange
//         editableDateInputs={true}
//         moveRangeOnFirstSelection={false}
//         onChange={(item) => setState([item.selection])}
//         ranges={state}
//       />
//       ;
//     </div>
//   );
// }

import { useEffect, useState } from "react";
// import axios from "axios";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function Calendar() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // useEffect(() => {

  //     .get("https://63bb90b3cf99234bfa5e3b48.mockapi.io/Products")
  //     .then((response) => {
  //       setProducts(response.data);
  //       setAllProducts(response.data);
  //     });
  // }, []);

  const handleSelect = (date) => {
    let filtered = allProducts.filter((product) => {
      let productDate = new Date(product["createdAt"]);
      return (
        productDate >= date.selection.startDate &&
        productDate <= date.selection.endDate
      );
    });
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    setProducts(filtered);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  return (
    <div className="App">
      <header className="App-header">
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              let date = new Date(product["createdAt"]);
              return (
                <tr>
                  <td>{product["id"]}</td>
                  <td>{product["name"]}</td>
                  <td>{date.toLocaleDateString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </header>
    </div>
  );
}
