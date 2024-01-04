import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import MenuDetailsId from "@/components/common/menu_id/MenuDetailsId";
import NAVBAR_LINKS from "@/components/lists/navbar_links_map";
import { getByIdTrips, getFeaturedTrips } from "@/helpers/api-util";

export default function TripDetailsPage(props) {
  return (
    <div>
      <GeneralBanner
        section={NAVBAR_LINKS["trips"]["section"]}
        imgUrl={NAVBAR_LINKS["trips"]["imgUrl"]}
        description={NAVBAR_LINKS["trips"]["description"]}
      />
      <div className="roboto max-w-5xl m-auto pt-20 pb-20">
        <MenuDetailsId
          accessOption1={props.accessOption1}
          accessOption2={props.accessOption2}
          accessOption3={props.accessOption3}
          bullet1={props.bullet1}
          bullet2={props.bullet2}
          bullet3={props.bullet3}
          bullet4={props.bullet4}
          description1={props.selectedTrip.description1}
          distance={props.distance}
          evaluation={props.selectedTrip.evaluation}
          labelOption1={props.selectedTrip.labelOption1}
          labelOption2={props.selectedTrip.labelOption2}
          labelOption1Description={props.labelOption1Description}
          labelOption2Description={props.labelOption2Description}
          source={props.source}
        />
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const tripId = context.params.tripId;

  const trip = await getByIdTrips(tripId);

  return {
    props: {
      selectedTrip: trip,
    },
    revalidate: 1800,
  };
}

export async function getStaticPaths() {
  const trips = await getFeaturedTrips();
  const paths = trips.map((trip) => ({ params: { tripId: trip.id } }));

  return {
    paths: paths,
    fallback: true,
  };
}
