import InfoBullets from "./InfoBullets";
import GeneralValues from "./GeneralValues";

export default function GeneralSection() {
  return (
    <div>
      <div
        id="fullWidthTabContent"
        class="border-t border-gray-200 dark:border-gray-600"
      >
        <div className="flex justify-center">
          <GeneralValues value={"12 KM"} subtitle={"Distancia"} />
          <GeneralValues value={"4/5"} subtitle={"Duracao (dias)"} />
          <GeneralValues value={"3.5"} subtitle={"Dificuldade"} />
          <GeneralValues value={"4+"} subtitle={"Avaliacao"} />
        </div>
      </div>
      <InfoBullets />
    </div>
  );
}
