import Calendar from "@/components/dashboard/fairs/calendar/Calendar";
import FairCard from "@/components/dashboard/fairs/fairs_card/FairCard";
import Regions from "@/components/dashboard/fairs/regions/FairsRegions";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function FilteringFairByDateAndRegion() {
  let current = useSelector((state) => state.fair.allFairs);

  const [region, setRegion] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [allfairs, setFairs] = useState(current);

  useEffect(() => {
    filterFairs();
  }, [region, startDate, endDate]);

  function filterFairs() {
    let filteredFairs = current;

    if (region) {
      filteredFairs = filterFairsByRegions(region, filteredFairs);
    }

    if (startDate && endDate) {
      filteredFairs = filterFairsByDate(startDate, endDate, filteredFairs);
    }

    setFairs(filteredFairs);
  }

  function filterFairsByRegions(region, current) {
    return current.filter((fair) =>
      fair.region.toLowerCase().includes(region.toLowerCase())
    );
  }

  function filterFairsByDate(startDate, endDate, current) {
    return current.filter((fair) => {
      const dateObjStartDate = new Date(startDate);
      const dateObjEndDate = new Date(endDate);
      const dateObjFairStartDate = new Date(fair.date.endDate);
      const dateObjFairEndDate = new Date(fair.date.startDate);

      if (dateObjFairEndDate < dateObjStartDate) {
        return false;
      } else if (dateObjFairStartDate > dateObjEndDate) {
        return false;
      } else {
        return true;
      }
    });
  }

  const orderFairs = allfairs.slice().sort((a, b) => {
    return new Date(a.date.startDate) - new Date(b.date.startDate);
  });

  return (
    <div>
      <h1 className="text-sm pb-8 pt-8 display text-center m-auto ">
        Por favor seleccione um intervalo de datas e uma regiao no calendário.
      </h1>
      <Regions
        filterFairs={filterFairs}
        setRegion={setRegion}
        setFairs={setFairs}
      />

      <div className="flex responsive-flex responsive-margin">
        <div className="w-full">
          <div className="p-4 bg-gray-100 text-xs ">
            <h1 className="text-lg pb-2 text-center">Filtro seleccionado</h1>
            <p className="text-sm italic underline">Datas: </p>
            <p>
              De {startDate.toLocaleDateString()} - a{" "}
              {endDate.toLocaleDateString()}
            </p>

            <p className="text-sm italic underline">Regiao:</p>
            <p> {region} </p>
          </div>

          <p className="pt-10 pb-4 text-xl font-bold ">Lista de Eventos</p>

          <div>
            {current ? (
              orderFairs.map((fair) => {
                return (
                  <div className="w-full" key={fair._id}>
                    <FairCard fair={fair} />
                  </div>
                );
              })
            ) : (
              <p>Não existem feiras nos filtros seleccionados.</p>
            )}
          </div>
        </div>

        <div className="pl-4 responsive-calendar">
          <Calendar
            filterFairs={filterFairs}
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        </div>
      </div>
    </div>
  );
}
