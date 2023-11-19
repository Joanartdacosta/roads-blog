import Calendar from "../calendar/Calendar";
import FairCard from "@/components/dashboard/fairs/fairs_card/FairCard";
import FAIRS from "@/components/lists/fairs";
import { useState, useEffect } from "react";
import Regions from "../regions/FairsRegions";

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
    // startDate and endDate inside range
    // startDate inside range but endDate outside range
    // starDate outside range but endDate inside range

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

      <div className="flex">
        <div className="w-full">
          <p className="pb-10 text-xl font-bold">Lista de Eventos</p>
          {allfairs &&
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
            })}
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
