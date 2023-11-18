import ButtonOptionLeft from "../../common/UI/button/ButtonOptionLeft";
import ButtonOptionMid from "../../common/UI/button/ButtonOptionMiddle";
import ButtonOptionRight from "../../common/UI/button/ButtonOptionRight";
import Calendar from "./calendar/Calendar";
import FairCard from "@/components/dashboard/fairs/fairs_card/FairCard";
import FAIRS from "@/components/lists/fairs";
import { useEffect, useState } from "react";

export default function MenuOptions(props) {
  const [regions, setRegions] = useState(null);
  useEffect(() => {
    setRegions(FAIRS);
  }, []);

  function handleRegions(event) {
    const regionFair = event.target.value;

    const filtered = FAIRS.filter((fair) =>
      fair.region.toLowerCase().includes(regionFair.toLowerCase())
    );

    if (regionFair === "Todos") {
      return setRegions(FAIRS);
    }

    regionFair !== "Todos" ? setRegions(FAIRS) : setRegions(filtered);
    setRegions(filtered);
  }

  return (
    <div className="">
      <div className="flex justify-center pb-20">
        <ButtonOptionLeft
          key={props.id}
          label={"Todos"}
          onClick={handleRegions}
          value="Todos"
        />

        <ButtonOptionMid
          key={props.id}
          label={"Norte"}
          onClick={handleRegions}
          value="Norte"
        />

        <ButtonOptionMid
          key={props.id}
          label={"Centro e Beira Interior"}
          onClick={handleRegions}
          value="Centro e Beira Interior"
        />

        <ButtonOptionMid
          key={props.id}
          label={"Sul"}
          onClick={handleRegions}
          value="Sul"
        />

        <ButtonOptionRight
          key={props.id}
          label={"Arquipélagos dos Açores e Madeira"}
          onClick={handleRegions}
          value="Arquipélagos dos Açores e Madeira"
        />
      </div>
      <div className="flex">
        <div className="w-full">
          <p className="pb-10 text-xl font-bold">Lista de Eventos</p>
          {regions &&
            regions.map((fair) => {
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
          <Calendar />
        </div>
      </div>
    </div>
  );
}
