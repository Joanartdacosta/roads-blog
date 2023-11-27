import ButtonOptionLeft from "../../../common/UI/button/ButtonOptionLeft";
import ButtonOptionMid from "../../../common/UI/button/ButtonOptionMiddle";
import ButtonOptionRight from "../../../common/UI/button/ButtonOptionRight";

export default function FairsRegions({ setRegion }) {
  function handleRegions(event) {
    setRegion(event.target.value);
  }

  return (
    <div className="">
      <div className="flex justify-center pb-20">
        <ButtonOptionLeft
          key={"1"}
          label={"Todos"}
          onClick={handleRegions}
          value={null}
        />

        <ButtonOptionMid
          key={"2"}
          label={"Norte"}
          onClick={handleRegions}
          value="Norte"
        />

        <ButtonOptionMid
          key={"3"}
          label={"Centro e Beira Interior"}
          onClick={handleRegions}
          value="Centro e Beira Interior"
        />

        <ButtonOptionMid
          key={"4"}
          label={"Sul"}
          onClick={handleRegions}
          value="Sul"
        />

        <ButtonOptionRight
          key={"5"}
          label={"Arquipélagos dos Açores e Madeira"}
          onClick={handleRegions}
          value="Arquipélagos dos Açores e Madeira"
        />
      </div>
    </div>
  );
}
