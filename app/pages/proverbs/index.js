import CardProverb from "@/components/common/UI/cards/card_info/CardProverb";
import { getFeaturedProverbs } from "@/helpers/api-util";
import { RevealWrapper } from "next-reveal";

export default function Proverbs(props) {
  return (
    <div className="roboto m-auto justify-items-center">
      <div className="max-w-5xl m-auto pt-20 pb-20 w-max">
        <RevealWrapper>
          <CardProverb array={props.proverbs} />
        </RevealWrapper>
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
