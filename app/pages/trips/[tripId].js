import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import MenuDescription from "@/components/dashboard/tour/menus/menu_description/MenuDescription";
import NAVBAR_LINKS from "@/components/lists/navbar_links_map";
import { getByIdTrips, getFeaturedTrips } from "@/helpers/api-util";

export default function TripDetailsPage(props) {
  const trip = props.selectedTrip;

  if (!trip) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <GeneralBanner
        section={NAVBAR_LINKS["trips"]["section"]}
        imgUrl={NAVBAR_LINKS["trips"]["imgUrl"]}
        description={NAVBAR_LINKS["trips"]["description"]}
      />
      <MenuDescription />
    </div>
  );
}

export async function getStaticProps(context) {
  console.log(context);
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
