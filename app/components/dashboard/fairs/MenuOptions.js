import FairCard from "@/components/dashboard/fairs/UI/fairs_card/FairCard";
import FAIRS from "@/components/lists/fairs";

import { useEffect, useState } from "react";
import Calendar from "@/components/dashboard/fairs/UI/calendar/Calendar";
import ButtonOptionLeft from "../../common/UI/button/ButtonOptionLeft";
import ButtonOptionMid from "../../common/UI/button/ButtonOptionMiddle";
import ButtonOptionRight from "../../common/UI/button/ButtonOptionRight";

export default function MenuOptions(props) {
  const [regions, setRegions] = useState(null);
  useEffect(() => {
    setRegions(FAIRS);
  }, []);

  function handleRegions(event) {
    const regionFair = event.target.getAttribute("value");

    console.log(regionFair);
    console.log("hello");
    const filtered = FAIRS.filter((fair) =>
      fair.region.toLocaleLowerCase().includes(regionFair)
    );
    console.log(filtered);
    regionFair !== "Todos" ? setRegions(FAIRS) : setRegions(filtered);
    setRegions(filtered);
  }

  return (
    <div className="">
      <div className="flex justify-center pb-20">
        <ButtonOptionLeft
          key={props.id}
          value="Todos"
          onClick={handleRegions}
          label={"Todos"}
        />

        <ButtonOptionMid
          key={props.id}
          value="Norte"
          onClick={handleRegions}
          label={"Norte"}
        />

        <ButtonOptionMid
          key={props.id}
          value="Centro e Beira Interior"
          onClick={handleRegions}
          label={"Centro e Beira Interior"}
        />

        <ButtonOptionMid
          key={props.id}
          value="Sul"
          onClick={handleRegions}
          label={"Sul"}
        />

        <ButtonOptionRight
          value="Arquipélagos dos Açores e Madeira"
          key={props.id}
          onClick={handleRegions}
          label={"Arquipélagos dos Açores e Madeira"}
        />
      </div>
      <div className="flex wrap">
        <div className="wrap">
          <p className="pb-10 text-xl font-bold">Lista de Eventos</p>
          {regions &&
            regions.map((fair) => {
              return (
                <div>
                  <FairCard
                    key={fair.id}
                    title={fair.title}
                    month={fair.month}
                    region={fair.region}
                    district={fair.district}
                    town2={fair.town2}
                    imgURL={fair.imgURL}
                    description={fair.description}
                    paragraph1={fair.paragraph1}
                    paragraph2={fair.paragraph2}
                    paragraph3={fair.paragraph3}
                    paragraph4={fair.paragraph4}
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
