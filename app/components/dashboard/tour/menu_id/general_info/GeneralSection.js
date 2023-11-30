import InfoBullets from "./InfoBullets";
import GeneralValues from "./GeneralValues";

export default function GeneralSection(props) {
  const ARRAY = [];

  for (let i = 0; i < props.array.length; i++) {
    ARRAY.push(props.images[i]);
  }

  return (
    <div
      id="fullWidthTabContent"
      class="border-t border-gray-200 dark:border-gray-600"
    >
      {Array.map((item) => {
        return (
          <div>
            <div className="flex justify-center">
              <GeneralValues value={item.distance} subtitle={"Distancia"} />
              <GeneralValues value={item.days} subtitle={"Duracao (dias)"} />
              <GeneralValues value={item.difficulty} subtitle={"Dificuldade"} />
              <GeneralValues value={item.evaluation} subtitle={"Avaliacao"} />
            </div>
            <div>
              <InfoBullets p1={item.p1} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
