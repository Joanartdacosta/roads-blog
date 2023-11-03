import CardInfo from "@/components/common/UI/cards/card_info/CardInfo";
import Banner from "@/components/common/banner/Banner";
import PROVERBS from "@/components/lists/proverbs";

export default function Proverbs() {
  return (
    <div>
      <Banner />
      <div className="max-w-5xl m-auto pt-20 pb-20">
        <CardInfo array={PROVERBS} />
      </div>
    </div>
  );
}
