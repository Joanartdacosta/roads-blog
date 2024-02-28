import CardProverb from "@/components/common/UI/cards/card_info/CardProverb";
import { getProverbs } from "@/helpers/api-util";
import { RevealWrapper } from "next-reveal";

export default function Proverbs(props) {
  return (
    <div className="justify-items-center">
      <div className="m-auto w-max">
        <RevealWrapper>
          <CardProverb array={[props.proverbs]} />
        </RevealWrapper>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const featuredProverbs = await getProverbs();

  return {
    props: {
      proverbs: featuredProverbs,
    },
    revalidate: 1800,
  };
}
