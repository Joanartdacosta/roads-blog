import InfoBullets from "./InfoBullets";
import GeneralValues from "./GeneralValues";
import GENERAL_SUBTITLES from "@/components/enums/general_subtitle";

export default function GeneralSection() {
  return (
    <div>
      <div
        id="fullWidthTabContent"
        class="border-t border-gray-200 dark:border-gray-600"
      >
        <div className="flex justify-center">
          <GeneralValues
            value={"12 KM"}
            subtitle={GENERAL_SUBTITLES.distance}
          />
          <GeneralValues value={"4/5"} subtitle={GENERAL_SUBTITLES.duration} />
          <GeneralValues
            value={"3.5"}
            subtitle={GENERAL_SUBTITLES.difficulty}
          />
          <GeneralValues value={"4+"} subtitle={GENERAL_SUBTITLES.evaluation} />
        </div>
      </div>
      <InfoBullets />
    </div>
  );
}
