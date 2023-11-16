import CardInfo from "@/components/common/UI/cards/card_info/CardInfo";
import { getFeaturedProverbs } from "@/helpers/api-util";

export default function Proverbs(props) {
  return (
    <div className="m-auto justify-items-center">
      <div className="max-w-5xl m-auto pt-20 pb-20 w-max">
        <CardInfo array={props.proverbs} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const featuredProverbs = await getFeaturedProverbs();

  return {
    props: {
      proverbs: featuredProverbs,
    },
    revalidate: 1800,
  };
}
