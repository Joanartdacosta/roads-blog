import Classification from "@/components/common/menu_id/classification/Classification";
import GeneralValues from "@/components/common/menu_id/general_info/GeneralValues";
import GENERAL_SUBTITLES from "@/components/enums/general_subtitle";
import Introduction from "@/components/common/menu_id/general_info/Introduction";
import { useSelector } from "react-redux";

export default function GeneralSection(props) {
  let current = null;
  if (props.page === "trip") {
    current = useSelector((state) => state.trip.selectedTrip);
  } else if (props.page === "tour") {
    current = useSelector((state) => state.tour.selectedTour);
  }

  return (
    <div>
      <Introduction page={props.page} />
      <div
        id="fullWidthTabContent"
        className="border-t border-gray-200 dark:border-gray-600"
      >
        <div className="flex justify-center">
          {current?.info ? (
            <GeneralValues
              value={current.info.distance}
              subtitle={GENERAL_SUBTITLES.distance}
            />
          ) : (
            ""
          )}

          {current.info ? (
            <GeneralValues
              value={current.info.duration}
              subtitle={GENERAL_SUBTITLES.duration}
            />
          ) : (
            ""
          )}

          {current.info ? (
            <GeneralValues
              value={current.info.difficulty}
              subtitle={GENERAL_SUBTITLES.difficulty}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <Classification page={props.page} />
    </div>
  );
}
