import ButtonOptionLeft from "../../../common/UI/button/ButtonOptionLeft";
import ButtonOptionMid from "../../../common/UI/button/ButtonOptionMiddle";
import ButtonOptionRight from "../../../common/UI/button/ButtonOptionRight";
import REGIONS_LABELS from "@/components/enums/regions_labels";

export default function FairsRegions({ setRegion }) {
  function handleRegions(event) {
    setRegion(event.target.value);
  }

  return (
    <div className="">
      <div className="flex justify-center pb-20">
        <ButtonOptionLeft
          key={"1"}
          label={REGIONS_LABELS.all}
          onClick={handleRegions}
          value={null}
        />

        <ButtonOptionMid
          key={"2"}
          label={REGIONS_LABELS.north}
          onClick={handleRegions}
          value="Norte"
        />

        <ButtonOptionMid
          key={"3"}
          label={REGIONS_LABELS.center}
          onClick={handleRegions}
          value="Centro e Beira Interior"
        />

        <ButtonOptionMid
          key={"4"}
          label={REGIONS_LABELS.south}
          onClick={handleRegions}
          value="Sul"
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
