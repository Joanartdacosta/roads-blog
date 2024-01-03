import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import MenuDetailsId from "@/components/common/menu_id/MenuDetailsId";
import NAVBAR_LINKS from "@/components/lists/navbar_links_map";
import { getByIdTour, getFeaturedTours } from "@/helpers/api-util";

export default function TourDetailPage(props) {
  return (
    <div>
      <GeneralBanner
        section={NAVBAR_LINKS["tours"]["section"]}
        imgUrl={NAVBAR_LINKS["tours"]["imgUrl"]}
        description={NAVBAR_LINKS["tours"]["description"]}
      />
      <div className="roboto max-w-5xl m-auto pt-20 pb-20">
        <MenuDetailsId
          duration={props.selectedTour.duration}
          description1={props.selectedTour.description1}
          description2={props.selectedTour.description2}
          distance={props.selectedTour.distance}
          difficulty={props.selectedTour.difficulty}
          waydescription={props.selectedTour.waydescription}
          access={props.selectedTour.waydescription}
          bullet1={props.selectedTour.bullet1}
          bullet2={props.selectedTour.bullet2}
          bullet3={props.selectedTour.bullet3}
          restaurant1={props.selectedTour.restaurant1}
          restaurant2={props.selectedTour.restaurant2}
          hotel1={props.selectedTour.hotel1}
          hotel2={props.selectedTour.hotel2}
          hotel3={props.selectedTour.hotel3}
          wayoption1={props.selectedTour.wayoption1}
          wayoption2={props.selectedTour.wayoption2}
          wayoption3={props.selectedTour.wayoption3}
        />
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const tourId = context.params.tourId;

  const tour = await getByIdTour(tourId);

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
