import {
  getByTripIdAccesses,
  getByTripIdCoordinates,
  getByTripIdDescription,
  getByTripIdMarkers,
  getByTripIdTourismTips,
  getByIdTrips,
  getFeaturedTrips,
} from "@/helpers/api-util";
import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import MenuDetailsId from "@/components/common/menu_id/MenuDetailsId";
import NAVBAR_LINKS from "@/components/lists/navbar_links_map";
import { saveTrip } from "@/redux/tripSlice";
import store from "@/redux/store";

export default function TripDetailsPage(props) {
  store.dispatch(saveTrip(props.selectedTrip));

  return (
    <div>
      <GeneralBanner
        section={NAVBAR_LINKS["trips"]["section"]}
        imgUrl={NAVBAR_LINKS["trips"]["imgUrl"]}
      />

      <div className="roboto max-w-5xl m-auto pt-20 pb-20">
        {props.selectedTrip ? (
          <MenuDetailsId page="trip" />
        ) : (
          <p>Nao existem passeios.</p>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const tripId = context.params.tripId;

  const tripIds = await getByIdTrips(tripId);
  const tripDescriptions = await getByTripIdDescription(tripId);
  const tripAccess = await getByTripIdAccesses(tripId);
  const tripCoordinates = await getByTripIdCoordinates(tripId);
  const tripMarkers = await getByTripIdMarkers(tripId);
  const tripTourismTips = await getByTripIdTourismTips(tripId);

  const trip = {
    ...tripIds,
    ...tripDescriptions,
    ...tripAccess,
    ...tripCoordinates,
    ...tripMarkers,
    ...tripTourismTips,
  };

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
