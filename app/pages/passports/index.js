import CardStars from "@/components/common/UI/cards/card_stars/CardStars";
import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import NAVBAR_LINKS from "@/components/lists/navbar_links_map";
import { getFeaturedPassports } from "@/helpers/api-util";

export default function Passports(props) {
  return (
    <div>
      <GeneralBanner
        section={NAVBAR_LINKS["passports"]["section"]}
        imgUrl={NAVBAR_LINKS["passports"]["imgUrl"]}
        description={NAVBAR_LINKS["passports"]["description"]}
      />
      <div className="roboto max-w-5xl m-auto pt-20 pb-20">
        <CardStars array={props.passports} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const featuredPassports = await getFeaturedPassports();

  return {
    props: {
      passports: featuredPassports,
    },
    revalidate: 1800,
  };
}
