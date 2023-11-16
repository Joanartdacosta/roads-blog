import CardStars from "@/components/common/UI/cards/card_stars/CardStars";
import React from "react";
import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import NAVBAR_LINKS from "@/components/lists/navbar_links_map";
import { getFeaturedTrips } from "@/helpers/api-util";

export default function Trips(props) {
  return (
    <div>
      <GeneralBanner
        section={NAVBAR_LINKS["trips"]["section"]}
        imgUrl={NAVBAR_LINKS["trips"]["imgUrl"]}
        description={NAVBAR_LINKS["trips"]["description"]}
      />
      <div className="max-w-5xl m-auto pt-20 pb-20">
        <CardStars array={props.trips} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const featuredTrips = await getFeaturedTrips();

  return {
    props: {
      trips: featuredTrips,
    },
    revalidate: 1800,
  };
}
