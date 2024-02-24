import Calendar from "@/components/dashboard/fairs/calendar/Calendar";
import FairCard from "@/components/dashboard/fairs/fairs_card/FairCard";
import FAIRS from "@/components/lists/fairs";
import { useState, useEffect } from "react";
import Regions from "@/components/dashboard/fairs/regions/FairsRegions";

export default function FilteringFairByDateAndRegion() {
  const [region, setRegion] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [allfairs, setFairs] = useState(FAIRS);

  useEffect(() => {
    filterFairs();
  }, [region, startDate, endDate]);

  function filterFairs() {
    let filteredFairs = FAIRS;

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
      <h1 className="text-sm pb-8 pt-8 display text-center">
        Por favor seleccione um intervalo de datas e uma regiao no calendário.
      </h1>
      <Regions filterFairs={filterFairs} setRegion={setRegion} />

      <div className="flex pt-16">
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
            {allfairs.length ? (
              allfairs.map((fair) => {
                return (
                  <div className="w-full">
                    <FairCard
                      description={fair.description}
                      district={fair.district}
                      imgURL={fair.imgURL}
                      key={fair.id}
                      month={fair.month}
                      paragraph1={fair.paragraph1}
                      paragraph2={fair.paragraph2}
                      paragraph3={fair.paragraph3}
                      paragraph4={fair.paragraph4}
                      region={fair.region}
                      title={fair.title}
                      town2={fair.town2}
                    />
                  </div>
                );
              })
            ) : (
              <p>Não existem feiras nos filtros seleccionados.</p>
            )}
          </div>
        </div>

        <div className="m-auto pl-4 responsive-calendar">
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
