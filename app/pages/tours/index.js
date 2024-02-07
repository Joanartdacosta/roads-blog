import React from "react";
import CardStars from "@/components/common/UI/cards/card_stars/CardStars";
import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import NAVBAR_LINKS from "@/components/lists/navbar_links_map";
import { getFeaturedTours } from "@/helpers/api-util";

export default function Tours(props) {
  return (
    <div>
      <GeneralBanner
        section={NAVBAR_LINKS["tours"]["section"]}
        imgUrl={NAVBAR_LINKS["tours"]["imgUrl"]}
        description={NAVBAR_LINKS["tours"]["description"]}
      />
      <div className="max-w-5xl m-auto pt-20 pb-20">
        <CardStars array={props.tours} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const featuredTours = await getFeaturedTours();

  return {
    props: {
      tours: featuredTours,
    },
    revalidate: 1800,
  };
}
