import InfoBullets from "./InfoBullets";
import GeneralValues from "./GeneralValues";
import GENERAL_SUBTITLES from "@/components/enums/general_subtitle";

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
              <GeneralValues
                value={item.distance}
                subtitle={GENERAL_SUBTITLES.distance}
              />
              <GeneralValues
                value={item.days}
                subtitle={GENERAL_SUBTITLES.duration}
              />
              <GeneralValues
                value={item.difficulty}
                subtitle={GENERAL_SUBTITLES.difficulty}
              />
              <GeneralValues
                value={item.evaluation}
                subtitle={GENERAL_SUBTITLES.evaluation}
              />
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
