import CardInfo from "@/components/common/UI/cards/card_info/CardInfo";
import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import PROVERBS from "@/components/lists/proverbs";

export default function Proverbs() {
  return (
    <div className="m-auto justify-items-center">
      <div className="max-w-5xl m-auto pt-20 pb-20 w-max">
        <CardInfo array={PROVERBS} />
      </div>
    </div>
  );
}
