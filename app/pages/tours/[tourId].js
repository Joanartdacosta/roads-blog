import {
  getByIdTour,
  getFeaturedTours,
  getTourAccesses,
  getTourCoordinates,
  getTourDescriptions,
  getTourMarkers,
  getTourTips,
} from "@/helpers/api-util";
import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import MenuDetailsId from "@/components/common/menu_id/MenuDetailsId";
import NAVBAR_LINKS from "@/components/lists/navbar_links_map";
import { saveTour } from "@/redux/tourSlice";
import store from "@/redux/store";

export default function TourDetailPage(props) {
  store.dispatch(saveTour(props.selectedTour));

  return (
    <div>
      <GeneralBanner
        section={NAVBAR_LINKS["tours"]["section"]}
        imgUrl={NAVBAR_LINKS["tours"]["imgUrl"]}
      />

      {props.selectedTour ? (
        <div className="roboto max-w-5xl m-auto pt-20 pb-20">
          <MenuDetailsId page="tour" />
        </div>
      ) : (
        <p>Nao existem roteiros.</p>
      )}
    </div>
  );
}

export async function getStaticProps(context) {
  const tourId = context.params.tourId;

  const tourIds = await getByIdTour(tourId);
  const tourAccess = await getTourAccesses(tourId);
  const tourCoordinates = await getTourCoordinates(tourId);
  const tourDescriptions = await getTourDescriptions(tourId);
  const tourMarkers = await getTourMarkers(tourId);
  const tourTourismTips = await getTourTips(tourId);

  const tour = {
    ...tourIds,
    ...tourDescriptions,
    ...tourAccess,
    ...tourCoordinates,
    ...tourMarkers,
    ...tourTourismTips,
  };

  console.log(tour);

  return {
    props: {
      selectedTour: tour,
    },
    revalidate: 1800,
  };
}

export async function getStaticPaths() {
  const tours = await getFeaturedTours();
  const paths = tours.map((tour) => ({ params: { tourId: tour.id } }));

  return {
    paths: paths,
    fallback: true,
  };
}
