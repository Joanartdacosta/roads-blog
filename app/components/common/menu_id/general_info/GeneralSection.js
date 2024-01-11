import Classification from "@/components/common/menu_id/classification/Classification";
import GeneralValues from "@/components/common/menu_id/general_info/GeneralValues";
import GENERAL_SUBTITLES from "@/components/enums/general_subtitle";

export default function GeneralSection(props) {
  return (
    <div>
      <div
        id="fullWidthTabContent"
        className="border-t border-gray-200 dark:border-gray-600"
      >
        <div className="flex justify-center">
          {props.distance ? (
            <GeneralValues
              value={props.distance}
              subtitle={GENERAL_SUBTITLES.distance}
              id={props.id}
            />
          ) : (
            <div className="flex flex-col items-center justify-center">
              <p className="mb-2 text-3xl font-extrabold">N/A</p>
            </div>
          )}

          {props.duration ? (
            <GeneralValues
              value={props.duration}
              subtitle={GENERAL_SUBTITLES.duration}
            />
          ) : (
            <div className="flex flex-col items-center justify-center">
              <p className="mb-2 text-3xl font-extrabold"></p>
            </div>
          )}

          {props.difficulty ? (
            <GeneralValues
              value={props.difficulty}
              subtitle={GENERAL_SUBTITLES.difficulty}
            />
          ) : (
            <div className="flex flex-col items-center justify-center">
              <p className="mb-2 text-3xl font-extrabold"></p>
            </div>
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
