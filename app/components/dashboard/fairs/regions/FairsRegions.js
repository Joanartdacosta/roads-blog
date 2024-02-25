import ButtonOptionLeft from "../../../common/UI/button/ButtonOptionLeft";
import ButtonOptionMid from "../../../common/UI/button/ButtonOptionMiddle";
import ButtonOptionRight from "../../../common/UI/button/ButtonOptionRight";
import REGIONS_LABELS from "@/components/enums/regions_labels";
import { useSelector } from "react-redux";

export default function FairsRegions({ setRegion, setFairs }) {
  let current = useSelector((state) => state.fair.allFairs);
  function handleRegions(event) {
    setRegion(event.target.value);
  }

  function showAll() {
    setFairs(current);
  }

  return (
    <div className="m-auto">
      <div className="flex justify-center pb-10">
        <ButtonOptionLeft
          key={"1"}
          label={REGIONS_LABELS.all}
          onClick={showAll}
          value={REGIONS_LABELS.all}
        />

        <ButtonOptionMid
          key={"2"}
          label={REGIONS_LABELS.north}
          onClick={handleRegions}
          value={REGIONS_LABELS.north}
        />

        <ButtonOptionMid
          key={"3"}
          label={REGIONS_LABELS.center}
          onClick={handleRegions}
          value={REGIONS_LABELS.center}
        />

        <ButtonOptionMid
          key={"4"}
          label={REGIONS_LABELS.south}
          onClick={handleRegions}
          value={REGIONS_LABELS.south}
        />

        <ButtonOptionRight
          key={"5"}
          label={REGIONS_LABELS.islands}
          onClick={handleRegions}
          value={REGIONS_LABELS.islands}
        />
      </div>
    </div>
  );
}
