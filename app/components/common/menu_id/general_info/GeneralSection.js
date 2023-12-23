import Classification from "@/components/common/menu_id/classification/Classification";
import InfoBullets from "@/components/common/menu_id/general_info/InfoBullets";
import GeneralValues from "@/components/common/menu_id/general_info/GeneralValues";
import GENERAL_SUBTITLES from "@/components/enums/general_subtitle";

export default function GeneralSection(props) {
  return (
    <div>
      <div
        id="fullWidthTabContent"
        class="border-t border-gray-200 dark:border-gray-600"
      >
        <div className="flex justify-center">
          <GeneralValues
            value={props.distance}
            subtitle={GENERAL_SUBTITLES.distance}
            id={props.id}
          />
          <GeneralValues
            value={props.duration}
            subtitle={GENERAL_SUBTITLES.duration}
          />
          <GeneralValues
            value={props.difficulty}
            subtitle={GENERAL_SUBTITLES.difficulty}
          />
        </div>
      </div>
      <Classification label={props.label} evaluation={props.evaluation} />
      <InfoBullets
        description={props.description}
        bullet1={props.bullet1}
        bullet2={props.bullet2}
        bullet3={props.bullet3}
      />
    </div>
  );
}
