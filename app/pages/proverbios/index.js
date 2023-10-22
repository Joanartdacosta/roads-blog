import CardInfo from "@/components/UI/cards/card_info/CardInfo";
import PROVERBIOS from "../../components/lists/proverbios";

export default function Sobre() {
  return (
    <>
      <div id={"#sobre"}>
        <h1>PROVERBIOS</h1>
        <CardInfo array={PROVERBIOS} />
      </div>
    </>
  );
}
