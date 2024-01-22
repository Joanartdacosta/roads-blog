import Classification from "@/components/common/menu_id/classification/Classification";
import GeneralValues from "@/components/common/menu_id/general_info/GeneralValues";
import GENERAL_SUBTITLES from "@/components/enums/general_subtitle";
import Introduction from "./Introduction";

export default function GeneralSection(props) {
  return (
    <div>
      <Introduction title={props.title} introduction={props.introduction} />
      <div
        id="fullWidthTabContent"
        className="border-t border-gray-200 dark:border-gray-600"
      >
        <div className="flex justify-center">
          {props.distance ? (
            <GeneralValues
              value={props.distance}
              subtitle={GENERAL_SUBTITLES.distance}
            />
          ) : (
            ""
          )}

          {props.duration ? (
            <GeneralValues
              value={props.duration}
              subtitle={GENERAL_SUBTITLES.duration}
            />
          ) : (
            ""
          )}

          {props.difficulty ? (
            <GeneralValues
              value={props.difficulty}
              subtitle={GENERAL_SUBTITLES.difficulty}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <Classification
        label={props.label}
        percentageAcessibility={props.percentageAcessibility}
        percentageDifficulty={props.percentageDifficulty}
        percentageEmergency={props.percentageEmergency}
        percentageNature={props.percentageNature}
        percentageSafety={props.percentageSafety}
        percentageShadow={props.percentageShadow}
        percentageSupport={props.percentageSupport}
      />
    </div>
  );
}
