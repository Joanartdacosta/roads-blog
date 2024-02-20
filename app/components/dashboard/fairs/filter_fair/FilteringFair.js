import Calendar from "../calendar/Calendar";
import FairCard from "@/components/dashboard/fairs/fairs_card/FairCard";
import Regions from "../regions/FairsRegions";
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

  function filterFairsByRegions(region, fairs) {
    return fairs.filter((fair) =>
      fair.region.toLowerCase().includes(region.toLowerCase())
    );
  }

  function filterFairsByDate(startDate, endDate, fairs) {
    return fairs.filter((fair) => {
      if (fair.endDate < startDate) {
        return false;
      } else if (fair.startDate > endDate) {
        return false;
      } else {
        return true;
      }
    });
  }

  return (
    <div>
      <Regions filterFairs={filterFairs} setRegion={setRegion} />

      <div className="flex pt-16">
        <div className="w-full">
          <p className="pb-10 text-xl font-bold ">Lista de Eventos</p>

          <div className="p-4 bg-gray-100 text-xs ">
            <h1 className="text-lg pb-2 text-center">Resultados</h1>
            <p className="text-sm italic underline">Datas: </p>
            <p>
              De {startDate.toLocaleDateString()} - a{" "}
              {endDate.toLocaleDateString()}
            </p>

            <p className="text-sm italic underline">Regiao:</p>
            <p> {region} </p>
          </div>

          <p className="text-sm pb-8 pt-8">
            Por favor seleccione um intervalo de datas no calendário.
          </p>
          <div>
            {current ? (
              allfairs.map((fair) => {
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

        <div className="pl-20">
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
