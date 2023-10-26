import CardInfo from "@/components/UI/cards/card_info/CardInfo";
import PROVERBS from "../../components/lists/proverbs";

export default function Proverbs() {
  return (
    <div>
      <h1>PROVERBIOS</h1>
      <CardInfo array={PROVERBS} />
    </div>
  );
}
