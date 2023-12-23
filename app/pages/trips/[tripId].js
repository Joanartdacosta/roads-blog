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
          // access={props.selectedTrip.access}
          accessOption1={props.selectedTrip.accessOption1}
          accessOption2={props.selectedTrip.accessOption2}
          description={props.selectedTrip.description}
          evaluation={props.selectedTrip.evaluation}
          parish={props.selectedTrip.parish}
          road1={props.selectedTrip.road1}
          road2={props.selectedTrip.road2}
          road3={props.selectedTrip.road3}
          tip1={props.selectedTrip.tip1}
          tip2={props.selectedTrip.tip2}
          weather={props.selectedTrip.weather}
          waydescription={props.selectedTrip.waydescription}
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
